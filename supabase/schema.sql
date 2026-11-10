-- Executar no SQL Editor do Supabase.
create table if not exists public.admin_users (user_id uuid primary key references auth.users(id) on delete cascade);
create table if not exists public.products (id uuid primary key default gen_random_uuid(),name text not null,team text default '',category text not null default 'ligas',league text default '',price numeric(10,2) not null check(price>=0),old_price numeric(10,2),stock integer not null default 0 check(stock>=0),badge text default 'Novo',featured boolean default false,kind text default 'shirt',color text default '#eeeeee',accent text default '#d5b65f',image_url text default '',created_at timestamptz not null default now());
create table if not exists public.orders (id uuid primary key default gen_random_uuid(),customer_email text,total numeric(10,2) not null default 0,status text not null default 'pending',items jsonb not null default '[]'::jsonb,created_at timestamptz not null default now());
create table if not exists public.store_settings (key text primary key,value text not null default '');
create or replace function public.is_admin() returns boolean language sql stable security definer set search_path=public as $$select exists(select 1 from public.admin_users where user_id=auth.uid())$$;
alter table public.admin_users enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.store_settings enable row level security;
create policy "Admin users read own" on public.admin_users for select to authenticated using (user_id=auth.uid());
create policy "Products public read" on public.products for select to anon,authenticated using (true);
create policy "Products admin insert" on public.products for insert to authenticated with check (public.is_admin());
create policy "Products admin update" on public.products for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "Products admin delete" on public.products for delete to authenticated using (public.is_admin());
create policy "Orders admin read" on public.orders for select to authenticated using (public.is_admin());
create policy "Orders admin update" on public.orders for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "Settings public read" on public.store_settings for select to anon,authenticated using (true);
create policy "Settings admin insert" on public.store_settings for insert to authenticated with check (public.is_admin());
create policy "Settings admin update" on public.store_settings for update to authenticated using (public.is_admin()) with check (public.is_admin());
insert into public.store_settings(key,value) values ('announcement','LEVA 5 PAGA 4'),('support_email','suporte.goaldistrict@gmail.com') on conflict (key) do nothing;
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types) values ('products','products',true,5242880,array['image/jpeg','image/png','image/webp']) on conflict(id) do nothing;
create policy "Product images public" on storage.objects for select to anon,authenticated using (bucket_id='products');
create policy "Product images admin upload" on storage.objects for insert to authenticated with check (bucket_id='products' and public.is_admin());
create policy "Product images admin delete" on storage.objects for delete to authenticated using (bucket_id='products' and public.is_admin());
-- Depois de criar a conta no Supabase Authentication > Users, autorizar o seu UUID:
-- insert into public.admin_users(user_id) values ('COLOCA-AQUI-O-UUID-DA-CONTA');
