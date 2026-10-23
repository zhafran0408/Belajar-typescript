import { useState } from "react";

// 1. Ambil semua teks asli (raw) dari file .ts di folder materi
const rawFiles = import.meta.glob('./materi/*.ts', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

// 2. Ambil URL (jalur) file .ts yang udah dikompilasi Vite biar bisa dijalanin
const urlFiles = import.meta.glob('./materi/*.ts', { query: '?url', import: 'default', eager: true }) as Record<string, string>;

const daftarMateri = [
  { id: "01", nama: "01. Dasar TypeScript", path: "./materi/01-dasar-typescript.ts" },
  { id: "02", nama: "02. Operator", path: "./materi/02-operator.ts" },
  { id: "03", nama: "03. Conditional", path: "./materi/03-conditional.ts" },
  { id: "04", nama: "04. Loops & Logic", path: "./materi/04-loops-dan-logic.ts" },
  { id: "05", nama: "05. Function", path: "./materi/05-function.ts" },
];

export default function App() {
  const [logs, setLogs] = useState<string[]>([]);
  const [activeFile, setActiveFile] = useState<string | null>(null);
  const [kodeMateri, setKodeMateri] = useState<string>("// Pilih materi di kiri untuk melihat kodenya...");

  const jalankanMateri = async (id: string, path: string) => {
    setActiveFile(id);
    setLogs(["⏳ Menjalankan file..."]);
    
    // Tampilkan kode mentahnya ke layar tengah
    setKodeMateri(rawFiles[path] || "// File tidak ditemukan");

    const tempLogs: string[] = [];
    const originalLog = console.log;

    // Trik bajak console.log
    console.log = (...args) => {
      originalLog(...args);
      const teks = args.map((arg) => 
        typeof arg === "object" ? JSON.stringify(arg) : String(arg)
      ).join(" ");
      tempLogs.push(teks);
    };

    try {
      // Trik Vite: Ambil URL file yang udah di-compile, lalu jalanin pakai cache buster ?t=
      const fileUrl = urlFiles[path];
      if (!fileUrl) throw new Error("File tidak ditemukan di folder materi.");
      
      await import(/* @vite-ignore */ `${fileUrl}?t=${Date.now()}`);
      
    } catch (error) {
      tempLogs.push(`❌ Error: ${error}`);
    } finally {
      console.log = originalLog;
      setLogs(tempLogs.length > 0 ? tempLogs : ["(Tidak ada output)"]);
    }
  };

  return (
    <div className="flex h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono overflow-hidden">
      
      {/* 1. SIDEBAR KIRI */}
      <div className="w-[250px] bg-[#252526] border-r border-[#333] p-4 overflow-y-auto flex-shrink-0">
        <h2 className="text-xs font-bold text-[#ccc] tracking-wider uppercase mb-5">
          📁 Explorer
        </h2>
        <div className="flex flex-col gap-1">
          {daftarMateri.map((materi) => (
            <button
              key={materi.id}
              className={`text-left px-3 py-2 text-sm rounded transition-colors duration-150 cursor-pointer ${
                activeFile === materi.id 
                  ? "bg-[#37373d] text-white" 
                  : "text-[#9cdcfe] hover:bg-[#2a2d2e]"
              }`}
              onClick={() => jalankanMateri(materi.id, materi.path)}
            >
              📄 {materi.nama}
            </button>
          ))}
        </div>
      </div>

      {/* 2. PANEL TENGAH: LIHAT KODE */}
      <div className="flex-1 flex flex-col border-r border-[#333] bg-[#1e1e1e]">
        <div className="bg-[#2d2d2d] px-4 py-3 border-b border-[#333] text-sm text-gray-300">
          📝 Source Code
        </div>
        <div className="p-4 overflow-y-auto flex-1 text-sm text-[#ce9178] whitespace-pre-wrap font-mono">
          {kodeMateri}
        </div>
      </div>

      {/* 3. PANEL KANAN: TERMINAL OUTPUT */}
      <div className="w-[400px] flex flex-col bg-[#181818] flex-shrink-0">
        <div className="bg-[#2d2d2d] px-4 py-3 flex justify-between items-center border-b border-[#333]">
          <span className="text-sm text-gray-300">💻 Terminal</span>
        </div>
        <div className="p-4 overflow-y-auto flex-1 text-sm">
          {logs.map((log, index) => (
            <div key={index} className="mb-2 leading-relaxed break-words text-[#d4d4d4]">
              <span className="text-[#569cd6] font-bold mr-2">&gt;</span> 
              {log}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
