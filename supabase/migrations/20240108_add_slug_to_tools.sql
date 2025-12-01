-- Add slug column to tools table
alter table tools add column slug text;

-- Create unique index on slug
create unique index tools_slug_idx on tools(slug);

-- Update existing tools to have a slug based on name (simple fallback)
-- Note: In a real production scenario, we might need more complex logic to ensure uniqueness if names are duplicates.
-- For now, we'll just use a simple lower-case replace.
update tools set slug = lower(regexp_replace(name, '[^a-zA-Z0-9]+', '-', 'g'));
