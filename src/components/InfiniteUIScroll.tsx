import { motion } from 'framer-motion'
import { useState } from 'react'

const uiImages = [
    '/images/Frame 4.jpg',
    '/images/Frame 5.jpg',
    '/images/Frame 6.jpg',
    '/images/Frame 7.jpg',
    '/images/frame.jpg',
    '/images/WEBSITE-DEIGN.jpg',
    '/images/SAAS-DESIGN.png',
    '/images/AI-AGENT-CHAT-CUSTOMER-SUPPORT.png',
    '/images/LOGISTIC-WEBSITE-MOBILE-RESPONSIVE-DEV-DESIGN.png'
]

const InfiniteUIScroll = () => {
    const [isPaused, setIsPaused] = useState(false)

    // Duplicate the images array for a seamless loop
    const displayImages = [...uiImages, ...uiImages, ...uiImages]

    return (
        <section className="bg-white py-12 lg:py-20 overflow-hidden">
            <div className="relative flex whitespace-nowrap">
                <motion.div
                    className="flex gap-6 sm:gap-10 lg:gap-16 items-center"
                    animate={{ x: isPaused ? undefined : ["0%", "-33.33%"] }}
                    transition={{
                        duration: 35, // Adjust speed here
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                    onHoverStart={() => setIsPaused(true)}
                    onHoverEnd={() => setIsPaused(false)}
                >
                    {displayImages.map((src, index) => (
                        <motion.div
                            key={index}
                            className="w-[280px] sm:w-[350px] lg:w-[450px] flex-shrink-0 cursor-pointer"
                            whileHover={{
                                scale: 1.1,
                                zIndex: 50,
                                transition: { duration: 0.4, ease: "circOut" }
                            }}
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] sm:rounded-[3rem] shadow-xl border border-gray-100 bg-gray-50">
                                <img
                                    src={src}
                                    alt={`UI Showcase ${index + 1}`}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                                {/* Bottom Shadow/Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Context/Caption Section */}
            <div className="mt-12 text-center px-4">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mb-2">UI/UX Innovations</p>
                <h4 className="text-dark-900 text-xl font-medium tracking-tight">CRAFTING SEAMLESS DIGITAL INTERFACES</h4>
            </div>
        </section>
    )
}

export default InfiniteUIScroll
