# SwingConnect (Starter)

Paid messaging dating/meetup template with photo uploads and subscription paywall.

## Quick start
1) Copy `.env.example` to `.env.local` and fill values (Clerk, Stripe, Postgres, UploadThing).
2) `npm i`
3) `npx prisma db push`
4) `npm run dev`
5) Create three Stripe Prices and set env: `NEXT_PUBLIC_STRIPE_PRICE_BASIC`, `PLUS`, `VIP`.
6) Expose webhook: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`

## Notes
- Messaging endpoint is gated in `middleware.ts` and `app/api/messages/route.ts`.
- Replace placeholder discovery/profile data with DB queries.
- Add age/KYC verification provider and moderation pipeline for real launch.
- Consider processors that allow adult/dating content if Stripe declines.
