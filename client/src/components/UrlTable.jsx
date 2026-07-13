import { useEffect, useState } from "react";
import api from "../services/api";
import { FaCopy, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const UrlTable = ({ refresh }) => {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        fetchUrls();
    }, [refresh]);

    const fetchUrls = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await api.get("/url/my-urls", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setUrls(res.data.data);

        } catch (err) {
            console.log(err);
        }
    };

    const copyLink = async (shortCode) => {
        const link = `http://localhost:5000/${shortCode}`;

        await navigator.clipboard.writeText(link);

        toast.success("Short URL copied!");
    };

    const deleteUrl = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this URL?"
        );

        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("token");

            await api.delete(`/url/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            toast.success("URL Deleted Successfully");

            fetchUrls();

        } catch (err) {
            toast.error(
                err.response?.data?.message || "Delete Failed"
            );
        }
    };


    return (
        <div className="bg-white rounded-2xl shadow-lg mt-8 p-6">

            <h2 className="text-2xl font-bold mb-6">
                My URLs
            </h2>

            <table className="w-full">

                <thead>

                    <tr className="text-left border-b">

                        <th className="py-4">Original URL</th>

                        <th>Short URL</th>

                        <th>Clicks</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {urls.map((url) => (

                        <tr key={url.id} className="border-b">

                            <td className="py-4 truncate max-w-xs">
                                {url.original_url}
                            </td>

                            <td>
                                <a
                                    href={`http://localhost:5000/${url.short_code}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                                >
                                    {`http://localhost:5000/${url.short_code}`}
                                </a>
                            </td>

                            <td>
                                {url.clicks}
                            </td>

                            <td>

                                <div className="flex gap-3">

                                    <button
                                        onClick={() => copyLink(url.short_code)}
                                        className="text-blue-600"
                                    >
                                        <FaCopy />
                                    </button>

                                    <button
                                        onClick={() => deleteUrl(url.id)}
                                        className="text-red-500 hover:text-red-700 transition"
                                    >
                                        <FaTrash />
                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
};

export default UrlTable;