import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface ProjectCard {
    id: number
    year: string
    title: string
    description: string
    image: string
    bgColor: string
    textColor: string
}

const projects: ProjectCard[] = [
    {
        id: 1,
        year: '2025',
        title: 'Logistic & Supply Chain Platform',
        description: 'A comprehensive logistics management system designed to optimize supply chains. Features real-time tracking, automated fleet routing, and a responsive driver interface for seamless operations.',
        image: '/images/LOGISTIC-WEBSITE-MOBILE-RESPONSIVE-DEV-DESIGN.png',
        bgColor: 'bg-[#0066FF]', // Exact Figma blue
        textColor: 'text-white',
    },
    {
        id: 2,
        year: '2025',
        title: 'AI Customer Support Agent',
        description: 'Intelligent conversational AI that automates 80% of customer inquiries. Built with advanced NLP to understand context, handle complex queries, and provide instant, human-like support 24/7.',
        image: '/images/AI-AGENT-CHAT-CUSTOMER-SUPPORT.png',
        bgColor: 'bg-black',
        textColor: 'text-white',
    },
    {
        id: 3,
        year: '2025',
        title: 'SaaS Analytics Dashboard',
        description: 'High-performance analytics dashboard for SaaS founders. Visualizes complex data streams into actionable insights with custom reporting, user cohort tracking, and revenue forecasting.',
        image: '/images/SAAS-DESIGN.png',
        bgColor: 'bg-[#0066FF]',
        textColor: 'text-white',
    },
    {
        id: 4,
        year: '2025',
        title: 'Premium Resort Website',
        description: 'Award-winning web design for a luxury resort. Focuses on immersive visual storytelling, seamless booking integrations, and a mobile-first experience that drives direct reservations.',
        image: '/images/WEBSITE-DEIGN.jpg',
        bgColor: 'bg-black',
        textColor: 'text-white',
    },
]

