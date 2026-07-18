import { useEffect, useState } from "react";
import api from "../../services/api";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const QRTable = () => {
  const [qrs, setQrs] = useState([]);

  useEffect(() => {
    fetchQRs();
  }, []);

  const fetchQRs = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/qr/my-qrs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setQrs(res.data.data);

    } catch (err) {
      console.log(err);
    }
  };

  const deleteQR = async (id) => {
    if (!window.confirm("Delete this QR?")) return;

    try {
      const token = localStorage.getItem("token");

      await api.delete(`/qr/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("QR Deleted");

      fetchQRs();

    } catch {
      toast.error("Delete Failed");
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-4 md:p-6 mt-8">

      <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-800 dark:text-white">
        My QR Codes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

      
        {qrs.map((qr) => (

          <div
            key={qr.id}
            className="border border-slate-200 dark:border-slate-700 rounded-xl p-5 bg-slate-50 dark:bg-slate-800"
          >

            <img
              src={qr.qr_image}
              alt="QR"
              className="w-40 sm:w-48 mx-auto"
            />

            <p className="mt-4 text-sm break-all">
              {qr.original_url}
            </p>

            <button
              onClick={() => deleteQR(qr.id)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <FaTrash />
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default QRTable;