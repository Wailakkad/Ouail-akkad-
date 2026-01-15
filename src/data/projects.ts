export interface Project {
    id: number;
    title: string;
    description: string;
    category: 'AI Services' | 'Website Development' | 'Web Design' | 'Social Media Services';
    year: string;
    image: string;
    bgColor: string;
    textColor: string;
    tags: string[];
}

export const projects: Project[] = [
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
        id: 6,
        title: 'Custom AI Automation for Real Estate',
        year: '2024',
        category: 'AI Services',
        description: 'End-to-end automation for lead generation and nurturing. Uses AI agents to qualify leads and schedule viewings automatically.',
        image: 'https://i.pinimg.com/736x/53/52/e4/5352e48223e661f6932cf08d61de5327.jpg',
        bgColor: 'bg-[#1A1A1A]',
        textColor: 'text-white',
        tags: ['AI Agents', 'Automation', 'CRM'],
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
        title: 'Tech Conference Landing Page',
        year: '2025',
        category: 'Website Development',
        description: 'High-traffic landing page for an international tech summit. Features real-time schedule updates and complex ticket booking flow.',
        image: 'https://i.pinimg.com/1200x/1c/a1/3e/1ca13e8d51cb0f1e3e3bd11fbdc9d842.jpg',
        bgColor: 'bg-[#6B46C1]',
        textColor: 'text-white',
        tags: ['Event Tech', 'Next.js', 'Scaling'],
    },
];
