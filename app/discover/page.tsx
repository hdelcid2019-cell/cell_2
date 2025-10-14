import Image from "next/image"
import Link from "next/link"
import ChatPaywall from "@/components/ChatPaywall"

export default async function Discover() {
  // Placeholder cards
  const people = [
    { id: "u1", name: "Alex & Sam", city: "Austin, TX", img: "https://picsum.photos/seed/a/600/400" },
    { id: "u2", name: "Jordan", city: "Dallas, TX", img: "https://picsum.photos/seed/b/600/400" },
    { id: "u3", name: "Taylor & Chris", city: "Houston, TX", img: "https://picsum.photos/seed/c/600/400" }
  ]
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">Discover</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {people.map(p => (
          <div key={p.id} className="card">
            <Image src={p.img} width={600} height={400} alt={p.name} className="rounded-xl" />
            <div className="mt-3">
              <div className="font-semibold">{p.name}</div>
              <div className="opacity-70 text-sm">{p.city}</div>
              <div className="mt-3 flex gap-2">
                <Link href={`/profile/${p.id}`} className="btn">View</Link>
                <ChatPaywall />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
