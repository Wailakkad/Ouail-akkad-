import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const categories = [
    'All',
    'AI Services',
    'Website Development',
    'Web Design',
    'Social Media Services',
    'Branding'
] as const

type Category = typeof categories[number]

const ProjectsPage = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All')

    const filteredProjects = useMemo(() => {
        if (activeCategory === 'All') return projects
        return projects.filter(p => p.category === activeCategory)
    }, [activeCategory])

    return (
        <div className="bg-[#0a0a0a] pt-32 pb-24 min-h-screen text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Hero section with high-impact typography */}
                <motion.div
                    className="mb-20 text-center md:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                >
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                        <span className="h-2 w-2 rounded-full bg-primary-blue animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Portfolio 2026</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-none mb-8">
                        Our <span className="text-white/20">Selected</span> <br /> Works
                    </h1>
                    <p className="max-w-2xl text-lg md:text-xl text-white/50 leading-relaxed font-light">
                        Engineering digital excellence through cutting-edge AI and bespoke web development.
                        Explore our laboratory of innovations.
                    </p>
                </motion.div>

                {/* Refined Filter System */}
                <div className="mb-16 flex flex-wrap justify-center md:justify-start gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`relative px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 overflow-hidden group ${activeCategory === category
                                ? 'text-white'
                                : 'text-white/40 hover:text-white border border-white/10 hover:border-white/30'
                                }`}
                        >
                            {activeCategory === category && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary-blue z-0"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{category}</span>
                        </button>
                    ))}
                </div>

                {/* Cinematic Project Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[400px] grid-flow-row-dense"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, index) => {
                            // Bento Grid Logic for 3 columns:
                            // Pattern A: [Large (2x2)] [Small] [Small] -> Indices 0, 1, 2
                            // Pattern B: [Small] [Large (2x2)] [Small] -> Indices 3, 4, 5
                            // This repeats every 6 items to create a balanced zig-zag without gaps.
                            const isLarge = activeCategory === 'All' && (index % 6 === 0 || index % 6 === 4)

                            return (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    isLarge={isLarge}
                                />
                            )
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-32 text-center"
                    >
                        <p className="text-white/30 text-xl font-light italic">Currently documenting new innovations in this field...</p>
                    </motion.div>
                )}

                {/* CTA Section - Dark Mode Premium */}
                <motion.div
                    className="mt-32 p-12 md:p-24 bg-gradient-to-br from-[#111] to-[#050505] border border-white/5 rounded-[4rem] text-center overflow-hidden relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-blue/10 via-transparent to-transparent pointer-events-none" />

                    <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tight relative z-10">Transforming visions <br /> into digital reality</h2>
                    <p className="text-white/40 mb-12 max-w-xl mx-auto text-lg font-light relative z-10">
                        Ready to elevate your business with elite tech?
                        Our calendar is open for high-impact partnerships.
                    </p>
                    <motion.a
                        href="https://wa.me/212717837586"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative z-10 bg-white text-dark-900 px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-2xl hover:bg-primary-blue hover:text-white transition-all shadow-primary-blue/10 inline-block"
                    >
                        BOOK A DISCOVERY CALL
                    </motion.a>
                </motion.div>
            </div>
        </div>
    )
}

export default ProjectsPage
