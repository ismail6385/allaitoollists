-- Create activity_logs table
create table activity_logs (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete set null,
  action text not null,
  details jsonb,
  ip_address text,
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table activity_logs enable row level security;

-- Policies
create policy "Admins can view activity logs"
  on activity_logs for select
  using (
    auth.uid() in (
      select id from user_profiles where is_admin = true
    )
  );

create policy "Authenticated users can insert activity logs"
  on activity_logs for insert
  with check (auth.role() = 'authenticated');

-- Create index for performance
create index activity_logs_created_at_idx on activity_logs(created_at desc);
create index activity_logs_user_id_idx on activity_logs(user_id);
