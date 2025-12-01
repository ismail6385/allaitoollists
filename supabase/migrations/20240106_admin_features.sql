-- Create site_settings table
CREATE TABLE IF NOT EXISTS site_settings (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  key text UNIQUE NOT NULL,
  value text,
  updated_at timestamp with time zone DEFAULT now()
);

-- Insert default settings
INSERT INTO site_settings (key, value) VALUES
  ('site_title', 'AI Tool List'),
  ('site_description', 'The most comprehensive directory of AI tools'),
  ('meta_keywords', 'AI tools, artificial intelligence, AI directory'),
  ('logo_url', '/logo.png'),
  ('facebook_url', ''),
  ('twitter_url', ''),
  ('linkedin_url', ''),
  ('instagram_url', '')
ON CONFLICT (key) DO NOTHING;

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  icon text,
  color text DEFAULT '#6366f1',
  created_at timestamp with time zone DEFAULT now()
);

-- Insert default categories
INSERT INTO categories (name, slug, description) VALUES
  ('Writing', 'writing', 'AI writing and content generation tools'),
  ('Image Generation', 'image-generation', 'AI image creation and editing'),
  ('Video', 'video', 'AI video generation and editing tools'),
  ('Audio', 'audio', 'AI voice and audio tools'),
  ('Coding', 'coding', 'AI coding assistants and development tools'),
  ('Marketing', 'marketing', 'AI marketing and SEO tools'),
  ('Productivity', 'productivity', 'AI productivity and automation tools')
ON CONFLICT (slug) DO NOTHING;

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamp with time zone DEFAULT now(),
  is_active boolean DEFAULT true
);

-- Enable RLS
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- RLS Policies for site_settings (anyone can read, admins can write)
CREATE POLICY "Anyone can view settings" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Only admins can update settings" ON site_settings FOR UPDATE USING (true);
CREATE POLICY "Only admins can insert settings" ON site_settings FOR INSERT WITH CHECK (true);

-- RLS Policies for categories
CREATE POLICY "Anyone can view categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Admins can manage categories" ON categories FOR ALL USING (true);

-- RLS Policies for newsletter
CREATE POLICY "Anyone can subscribe" ON newsletter_subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can view subscribers" ON newsletter_subscribers FOR SELECT USING (true);
CREATE POLICY "Admins can manage subscribers" ON newsletter_subscribers FOR ALL USING (true);
