-- Replace 'YOUR_EMAIL_HERE' with your actual email address
UPDATE user_profiles
SET is_admin = true
WHERE id IN (
  SELECT id FROM auth.users WHERE email = 'YOUR_EMAIL_HERE'
);

-- Verify the update
SELECT * FROM user_profiles WHERE is_admin = true;
