import { useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

const UrlForm = ({ refreshTable }) => {
    const [form, setForm] = useState({
        original_url: "",
        short_code: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            await api.post(
                "/url/shorten",
                form,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            toast.success("Short URL Created!");

            setForm({
                original_url: "",
                short_code: "",
            });

            if (refreshTable) {
                refreshTable();
            }
        } catch (err) {
            toast.error(
                err.response?.data?.message || "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

            <h2 className="text-2xl font-bold mb-6">
                Create New Short Link
            </h2>

            <form
                onSubmit={handleSubmit}
                className="grid lg:grid-cols-3 gap-5"
            >

                <input
                    type="url"
                    name="original_url"
                    placeholder="https://example.com"
                    value={form.original_url}
                    onChange={handleChange}
                    className="border rounded-xl px-5 py-4 outline-none"
                    required
                />

                <input
                    type="text"
                    name="short_code"
                    placeholder="Custom Alias (optional)"
                    value={form.short_code}
                    onChange={handleChange}
                    className="border rounded-xl px-5 py-4 outline-none"
                />

                <button
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-4 font-bold"
                >
                    {loading ? "Creating..." : "Generate Link"}
                </button>

            </form>

        </div>
    );
};

export default UrlForm;