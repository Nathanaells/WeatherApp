import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import axios from "axios";

export default function GeminiPanel() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const genAI = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });

  async function handleAsk() {
    if (!query.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/gemini-data`
      );

      const prompt = `
        Kamu adalah asisten cuaca pintar.
        Berikut data cuaca global dan user dari database:
        ${JSON.stringify(data, null, 2)}

        User bertanya: "${query}"

        Jawablah dengan ramah dan singkat (1–2 paragraf),
        berdasarkan data yang tersedia. Jika tidak ada data kota tersebut,
        jawablah bahwa datanya belum tersedia.
        `;

      const result = await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      });

      let text = "";

      if (result?.response?.candidates?.length) {
        text =
          result.response.candidates[0]?.content?.parts?.[0]?.text ||
          "Tidak ada respons dari model.";
      } else if (typeof result?.text === "string") {
        text = result.text;
      } else {
        text = "Tidak ada respons dari model.";
      }

      setResponse(text);
    } catch (err) {
      setResponse("Gagal memuat data atau koneksi ke Gemini error.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-4 w-96 z-50">
      <h3 className="font-semibold text-gray-800 mb-2">
        🤖 Gemini Weather Assistant
      </h3>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Tanyakan cuaca di mana..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAsk}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg"
        >
          {loading ? "..." : "Tanya"}
        </button>
      </div>

      {response && (
        <div className="mt-3 text-sm text-gray-700 whitespace-pre-wrap max-h-60 overflow-y-auto">
          {response}
        </div>
      )}
    </div>
  );
}
