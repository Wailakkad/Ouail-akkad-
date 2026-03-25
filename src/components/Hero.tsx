import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-dark-900">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1774451840/Reels/hero-profile.png"
                    alt="Full Stack Developer"
                    className="h-full w-full object-cover object-center"
                />
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-center px-6 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.h1
                            className="mb-6 text-6xl font-bold leading-tight lg:text-8xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            FULL-STACK
                            <br />
                            <span className="relative inline-block">
                                DEVELOPER
                                {/* Purple glow effect under "DEVELOPER" */}
                                <motion.div
                                    className="absolute -bottom-4 left-0 right-0 h-8 bg-purple-600/60 blur-3xl"
                                    animate={{
                                        opacity: [0.4, 0.7, 0.4],
                                        scale: [0.9, 1.1, 0.9],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            className="mb-8 text-xl text-gray-300 lg:text-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            I build high-performance websites and AI-powered solutions that help businesses scale faster and work smarter.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Animated gradient orbs for depth */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500 opacity-10 blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute left-20 bottom-20 h-96 w-96 rounded-full bg-purple-600 opacity-10 blur-[120px]"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </section>
    )
}

export default Hero
