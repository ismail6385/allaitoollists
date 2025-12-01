-- Force create profile and make admin (UPSERT)
-- This will work even if the profile was missing
INSERT INTO user_profiles (id, username, full_name, is_admin)
VALUES (
  'e12fc633-e92c-4595-921a-a14a40712e3a', -- User ID from screenshot
  'muhammadismailkpt',
  'Muhammad Ismail',
  true
)
ON CONFLICT (id) DO UPDATE
SET is_admin = true;

-- Verify the result
SELECT id, email, is_admin 
FROM auth.users u
JOIN user_profiles p ON u.id = p.id
WHERE u.id = 'e12fc633-e92c-4595-921a-a14a40712e3a';
