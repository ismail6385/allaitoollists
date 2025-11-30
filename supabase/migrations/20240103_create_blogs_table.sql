-- Create blogs table
create table if not exists blogs (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  content text,
  excerpt text,
  cover_image text,
  author_id uuid references auth.users(id) on delete set null,
  is_published boolean default false,
  tags text[] default '{}',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS
alter table blogs enable row level security;

-- Policies
create policy "Public can view published blogs"
  on blogs for select
  using (is_published = true);

create policy "Admins can view all blogs"
  on blogs for select
  using (
    auth.uid() in (
      select id from user_profiles where is_admin = true
    )
  );

create policy "Admins can insert blogs"
  on blogs for insert
  with check (
    auth.uid() in (
      select id from user_profiles where is_admin = true
    )
  );

create policy "Admins can update blogs"
  on blogs for update
  using (
    auth.uid() in (
      select id from user_profiles where is_admin = true
    )
  );

create policy "Admins can delete blogs"
  on blogs for delete
  using (
    auth.uid() in (
      select id from user_profiles where is_admin = true
    )
  );

-- Indexes
create index if not exists idx_blogs_slug on blogs(slug);
create index if not exists idx_blogs_published on blogs(is_published);
create index if not exists idx_blogs_created_at on blogs(created_at);
