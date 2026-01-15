import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const VideoSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="bg-[#FAFAFA] py-24" ref={ref}>
            <div className="mx-auto max-w-7xl px-6 lg:px-12">

                {/* Header Section */}
                <div className="mb-20 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
                    {/* Left: Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-400">
                            <span>&laquo;</span>
                            <span>Watch Video</span>
                            <span>&raquo;</span>
                        </div>
                        <h2 className="text-5xl font-bold leading-tight text-dark-900 lg:text-7xl">
                            Watch My<br />Newest Videos.
                        </h2>
                    </motion.div>

                    {/* Right: Description & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-lg"
                    >
                        <p className="mb-8 text-lg leading-relaxed text-gray-500">
                            I transformed my passion into a successful online <span className="font-bold text-dark-900">business</span>—one that allows me to create impact, financial freedom, and a lifestyle I love. Today,
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 rounded-full bg-[#8B5CF6] px-8 py-3.5 font-medium text-white shadow-lg shadow-purple-500/30 transition-all hover:bg-[#7C3AED] hover:shadow-purple-500/40"
                        >
                            Watch More
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </motion.div>
                </div>

                {/* Video Gallery */}
                <div className="grid grid-cols-12 items-center gap-6">
                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="col-span-12 hidden h-64 overflow-hidden rounded-[2rem] shadow-xl lg:col-span-3 lg:block lg:h-80"
                    >
                        <img
                            src="/images/bottom-main-image (2).png"
                            alt="Developer Setup"
                            className="h-full w-full object-cover"
                        />
                    </motion.div>

                    {/* Center Main Video */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="col-span-12 h-96 overflow-hidden rounded-[2.5rem] shadow-2xl lg:col-span-6 lg:h-[500px]"
                    >
                        <div className="relative h-full w-full group cursor-pointer">
                            <img
                                src="/images/sociel-media-tuto.png"
                                alt="Main Video Thumbnail"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/10">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-dark-900 shadow-xl">
                                        <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="col-span-12 hidden h-64 overflow-hidden rounded-[2rem] shadow-xl lg:col-span-3 lg:block lg:h-80"
                    >
                        <img
                            src="/images/right-image.png"
                            alt="Working at desk"
                            className="h-full w-full object-cover"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default VideoSection
