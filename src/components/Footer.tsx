import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className="relative mt-40 bg-black pt-32 pb-12 text-white">
            {/* Floating Profile Image Container */}
            <div className="absolute -top-32 left-1/2 w-[90%] max-w-4xl -translate-x-1/2 transform lg:-top-48">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto h-64 overflow-hidden rounded-[2.5rem] bg-dark-800 shadow-2xl lg:h-96"
                >
                    <img
                        src="/images/hero-profile.jpg"
                        alt="Ouail Akkad"
                        className="h-full w-full object-cover object-top"
                    />
                    {/* Gradient Overlay for seamless blending if needed */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                </motion.div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="mb-20 grid gap-12 pt-24 lg:grid-cols-2 lg:items-end lg:pt-32">
                    {/* Left: Brand & Socials */}
                    <div>
                        <h2 className="mb-8 text-5xl font-serif italic tracking-tighter">
                            Ouail<br />
                            <span className="font-sans not-italic font-bold">Akkad</span>
                        </h2>

                        <div className="flex gap-4">
                            {[
                                { icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z", href: "https://www.linkedin.com/in/akkad-ouail-91456a301/" }, // LinkedIn
                                { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", href: "https://www.instagram.com/ai.automation.builder/" } // Instagram
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Newsletter */}
                    <div className="lg:max-w-md lg:justify-self-end">
                        <p className="mb-6 text-lg font-medium text-gray-300">
                            Subscribe to my specialized newsletter regarding AI & Tech
                        </p>
                        <form className="relative flex items-center">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full rounded-full bg-white/5 py-4 pl-6 pr-14 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-white/30"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#8B5CF6] text-white transition-transform hover:scale-105"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex flex-wrap justify-between gap-6 border-t border-white/10 pt-12 text-sm font-medium uppercase tracking-wider text-gray-500">
                    {['About', 'Projects', 'Services', 'Mentorship', 'Contact'].map((item) => (
                        <a key={item} href="#" className="transition-colors hover:text-white">
                            {item}
                        </a>
                    ))}
                    <span className="hidden lg:block">© 2026 Ouail Akkad</span>
                </div>
                <div className="mt-6 text-center text-xs text-gray-600 lg:hidden">
                    © 2026 Ouail Akkad
                </div>
            </div>
        </footer>
    )
}

export default Footer