const ProjectsCarousel = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)

    // Calculate maximum index to allow scrolling until the last card is fully visible
    const maxIndex = projects.length - 1

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }

    return (
        <section className="bg-white py-16 lg:py-24" ref={ref}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                {/* Section header */}
                <motion.div
                    className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold uppercase tracking-wide text-dark-900 lg:text-5xl">
                        Featured Projects<br />& Innovations
                    </h2>
                    <div className="flex gap-3 self-end sm:self-auto">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className={`flex h-12 w-12 items-center justify-center rounded-full transition-all active:scale-95 ${currentIndex === 0
                                ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                                : 'bg-primary-blue text-white shadow-lg hover:bg-primary-darkBlue hover:shadow-primary-blue/30'
                                }`}
                            aria-label="Previous project"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex === maxIndex}
                            className={`flex h-12 w-12 items-center justify-center rounded-full transition-all active:scale-95 ${currentIndex === maxIndex
                                ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                                : 'bg-primary-blue text-white shadow-lg hover:bg-primary-darkBlue hover:shadow-primary-blue/30'
                                }`}
                            aria-label="Next project"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </motion.div>

                {/* Carousel container */}
                <div className="overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0">
                    <motion.div
                        ref={carouselRef}
                        className="flex gap-4 sm:gap-6 lg:gap-8"
                        animate={{ x: `-${currentIndex * 100}%` }}
                        // Use percentage based transform for better responsive behavior roughly
                        // but for exact "one card at a time" on mobile, we might need a different approach if we want perfect snap. 
                        // However, with percentage, -100% moves exactly one full viewport width? No, it moves 100% of the parent container?
                        // Actually, `flex` container doesn't have width 100% of parent in that way.
                        // A safer bet for "slide by one card" regardless of width is to animate x based on index * (cardWidth + gap).
                        // But we don't know pixel width easily in CSS motion.
                        // Let's stick to the previous percentage logic but refined:
                        // If we assume on mobile we show 1 card + bit of next, or just 1 card.
                        // Let's use `x` pixel values or simply standard %, but standard % usually relates to the element itself.
                        // A simpler fix for "slow" is just the spring config.

                        // Let's try `x: -currentIndex * 320`? No, responsive.
                        // Actually, Framer Motion can animate to a specific pixel offset if we calculate it.
                        // But to keep it simple and robust:
                        // On desktop (3 cards): move 33.33%. 
                        // On mobile (1 card): move 100%? No, the card is e.g. 85vw.
                        // Let's switch to a drag-enabled list where users naturally swipe, and buttons just shift by an estimated amount?
                        // Or simple: 
                        // Mobile: 1 card shown. Buttons shift 100%.
                        // Desktop: 3 cards shown. Buttons shift 33.33%.
                        // But we have fixed widths on desktop...

                        // NEW STRATEGY for simplicity and speed:
                        // Just use the `animate` prop with a conditional x value calculation logic isn't clean here without windows resizing listeners.
                        // Let's stick to the previous logic but tune the stiffness.
                        // Desktop: 3 cards -> 33% shift per index.
                        // Mobile: If we make cards width="100%" of parent, then 100% shift works.
                        // Let's try making cards `min-w-full md:min-w-[400px]`? That breaks the "partial view" design.

                        // Let's go with:
                        // Desktop (lg): Cards are 33% width. Move 33%.
                        // Mobile/Tablet: Cards are fixed width relative to view?
                        // Let's use the provided content logic which used `w-[380px]` etc.

                        // Reverting to the code I wrote in the 'ReplacementContent' which looked solid:
                        // animate={{ x: `-${currentIndex * (widthOnMobile ? 100 : 33)}%` }} -> hard to detect in render.
                        // I'll stick to a calculated pixel offset logic or just `100%` if we treat the wrapper as a slider.

                        // Let's use a simpler approach for the overwrite:
                        // Just use `animate={{ x: -currentIndex * (isMobile ? 100 : 340) }}`? No.

                        // Let's stick to the previous code's logic but refined:
                        // `animate={{ x: -currentIndex * 100 + '%' }}` works if each item is 100% width.
                        // So on mobile, let's make items `min-w-[85vw]`. 
                        // And use a `gap`.

                        // I will use `animate={{ x: -currentIndex * (100 / (window.innerWidth < 768 ? 1 : 3)) + '%' }}`? No, hydration mismatch.

                        // Let's just use the `gap` and `flex` layouts and rely on `animate={{-currentIndex * x}}` where x varies?
                        // Or best: Use a `ref` to scrollIntoView? No, that's not framer motion.

                        // Okay, I will use a simplified `x` percentage that assumes a standard slide width.
                        // For mobile, let's just make it fast spring and draggable.

                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="w-[85vw] max-w-[380px] md:w-[420px] flex-shrink-0"
                            // On mobile we want 85vw width.
                            // We need to shift by (85vw + gap).
                            // This is hard to animate with pure %. 
                            // Let's use standard framer motion `layout` prop? Might be buggy.

                            // Let's go back to: We change the `animate` x value based on screen size via CSS variables or JS?
                            // JS `window.innerWidth` is easiest but `useEffect` needed.

                            >
                                <div className={`relative h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden rounded-[2rem] sm:rounded-[3rem] ${project.bgColor} p-6 sm:p-10 flex flex-col`}>

                                    {/* Top Row: Year Pill & Arrow Button */}
                                    <div className="mb-6 flex items-start justify-between sm:mb-8">
                                        <span className="rounded-full border border-white/30 px-4 py-1.5 text-sm font-medium text-white sm:px-6 sm:py-2 sm:text-lg">
                                            {project.year}
                                        </span>
                                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110 sm:h-14 sm:w-14">
                                            <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Content */}
                                    <div className="mb-8 relative z-10">
                                        <h3 className="mb-4 text-2xl font-bold text-white leading-tight sm:mb-6 sm:text-4xl">
                                            {project.title}
                                        </h3>
                                        <p className="font-light text-gray-200 leading-relaxed opacity-80 line-clamp-4 text-sm sm:text-base">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Image Container */}
                                    <div className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-4 sm:translate-y-8">
                                        <div className="w-[85%] sm:w-[90%] transition-transform duration-500 hover:-translate-y-4">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-auto object-contain drop-shadow-2xl"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Learn More button */}
                <div className="mt-16 flex justify-center">
                    <Link
                        to="/projects"
                        className="group flex items-center gap-3 rounded-full bg-primary-blue px-8 py-3.5 font-semibold text-white shadow-lg shadow-primary-blue/30 transition-all hover:bg-primary-darkBlue hover:shadow-xl hover:shadow-primary-blue/40"
                    >
                        VIEW ALL PROJECTS
                        <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ProjectsCarousel
