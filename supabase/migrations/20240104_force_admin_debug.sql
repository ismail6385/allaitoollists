-- 1. Check if the user exists in auth.users
DO $$
DECLARE
  target_email TEXT := 'allaitoolist@gmail.com';
  user_id UUID;
BEGIN
  -- Find the user ID
  SELECT id INTO user_id FROM auth.users WHERE email = target_email;

  -- If user not found, raise notice
  IF user_id IS NULL THEN
    RAISE EXCEPTION 'User with email % not found. Please Sign Up first!', target_email;
  END IF;

  -- 2. Ensure user_profiles row exists
  INSERT INTO user_profiles (id, username, full_name)
  VALUES (user_id, 'Admin', 'Admin User')
  ON CONFLICT (id) DO NOTHING;

  -- 3. Update is_admin
  UPDATE user_profiles
  SET is_admin = true
  WHERE id = user_id;

  RAISE NOTICE 'Success! User % is now an Admin.', target_email;
END $$;

-- 4. Verify and show the user
SELECT u.email, p.is_admin, p.username
FROM auth.users u
JOIN user_profiles p ON u.id = p.id
WHERE u.email = 'allaitoolist@gmail.com';
