-- Run this once in Supabase → SQL Editor → New query → Run

-- Contact form messages
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default now()
);
alter table messages enable row level security;
-- No public policies on purpose: the frontend never talks to Supabase directly
-- for messages — only the server (using the service role key) can read/write.

-- Projects (shown on the homepage + /projects page)
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default 'webdev', -- 'webdev' | 'wp' | 'shopify'
  description text not null,
  features jsonb default '[]',
  tech jsonb default '[]',
  image text,
  url text not null,
  sort_order int default 0,
  created_at timestamp with time zone default now()
);
alter table projects enable row level security;

-- Anyone (including anonymous website visitors) can READ projects,
-- since they're shown publicly on the site.
create policy "Public can read projects" on projects
  for select to anon using (true);

-- Only the server (service role key, used in /admin routes) can insert/update/delete.
-- No insert/update/delete policy is created for "anon" on purpose.
