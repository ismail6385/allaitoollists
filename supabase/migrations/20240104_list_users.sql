-- List all users in the auth system
SELECT id, email, created_at, last_sign_in_at 
FROM auth.users;

-- List all profiles
SELECT * FROM user_profiles;
