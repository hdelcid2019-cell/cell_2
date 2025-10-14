import Image from "next/image"
import ChatPaywall from "@/components/ChatPaywall"

export default function Profile({ params }: { params: { id: string } }) {
  return (
    <div className="grid gap-6">
      <div className="card">
        <Image src={`https://picsum.photos/seed/${params.id}/800/500`} width={800} height={500} alt="profile" className="rounded-xl" />
        <div className="mt-3">
          <h1 className="text-2xl font-semibold">Profile {params.id}</h1>
          <p className="opacity-80">City: Somewhere</p>
        </div>
      </div>
      <ChatPaywall />
    </div>
  )
}
