-- Add SEO fields to blogs table
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS meta_title text;
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS meta_description text;
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS meta_keywords text;
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS category text;
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS views integer DEFAULT 0;

-- Add comment
COMMENT ON COLUMN blogs.meta_title IS 'SEO title for search engines';
COMMENT ON COLUMN blogs.meta_description IS 'SEO meta description';
COMMENT ON COLUMN blogs.meta_keywords IS 'SEO keywords comma-separated';
