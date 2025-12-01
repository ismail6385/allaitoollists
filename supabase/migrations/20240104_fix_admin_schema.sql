-- 1. Add is_admin column if it doesn't exist
alter table user_profiles add column if not exists is_admin boolean default false;

-- 2. Create index for performance
create index if not exists idx_user_profiles_is_admin on user_profiles(is_admin);

-- 3. Promote your user to admin (Replace YOUR_EMAIL_HERE)
UPDATE user_profiles
SET is_admin = true
WHERE id IN (
  SELECT id FROM auth.users WHERE email = 'YOUR_EMAIL_HERE'
);

-- 4. Verify the result
SELECT * FROM user_profiles WHERE is_admin = true;
