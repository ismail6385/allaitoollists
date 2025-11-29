export interface Tool {
    id: string;
    name: string;
    shortDescription: string;
    fullDescription: string;
    url: string;
    icon?: string;
    category: string;
    tags: string[];
    pricing: string;
    views?: number;
    trending?: boolean;
    featured?: boolean;
    verified?: boolean;
    rating?: number;
    reviewCount?: number;
    platform?: string[];
    dateAdded?: string;
    lastUpdated?: string;
}

export const categories = [
    "All",
    "Text",
    "Image",
    "Video",
    "Audio",
    "Code",
    "Writing",
    "Productivity",
    "Marketing",
    "Design",
    "Other"
];

export const pricingModels = [
    "All",
    "Free",
    "Freemium",
    "Paid",
    "Contact for Pricing"
];

export const platforms = [
    "Web",
    "Mobile",
    "API",
    "Desktop",
    "Browser Extension"
];
