export async function POST() {
  // Preview mode: no real checkout or Stripe
  return Response.json({ url: null })
}
