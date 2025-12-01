-- Promote the specific user found in the debug screenshot
UPDATE user_profiles
SET is_admin = true
WHERE id = 'e12fc633-e92c-4595-921a-a14a40712e3a';

-- Verify
SELECT * FROM user_profiles WHERE id = 'e12fc633-e92c-4595-921a-a14a40712e3a';
