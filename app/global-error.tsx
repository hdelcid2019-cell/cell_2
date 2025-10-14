'use client'

export default function GlobalError({
  error,
  reset,
}: { error: Error; reset: () => void }) {
  console.error(error)
  return (
    <html>
      <body style={{ padding: 24 }}>
        <h1>App crashed</h1>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Reload</button>
      </body>
    </html>
  )
}
