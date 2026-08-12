# Hirtik Kumar — Full-Stack Portfolio

Next.js + Supabase + Resend. Same design as before, now fully dynamic:
- Projects load from a Supabase database (fallback to built-in list until you add your own)
- Contact form saves messages to Supabase AND emails you instantly via Resend
- `/admin` — private dashboard to add/delete projects and read messages, no code needed

## 1. Install dependencies
```
npm install
```

## 2. Set up Supabase
1. Create a free project at https://supabase.com
2. Go to **SQL Editor → New query**, paste everything from `supabase-schema.sql` in this folder, click **Run**.
3. Go to **Project Settings → API** and copy:
   - Project URL
   - `anon` `public` key
   - `service_role` key (keep this secret!)

## 3. Set up Resend (for email notifications)
1. Create a free account at https://resend.com
2. Go to **API Keys** → create one, copy it.

## 4. Configure environment variables
Copy `.env.example` to `.env.local` and fill in the values from steps 2 & 3:
```
cp .env.example .env.local
```
Also set `ADMIN_PASSWORD` to a password of your choice — this protects `/admin`.

## 5. Run locally
```
npm run dev
```
Open http://localhost:3000

## 6. Deploy (Vercel — free)
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com → New Project → import the repo.
3. In Vercel's project settings, add the same environment variables from `.env.local`.
4. Deploy. Done — your site is live with a real backend.

## Adding projects
Go to `yourdomain.com/admin`, log in with your `ADMIN_PASSWORD`, and add projects there.
They'll immediately appear on the homepage and `/projects` page — no redeploy needed.
