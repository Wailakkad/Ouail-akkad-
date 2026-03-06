import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../data/projects'
import { useEffect } from 'react'

interface ProjectModalProps {
    project: Project | null
    isOpen: boolean
    onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!project) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                            duration: 0.5
                        }}
                        className="fixed inset-4 z-[101] overflow-hidden rounded-[2.5rem] bg-dark-900 shadow-2xl md:inset-10 lg:inset-20"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-6 top-6 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-dark-900"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
                            <div className="mx-auto max-w-4xl px-6 py-12 md:px-12 md:py-16">
                                {/* Header Section */}
                                <div className="mb-12 md:mb-20">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="rounded-full bg-primary-blue/20 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-blue border border-primary-blue/30">
                                            {project.category}
                                        </span>
                                        <span className="text-white/40 text-xs font-medium">{project.year}</span>
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                                        {project.title}
                                    </h2>
                                    <p className="max-w-3xl text-lg md:text-xl text-white/60 font-light leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Media Gallery */}
                                <div className="grid grid-cols-1 gap-8 md:gap-12">
                                    {project.gallery ? (
                                        project.gallery.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                                viewport={{ once: true }}
                                                className="relative overflow-hidden rounded-[2rem] bg-white/5 group"
                                            >
                                                {item.type === 'video' ? (
                                                    <video
                                                        src={item.url}
                                                        controls
                                                        autoPlay
                                                        muted
                                                        loop
                                                        className="mx-auto block max-w-full h-auto max-h-[70vh]"
                                                    />
                                                ) : (
                                                    <img
                                                        src={item.url}
                                                        alt={`${project.title} - Gallerie ${index + 1}`}
                                                        className="mx-auto block max-w-full h-auto max-h-[70vh] transition-transform duration-700 group-hover:scale-105"
                                                        loading="lazy"
                                                    />
                                                )}
                                            </motion.div>
                                        ))
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="relative overflow-hidden rounded-[2rem] bg-white/5"
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-auto"
                                            />
                                        </motion.div>
                                    )}
                                </div>

                                {/* Footer / CTA */}
                                <div className="mt-20 text-center">
                                    <h4 className="text-white/40 text-sm font-bold uppercase tracking-[0.2em] mb-8">End of Case Study</h4>
                                    <button
                                        onClick={onClose}
                                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-10 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-dark-900"
                                    >
                                        CLOSE EXPLORER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default ProjectModal
