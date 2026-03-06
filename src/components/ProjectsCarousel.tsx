import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import ProjectModal from './ProjectModal'

const ProjectsCarousel = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const carouselRef = useRef<HTMLDivElement>(null)

    // Filter projects for the carousel (maybe exclude some if needed, but for now show all)
    // Actually the user wants to showcase the projects professionally.
    const featuredProjects = projects.slice(0, 5)

    const maxIndex = featuredProjects.length - 1

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
                        animate={{ x: `-${currentIndex * (window.innerWidth < 768 ? 100 : 33.33)}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {featuredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="w-[85vw] max-w-[380px] md:w-[420px] flex-shrink-0 cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <motion.div
                                    className={`relative h-[550px] sm:h-[650px] lg:h-[750px] overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] ${project.bgColor} p-8 sm:p-12 flex flex-col group/card`}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                >
                                    {/* Top Row: Year Pill & Arrow Button */}
                                    <div className="mb-8 flex items-center justify-between relative z-20">
                                        <span className="rounded-full border border-white/20 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm sm:px-7 sm:py-2 sm:text-sm">
                                            {project.year}
                                        </span>
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-dark-900 shadow-xl transition-transform group-hover/card:scale-110 sm:h-14 sm:w-14">
                                            <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Content: Just the Title */}
                                    <div className="relative z-10 mb-6 sm:mb-12">
                                        <h3 className={`text-2xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl ${project.textColor}`}>
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Image Container: In flow, pushed to bottom */}
                                    <div className="mt-auto flex items-end justify-center pointer-events-none relative z-10 overflow-hidden h-full">
                                        <div className="w-full transition-transform duration-700 ease-out group-hover/card:-translate-y-4">
                                            {project.video ? (
                                                <video
                                                    src={project.video}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    className="mx-auto h-auto max-h-[350px] sm:max-h-[450px] lg:max-h-[550px] object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.3)] rounded-[1.5rem] sm:rounded-[2rem]"
                                                />
                                            ) : (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="mx-auto h-auto max-h-[350px] sm:max-h-[450px] lg:max-h-[550px] object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.3)]"
                                                />
                                            )}
                                        </div>
                                    </div>

                                    {/* Subtle Gradient for Bottom depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                </motion.div>
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

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    )
}

export default ProjectsCarousel
