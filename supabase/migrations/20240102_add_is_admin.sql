-- Add is_admin field to user_profiles table
alter table user_profiles add column if not exists is_admin boolean default false;

-- Create index for faster admin queries
create index if not exists idx_user_profiles_is_admin on user_profiles(is_admin);

-- Comment
comment on column user_profiles.is_admin is 'Indicates if user has admin privileges';
