import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const { scrollY } = useScroll()

    useEffect(() => {
        const unsubscribe = scrollY.on('change', (latest) => {
            setIsScrolled(latest > 50)
        })
        return () => unsubscribe()
    }, [scrollY])

    return (
        <motion.header
            className={`fixed left-0 right-0 top-0 z-50 px-6 py-6 transition-all duration-300 lg:px-12 ${isScrolled ? 'bg-dark-900/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'
                }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo/Name */}
                <Link to="/">
                    <motion.div
                        className="text-xl font-bold leading-tight text-white"
                        whileHover={{ scale: 1.05 }}
                    >
                        Ouail
                        <br />
                        Akkad
                    </motion.div>
                </Link>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-white/70 hover:text-white transition-colors font-medium">Home</Link>
                    <Link to="/projects" className="text-white/70 hover:text-white transition-colors font-medium">Projects</Link>
                    <a href="#services" className="text-white/70 hover:text-white transition-colors font-medium">Services</a>
                </nav>

                {/* Right side - Social icons + CTA */}
                <div className="flex items-center gap-4">
                    {/* LinkedIn Icon */}
                    <motion.a
                        href="https://www.linkedin.com/in/akkad-ouail-91456a301/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </motion.a>

                    {/* Instagram Icon */}
                    <motion.a
                        href="https://www.instagram.com/ai.automation.builder/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </motion.a>

                    {/* Contact Me Button */}
                    <motion.a
                        href="https://wa.me/212717837586"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-8 py-3 font-semibold text-dark-900 transition-all hover:shadow-lg hover:shadow-white/20 inline-block"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        CONTACT ME
                    </motion.a>
                </div>
            </div>
        </motion.header>
    )
}

export default Header
