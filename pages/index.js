
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-16 space-y-10 w-full">
      <img src="/eternityalpha.png" alt="Eternity Logo" className="w-24 h-24 mb-4" />
      <h1 className="text-5xl font-serif text-white">Eternity</h1>
      <p className="text-xl text-white opacity-80">Preserve your story. Live beyond.</p>
      <input
        type="email"
        placeholder="Email address"
        className="mt-6 px-6 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 w-full max-w-sm"
      />
      <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded text-white font-semibold shadow-lg transition mt-2">
        Join the Waitlist
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-4xl">
        <div className="bg-white/5 p-6 rounded-xl shadow-md text-white">
          <h3 className="text-xl font-semibold mb-2">🧠 AI-Powered Memories</h3>
        </div>
        <div className="bg-white/5 p-6 rounded-xl shadow-md text-white">
          <h3 className="text-xl font-semibold mb-2">🕯 Tribute Pages</h3>
        </div>
        <div className="bg-white/5 p-6 rounded-xl shadow-md text-white">
          <h3 className="text-xl font-semibold mb-2">🔒 Private Vault Storage</h3>
        </div>
      </div>
    </div>
  );
}
