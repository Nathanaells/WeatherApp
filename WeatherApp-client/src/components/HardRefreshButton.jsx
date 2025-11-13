import axios from "axios";
import { RefreshCw } from "lucide-react";
import { showError, showSuccess } from "../UI/toastUI";

export default function HardRefreshButton({ onDataFetched }) {
  const handleRefresh = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios.post("http://localhost:3000/weather/fetch", {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      showSuccess("Data berhasil di-refresh!");
      if (onDataFetched) onDataFetched(data);
    } catch (err) {
      console.error(err);
      showError(err.response?.data?.message || "Gagal refresh data");
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={handleRefresh}
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg transition"
      >
        <RefreshCw size={18} />
        Refresh
      </button>
    </div>
  );
}
