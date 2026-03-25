import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ContentSection = () => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const isInView1 = useInView(ref1, { once: true, margin: "-100px" })
    const isInView2 = useInView(ref2, { once: true, margin: "-100px" })

    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            {/* First content block */}
            <motion.div
                ref={ref1}
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center">
                    {/* Left - Large portrait image */}
                    <motion.div
                        className="relative order-1 lg:order-none"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView1 ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="overflow-hidden rounded-3xl shadow-2xl">
                            <img
                                src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1774451837/Reels/top-left.png"
                                alt="Professional workspace"
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right - Text content with small image */}
                    <motion.div
                        className="relative order-2 lg:order-none"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView1 ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Small image - Hidden on mobile, visible on lg */}
                        <div className="hidden lg:absolute lg:-top-8 lg:right-0 lg:block lg:w-40 lg:overflow-hidden lg:rounded-3xl lg:shadow-lg">
                            <img
                                src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1774451833/Reels/bottom-main-image_1.png"
                                alt="Profile"
                                className="h-auto w-full object-cover"
                            />
                        </div>

                        <div className="pt-4 lg:pt-0">
                            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-500">
                                AI AUTOMATION & INTELLIGENT AGENCIES
                            </p>
                            <h2 className="mb-6 text-3xl font-bold text-dark-900 lg:text-5xl">
                                Automate, Scale, and Outperform
                            </h2>

                            <p className="mb-4 text-base leading-relaxed text-gray-600">
                                I build custom AI agents that work 24/7 to handle your customer support, streamline business operations, and automate repetitive workflows.
                            </p>

                            <p className="mb-4 text-base leading-relaxed text-gray-600">
                                Stop trading time for tasks. From intelligent chatbots that resolve queries instantly to backend automation that processes data without human error, my solutions are designed to save you hours every day.
                            </p>

                            <p className="mb-8 text-base leading-relaxed text-gray-600">
                                Whether you're a startup looking to stay lean or an SME aiming to scale efficiently, I implement AI systems that integrate seamlessly with your existing tools—delivering measurable ROI from day one.
                            </p>

                            <motion.button
                                className="group flex w-full items-center justify-center gap-3 rounded-full bg-primary-blue px-8 py-4 font-semibold text-white shadow-lg shadow-primary-blue/30 transition-all hover:bg-primary-darkBlue hover:shadow-xl hover:shadow-primary-blue/40 sm:w-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                EXPLORE AI SOLUTIONS
                                <svg
                                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Second content block - reversed layout */}
            <motion.div
                ref={ref2}
                className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:mt-32 lg:px-12"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-start">
                    {/* Left - Text content */}
                    <motion.div
                        className="order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView2 ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-500">
                            WEB DEVELOPMENT & DESIGN
                        </p>
                        <h2 className="mb-6 text-3xl font-bold text-dark-900 lg:text-5xl">
                            High-Performance Digital Experiences
                        </h2>

                        <p className="mb-4 text-base leading-relaxed text-gray-600">
                            I design and develop modern websites that are as functional as they are beautiful. My approach combines pixel-perfect UI/UX design with clean, scalable code.
                        </p>

                        <p className="mb-4 text-base leading-relaxed text-gray-600">
                            Beyond just code, I offer comprehensive creative services including social media visuals and UGC marketing assets. I ensure your digital presence is consistent, professional, and built to convert.
                        </p>

                        <p className="mb-8 text-base leading-relaxed text-gray-600">
                            Position yourself as a market leader with a platform that loads fast, looks premium, and drives business results. Let's build a foundation for your long-term success.
                        </p>

                        <motion.button
                            className="group flex w-full items-center justify-center gap-3 rounded-full bg-primary-blue px-8 py-4 font-semibold text-white shadow-lg shadow-primary-blue/30 transition-all hover:bg-primary-darkBlue hover:shadow-xl hover:shadow-primary-blue/40 sm:w-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            START YOUR PROJECT
                            <svg
                                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </motion.button>
                    </motion.div>

                    {/* Right - Images grid */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView2 ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="space-y-4">
                            {/* Large main image */}
                            <div className="overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="/images/main-image.png"
                                    alt="Workspace environment"
                                    className="h-auto w-full object-cover"
                                />
                            </div>

                            {/* Three smaller images in a row */}
                            <div className="grid grid-cols-3 gap-3 sm:gap-4">
                                <div className="overflow-hidden rounded-2xl shadow-lg sm:rounded-3xl">
                                    <img
                                        src="/images/bottom-main-image (1).png"
                                        alt="Working on laptop"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="overflow-hidden rounded-2xl shadow-lg sm:rounded-3xl">
                                    <img
                                        src="/images/bottom-main-image (2).png"
                                        alt="Developer portrait"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="overflow-hidden rounded-2xl shadow-lg sm:rounded-3xl">
                                    <img
                                        src="/images/bottom-main-image (3).png"
                                        alt="Presenting ideas"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContentSection
