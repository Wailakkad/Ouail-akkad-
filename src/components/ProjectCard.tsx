import { motion } from 'framer-motion'
import { useState } from 'react'
import type { Project } from '../data/projects'
import ProjectModal from './ProjectModal'

interface ProjectCardProps {
    project: Project
    isLarge?: boolean
}

const ProjectCard = ({ project, isLarge = false }: ProjectCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className={`group relative overflow-hidden rounded-[2.5rem] bg-dark-900 w-full h-full cursor-pointer ${isLarge ? 'md:col-span-2 md:row-span-2' : ''
                    }`}
                whileHover={{ scale: 1.01 }}
                onClick={() => setIsModalOpen(true)}
            >
                {/* Background Image Container with Zoom */}
                <div className="absolute inset-0 z-0">
                    {project.video ? (
                        <video
                            src={project.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <motion.div
                            className="h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url("${project.image}")` }}
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        />
                    )}
                    {/* Gradient Overlay for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
                    <div className="flex flex-col gap-4">
                        {/* Tags & Meta */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="rounded-full bg-white/10 backdrop-blur-md px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
                                    {project.category}
                                </span>
                                <span className="text-white/40 text-xs font-medium">{project.year}</span>
                            </div>

                            {/* Arrow Indicator */}
                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-dark-900 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out shadow-xl">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="mb-2">
                            <h3 className={`font-bold leading-tight text-white tracking-tight ${isLarge ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                                {project.title}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Subtle Noise Texture for premium feel */}
                <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </motion.div>

            <ProjectModal
                project={project}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default ProjectCard
