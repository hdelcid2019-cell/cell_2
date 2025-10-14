import Link from "next/link"
export default function Nav() {
  return (
    <nav className="container py-4 flex items-center justify-between">
      <Link href="/" className="text-lg font-semibold">SwingConnect</Link>
      <div className="flex gap-3">
        <Link className="btn" href="/discover">Discover</Link>
        <Link className="btn" href="/billing">Plans</Link>
      </div>
    </nav>
  )
}
