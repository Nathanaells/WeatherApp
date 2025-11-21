export default function Legend() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-md z-50 flex flex-col items-center">
      <h3 className="font-semibold mb-2 text-gray-800">Legend</h3>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-400" />
          <span className="text-gray-700 text-sm">Global/API</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-orange-500" />
          <span className="text-gray-700 text-sm">User</span>
        </div>
      </div>
    </div>
  );
}
