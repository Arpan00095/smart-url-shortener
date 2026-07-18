import { useEffect, useState } from "react";
import api from "../../services/api";
import { FaCopy, FaTrash, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";

const UrlTable = ({ refresh, onRefresh }) => {

    const [urls, setUrls] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [showModal, setShowModal] = useState(false);

    const [editData, setEditData] = useState({
        id: "",
        original_url: "",
    });

    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("newest");

    const itemsPerPage = 5;


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

        const link = `${import.meta.env.VITE_SERVER_URL}/${shortCode}`;

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


            if (onRefresh) {
                onRefresh();
            }


        } catch (err) {

            toast.error(
                err.response?.data?.message || "Delete Failed"
            );

        }

    };



    const editUrl = (url) => {

        setEditData({
            id: url.id,
            original_url: url.original_url,
        });


        setShowModal(true);

    };



    const saveChanges = async () => {

        try {

            const token = localStorage.getItem("token");


            await api.put(
                `/url/${editData.id}`,
                {
                    original_url: editData.original_url,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );


            toast.success("URL Updated Successfully");


            setShowModal(false);


            fetchUrls();


            if (onRefresh) {
                onRefresh();
            }


        } catch (err) {

            toast.error(
                err.response?.data?.message || "Update Failed"
            );

        }

    };



    const filteredUrls = urls.filter((url) =>
        url.original_url
            .toLowerCase()
            .includes(search.toLowerCase())

        ||

        url.short_code
            .toLowerCase()
            .includes(search.toLowerCase())
    );



    const sortedUrls = [...filteredUrls].sort((a, b) => {

        switch (sortBy) {

            case "oldest":
                return new Date(a.created_at) - new Date(b.created_at);


            case "clicks":
                return b.clicks - a.clicks;


            case "az":
                return a.original_url.localeCompare(b.original_url);


            case "za":
                return b.original_url.localeCompare(a.original_url);


            default:
                return new Date(b.created_at) - new Date(a.created_at);

        }

    });



    const indexOfLastItem = currentPage * itemsPerPage;

    const indexOfFirstItem = indexOfLastItem - itemsPerPage;


    const currentUrls = sortedUrls.slice(
        indexOfFirstItem,
        indexOfLastItem
    );


    const totalPages = Math.ceil(
        sortedUrls.length / itemsPerPage
    );


    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg mt-8 p-4 md:p-6">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                    My URLs
                </h2>


                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

                    <input
                        type="text"
                        placeholder="Search URLs..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full sm:w-72 border dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />


                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full sm:w-auto border dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    >

                        <option value="newest">
                            Newest
                        </option>

                        <option value="oldest">
                            Oldest
                        </option>

                        <option value="clicks">
                            Most Clicked
                        </option>

                        <option value="az">
                            A → Z
                        </option>

                        <option value="za">
                            Z → A
                        </option>

                    </select>


                </div>

            </div>




            <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] text-slate-800 dark:text-slate-200">


                    <thead className="bg-slate-50 dark:bg-slate-800">

                        <tr className="text-left border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">

                            <th className="py-4">
                                Original URL
                            </th>

                            <th>
                                Short URL
                            </th>

                            <th>
                                Clicks
                            </th>

                            <th>
                                Actions
                            </th>

                        </tr>

                    </thead>



                    <tbody>


                        {
                            currentUrls.length > 0 ? (

                                currentUrls.map((url) => (

                                    <tr
                                        key={url.id}
                                        className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                                    >

                                        <td className="py-4 truncate max-w-xs text-slate-700 dark:text-slate-300">
                                            {url.original_url}
                                        </td>



                                        <td>

                                            <a
                                                href={`${import.meta.env.VITE_SERVER_URL}/${url.short_code}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline font-medium"
                                            >
                                                {`${import.meta.env.VITE_SERVER_URL}/${url.short_code}`}
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
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <FaTrash />
                                                </button>


                                                <button
                                                    onClick={() => editUrl(url)}
                                                    className="text-green-500 hover:text-green-700"
                                                >
                                                    <FaEdit />
                                                </button>


                                            </div>

                                        </td>


                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="4"
                                        className="text-center py-10 text-gray-500 dark:text-slate-400 text-lg"
                                    >
                                        🔍 No URLs Found
                                    </td>

                                </tr>

                            )

                        }


                    </tbody>


                </table>


            </div>





            <div className="flex items-center justify-between mt-6">


                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-slate-700 dark:text-white disabled:opacity-50"
                >
                    Previous
                </button>




                <div className="flex gap-2">


                    {
                        [...Array(totalPages)].map((_, index) => (

                            <button

                                key={index}

                                onClick={() =>
                                    setCurrentPage(index + 1)
                                }

                                className={`w-10 h-10 rounded-lg ${currentPage === index + 1
                                    ?
                                    "bg-blue-600 text-white"
                                    :
                                    "bg-gray-200 dark:bg-slate-700 dark:text-white"
                                    }`}
                            >

                                {index + 1}

                            </button>

                        ))
                    }


                </div>




                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-50"
                >
                    Next
                </button>


            </div>





            <p className="text-center text-gray-500 dark:text-slate-400 mt-4">

                Showing {sortedUrls.length === 0 ? 0 : indexOfFirstItem + 1}–
                {Math.min(indexOfLastItem, sortedUrls.length)}
                of {sortedUrls.length} URLs

            </p>





            {
                showModal && (

                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">


                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 w-[95%] max-w-[500px] shadow-xl">


                            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
                                Edit URL
                            </h2>



                            <input

                                type="text"

                                value={editData.original_url}

                                onChange={(e) =>
                                    setEditData({
                                        ...editData,
                                        original_url: e.target.value
                                    })
                                }

                                className="w-full border dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl px-4 py-3"

                            />





                            <div className="flex justify-end gap-3 mt-6">


                                <button

                                    onClick={() => setShowModal(false)}

                                    className="px-5 py-2 rounded-lg bg-gray-200 dark:bg-slate-700 dark:text-white"
                                >

                                    Cancel

                                </button>




                                <button

                                    onClick={saveChanges}

                                    className="px-5 py-2 rounded-lg bg-blue-600 text-white"
                                >

                                    Save Changes

                                </button>


                            </div>


                        </div>


                    </div>

                )
            }



        </div>

    );

};


export default UrlTable;