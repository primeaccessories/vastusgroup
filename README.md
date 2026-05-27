# A2B Payments

Marketing site + customer portal for A2B Payment Solutions Ltd. Built by Turbo IT.

## Stack
- Vite 8 + React 19 + TypeScript
- Tailwind CSS v4
- React Router 7
- lucide-react icons
- Deployed to Cloudflare Pages (account: prime)

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

Outputs to `dist/`.

## Routes

**Marketing**
- `/` — Home
- `/products` — All products grid
- `/products/:slug` — Product detail
- `/team` — Our team
- `/testimonials` — Testimonials
- `/contact` — Contact / enquiry form

**Auth**
- `/sign-in`, `/sign-up`, `/forgot-password`

**Customer portal** (all mock data — backend wiring is Phase 2)
- `/portal` — Dashboard overview
- `/portal/transactions` — Transaction list with filters/search
- `/portal/loans` — Cash advance / loan balance & repayments
- `/portal/terminals` — Terminal health & status
- `/portal/support` — Tickets list
- `/portal/profile` — Profile, contact, documents

## Phase 2 — Backend
- Wire Supabase auth (separate Supabase project to be provisioned)
- Replace mock data in `src/lib/portal-mock.ts` with real queries
- Admin upload tools for statements / agreements
- Integration with A2B's payment processor for live transactions
- Integration with their lending platform for loan balances
