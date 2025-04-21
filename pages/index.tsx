import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thanks for signing up, ${email}!`)
  }

  return (
    <>
      <Head>
        <title>Eternity Engine — Preserve Your Story</title>
        <meta name="description" content="AI-powered memory preservation and digital legacy platform." />
      </Head>
      <main className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen font-sans">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Your voice. Your story. Forever.</h1>
          <p className="text-xl sm:text-2xl mb-10 text-gray-300">
            Eternity Engine creates AI twins that preserve your essence — voice, memories, and presence — so your loved ones never lose you.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="p-3 rounded-lg text-black w-full sm:w-96"
            />
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 transition text-white px-6 py-3 rounded-lg">
              Join the Waitlist
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-400">Patent Pending · Filed April 2025</p>
        </div>
        <section className="max-w-3xl mx-auto px-6 py-12 text-left">
          <h2 className="text-2xl font-semibold mb-4">Inspired by loss, built for love.</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            There’s a moment we all experience but never expect: the first time you forget the sound of someone’s voice.<br /><br />
            For Michael, that moment came after his mother passed. He would replay her voicemails again and again… just to hear her say “I love you.”<br /><br />
            Around that same time, he was watching his daughter grow. Her laugh. Her questions. The tiny voice that changed month by month.
            It hit him: we don’t just lose people. We lose versions of them — and of ourselves — all the time.<br /><br />
            So he built Eternity Engine. A way to preserve the voices we love, the memories we treasure, and the moments that define us…
            long after time tries to take them away.<br /><br />
            With AI, we can do more than remember. We can <span className="italic">reconnect</span>.
          </p>
        </section>
        <footer className="text-center text-gray-500 text-sm py-10">
          <img src="/eternity-icon-white.png" alt="Eternity Engine Icon" className="mx-auto mb-4 w-10 h-10" />
          <p>love@eternityengine.ai</p>
          <p>© 2025 Eternity Engine™. All rights reserved.</p>
        </footer>
      </main>
    </>
  )
}
