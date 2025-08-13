
# FitFlow — Automated Fitness E‑commerce Starter

This is a ready-to-customize e‑commerce store (Next.js + Tailwind) tailored for **fitness & health** products.
It includes marketing elements and placeholders to enable automation (payments, chat AI, email marketing).

---

## What you get
- Product catalog (components/products.ts) pre-filled with fitness items.
- Stripe Payment Links ready to be added (no backend required for payments).
- Crisp live chat snippet included (replace CRISP_WEBSITE_ID).
- Newsletter component (replace with Brevo/Mailchimp embed or API call).
- Optional server-side API route to proxy chat requests to OpenAI (requires OPENAI_API_KEY).

---

## Quick setup (local)

1. Install Node (LTS) and then:
```bash
npm install
npm run dev
```

2. Open http://localhost:3000 to preview the store.

---

## Make it live (Vercel — free hosting + free `.vercel.app` domain)

1. Create a GitHub repo and push the project folder `fitness-shop-auto`.
2. Sign in to https://vercel.com and **Import Project** → Choose your GitHub repo → Deploy.
3. Add Environment Variables in Vercel dashboard (Project Settings):
   - `CRISP_WEBSITE_ID` — your Crisp ID (used client-side in layout).
   - `OPENAI_API_KEY` — optional, for enabling server-side AI replies (only if you want OpenAI powered assistant).
4. Deploy — Vercel will give you `your-project.vercel.app` domain.

---

## Payments — Stripe Payment Links (no backend required)

1. Create a Stripe account.
2. In Stripe Dashboard → **Products** → create each product, then **Payment Links** → create a Link.
3. Copy the Payment Link and paste it into `components/products.ts` under `stripeLink` for each product.
4. Customers clicking a product's **Buy now** will be taken to Stripe's secure Checkout page.

---

## Live Chat & AI assistant

**Crisp** (recommended):
- Create a free Crisp account → get Website ID → replace `REPLACE_WITH_CRISP_ID` in `app/layout.tsx` (or set `CRISP_WEBSITE_ID` env and modify layout to read it).
- Crisp provides chat, auto-responses, and integrations. For AI agent capabilities, Crisp offers AI features or you can connect to an external OpenAI-backed bot.

**OpenAI assistant (optional server-side proxy):**
- Add `OPENAI_API_KEY` in Vercel env variables.
- Implement the OpenAI call in `api/chat/route.ts` (the file includes a stub).

---

## Marketing automation (recommended steps)

1. **Email marketing** — Use Brevo / Mailchimp:
   - Create an account, create a signup form, and replace `Newsletter.tsx` with their embed or call their API.
   - Create a welcome automation that sends: Welcome email → 3-day tips → Product best-sellers → Discount coupon (e.g., 10% off first order).

2. **Conversion & Ads**:
   - Install Google Analytics or Plausible for insights.
   - Run small paid campaigns on Facebook/Instagram targeting fitness interests; start with product drops and collect emails.

3. **Retention**:
   - Use Crisp or an email automation to send cart abandonment reminders (requires capturing email or using Stripe checkout webhooks / backend).

---

## What I can do for you (if you want me to continue)
- Create Stripe Payment Links and paste them into products for you (you give Stripe access or do it and share links).
- Customize product images, SEO copy, and collection pages for your niche.
- Set up Vercel deployment config and sample environment variables file.
- Implement server-side OpenAI integration in `api/chat/route.ts` once you provide an API key to store in Vercel env.

---

**Download the ZIP** below and follow the README to deploy.

