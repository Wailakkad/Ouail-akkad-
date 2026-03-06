export interface GalleryItem {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    category: 'AI Services' | 'Website Development' | 'Web Design' | 'Social Media Services' | 'Branding';
    year: string;
    image: string;
    video?: string;
    bgColor: string;
    textColor: string;
    tags: string[];
    gallery?: GalleryItem[];
}

export const projects: Project[] = [
    {
        id: 9,
        title: 'Social Media Branding Evolution',
        year: '2025',
        category: 'Social Media Services',
        description: 'A premium visual identity overhaul for a high-end social media presence. This project combines cinematic motion pieces with sophisticated product curation to establish a dominant brand authority in the digital space.',
        image: '/images/productbrandingimages (1).jpg',
        video: '/images/productbrandingimages (1).mp4',
        bgColor: 'bg-[#121212]',
        textColor: 'text-white',
        tags: ['Motion Design', 'Branding', 'Social Strategy'],
        gallery: [
            { type: 'video', url: '/images/productbrandingimages (1).mp4' },
            { type: 'image', url: '/images/productbrandingimages (1).jpeg' },
            { type: 'image', url: '/images/productbrandingimages (1).jpg' },
            { type: 'image', url: '/images/productbrandingimages (2).jpg' },
            { type: 'image', url: '/images/productbrandingimages (3).jpg' },
            { type: 'image', url: '/images/productbrandingimages (4).jpg' },
        ]
    },
    {
        id: 1,
        title: 'Logistic & Supply Chain Platform',
        year: '2025',
        category: 'Website Development',
        description: 'A comprehensive logistics management system designed to optimize supply chains. Features real-time tracking, automated fleet routing, and a responsive driver interface for seamless operations.',
        image: '/images/LOGISTIC-WEBSITE-MOBILE-RESPONSIVE-DEV-DESIGN.png',
        bgColor: 'bg-[#0066FF]',
        textColor: 'text-white',
        tags: ['React', 'Node.js', 'Logistics'],
    },
    {
        id: 2,
        title: 'AI Customer Support Agent',
        year: '2025',
        category: 'AI Services',
        description: 'Intelligent conversational AI that automates 80% of customer inquiries. Built with advanced NLP to understand context, handle complex queries, and provide instant, human-like support 24/7.',
        image: '/images/AI-AGENT-CHAT-CUSTOMER-SUPPORT.png',
        bgColor: 'bg-black',
        textColor: 'text-white',
        tags: ['AI', 'NLP', 'Automation'],
    },
    {
        id: 3,
        title: 'SaaS Analytics Dashboard',
        year: '2025',
        category: 'Web Design',
        description: 'High-performance analytics dashboard for SaaS founders. Visualizes complex data streams into actionable insights with custom reporting, user cohort tracking, and revenue forecasting.',
        image: '/images/SAAS-DESIGN.png',
        bgColor: 'bg-[#0066FF]',
        textColor: 'text-white',
        tags: ['UI/UX', 'Analytics', 'SaaS'],
    },
    {
        id: 4,
        title: 'Premium Resort Website',
        year: '2025',
        category: 'Website Development',
        description: 'Award-winning web design for a luxury resort. Focuses on immersive visual storytelling, seamless booking integrations, and a mobile-first experience that drives direct reservations.',
        image: '/images/WEBSITE-DEIGN.jpg',
        bgColor: 'bg-black',
        textColor: 'text-white',
        tags: ['Web Design', 'Hospitality', 'Booking'],
    },
    {
        id: 5,
        title: 'E-commerce Product Photography',
        year: '2024',
        category: 'Social Media Services',
        description: 'High-end product visuals and marketing creatives for a premium beauty brand. Focused on conversion-driven imagery for Instagram and TikTok campaigns.',
        image: 'https://i.pinimg.com/1200x/29/3b/43/293b436ff4c223c612b45d0c34ce5b2b.jpg',
        bgColor: 'bg-[#FF4D4D]',
        textColor: 'text-white',
        tags: ['Photography', 'Marketing', 'Ecommerce'],
    },

    {
        id: 7,
        title: 'Minimalist Portfolio for Architects',
        year: '2024',
        category: 'Web Design',
        description: 'A sophisticated, minimalist portfolio designed for a high-end architectural firm. Emphasizes visual space and high-resolution imagery.',
        image: 'https://i.pinimg.com/1200x/11/69/6f/11696f8b692f30d6bfb3d00d00616db5.jpg',
        bgColor: 'bg-white',
        textColor: 'text-black',
        tags: ['Architecture', 'Minimalism', 'UI/UX'],
    },
    {
        id: 8,
        title: 'Spa & Wellness Website',
        year: '2025',
        category: 'Website Development',
        description: 'A luxurious and serene digital experience designed for a premium spa. It features an immersive layout, integrated booking flow, and a calming visual identity.',
        image: '/images/spawebsitedev (1).png',
        bgColor: 'bg-[#FDFBF9]',
        textColor: 'text-[#2D2D2D]',
        tags: ['UI/UX', 'Wellness', 'Booking'],
        gallery: [
            { type: 'image', url: '/images/spawebsitedev (1).png' },
            { type: 'image', url: '/images/spawebsitedev (1).jpeg' },
            { type: 'image', url: '/images/spawebsitedev (2).png' },
            { type: 'image', url: '/images/spawebsitedev (2).jpeg' },
        ]
    },

    {
        id: 10,
        title: 'Sweets Branding & Visual Identity',
        year: '2026',
        category: 'Branding',
        description: 'A vibrant and cohesive brand identity designed for a modern sweets and confectionery brand. This project brings together playful aesthetics with premium packaging design.',
        image: '/images/sweetsbrandingimages (1).png',
        bgColor: 'bg-[#FF9B9B]',
        textColor: 'text-white',
        tags: ['Branding', 'Visual Identity', 'Packaging'],
        gallery: [
            { type: 'image', url: '/images/sweetsbrandingimages (1).png' },
            { type: 'image', url: '/images/sweetsbrandingimages (2).png' },
            { type: 'image', url: '/images/sweetsbrandingimages (3).png' },
            { type: 'image', url: '/images/sweetsbrandingimages (4).png' },
            { type: 'image', url: '/images/sweetsbrandingimages (5).png' },
        ]
    },
    {
        id: 11,
        title: 'Premium Cosmetic Brand Journey',
        year: '2026',
        category: 'Social Media Services',
        description: 'High-end social media content creation and strategy for a luxurious cosmetic line. We designed an elegant visual language to elevate the brand\'s digital presence.',
        image: '/images/cosmeticbrand (1).png',
        video: '/images/cosmeticbrand (1).mp4',
        bgColor: 'bg-[#E5D3C8]',
        textColor: 'text-dark-900',
        tags: ['Social Media', 'Content Creation', 'Beauty'],
        gallery: [
            { type: 'video', url: '/images/cosmeticbrand (1).mp4' },
            { type: 'image', url: '/images/cosmeticbrand (1).png' },
            { type: 'image', url: '/images/cosmeticbrand (1).jpeg' },
            { type: 'image', url: '/images/cosmeticbrand (1).jpg' },
            { type: 'image', url: '/images/cosmeticbrand (2).png' },
            { type: 'image', url: '/images/cosmeticbrand (2).jpeg' },
        ]
    },
    {
        id: 12,
        title: 'Intelligent Automated Triage System',
        year: '2026',
        category: 'AI Services',
        description: 'A cutting-edge headless AI backend that revolutionizes customer support by automating email triage with sub-second latency. Utilizing LangChain and OpenAI with strict deterministic prompt engineering, it classifies intent and routes payloads to specialized departments, reducing manual overhead by 85% and response times by 99%.',
        image: '/images/ai-triage-system1.jpg',
        bgColor: 'bg-[#0F172A]',
        textColor: 'text-white',
        tags: ['n8n', 'OpenAI API', 'Prompt Engineering', 'Webhooks', 'REST APIs'],
        gallery: [
            { type: 'image', url: '/images/ai-triage-system1.jpg' },
            { type: 'image', url: '/images/ai-triage-system2.jpg' },
        ]
    }
];
