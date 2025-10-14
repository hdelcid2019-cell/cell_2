import Link from "next/link"

export default function Home() {
  return (
    <div className="grid gap-8">
      <section className="card">
        <h1 className="text-3xl font-bold mb-2">SwingConnect</h1>
        <p className="opacity-80">Photo-friendly discovery. Only subscribers can message.</p>
        <div className="mt-4 flex gap-3">
          <Link className="btn" href="/discover">Browse Profiles</Link>
          <Link className="btn" href="/billing">See Plans</Link>
        </div>
      </section>
      <section className="card">
        <h2 className="text-xl font-semibold">Safety & Consent</h2>
        <ul className="list-disc ml-5 opacity-80">
          <li>18+ only, respect boundaries.</li>
          <li>No escorting/solicitation.</li>
          <li>Share city/region only, not exact addresses.</li>
        </ul>
      </section>
    </div>
  )
}
