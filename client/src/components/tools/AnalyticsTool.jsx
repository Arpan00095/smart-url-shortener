const AnalyticsTool = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border">

      <h3 className="text-2xl font-bold mb-5">
        📊 Analytics
      </h3>

      <div className="grid grid-cols-3 gap-4">

        <div className="bg-blue-50 rounded-xl p-5">
          <p className="text-gray-500">Links</p>
          <h2 className="text-3xl font-bold">0</h2>
        </div>

        <div className="bg-green-50 rounded-xl p-5">
          <p className="text-gray-500">Clicks</p>
          <h2 className="text-3xl font-bold">0</h2>
        </div>

        <div className="bg-purple-50 rounded-xl p-5">
          <p className="text-gray-500">QR Codes</p>
          <h2 className="text-3xl font-bold">0</h2>
        </div>

      </div>

    </div>
  );
};

export default AnalyticsTool;