import "./globals.css"
import Nav from "@/components/Nav"


export const metadata = {
  title: "SwingConnect",
  description: "Discover, connect, and chat—messaging unlocked with subscription."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container pb-20">{children}</main>
      </body>
    </html>
  )
}
