-- 1. Ensure is_admin column exists
alter table user_profiles add column if not exists is_admin boolean default false;

-- 2. Create index if not exists
create index if not exists idx_user_profiles_is_admin on user_profiles(is_admin);

-- 3. Make allaitoolist@gmail.com the ONLY admin
-- First, remove admin rights from everyone
UPDATE user_profiles SET is_admin = false;

-- Then, give admin rights ONLY to the specific email
UPDATE user_profiles
SET is_admin = true
WHERE id IN (
  SELECT id FROM auth.users WHERE email = 'allaitoolist@gmail.com'
);

-- 4. Verify: Should show only one row
SELECT email, is_admin 
FROM auth.users u
JOIN user_profiles p ON u.id = p.id
WHERE p.is_admin = true;
