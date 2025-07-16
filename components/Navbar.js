"use client"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Navbar = () => {
  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-lg bg-gray-950 transition duration-300">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="logo"
      >
        <Link href="/" onClick={() => handleScrollTo('home')}>
          <span className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition">SG.</span>
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
          <motion.div
            key={item}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => handleScrollTo(item.toLowerCase())}
              className={`${item === 'Home' ? 'text-white' : 'text-gray-400'} hover:text-orange-400 transition font-medium cursor-pointer`}
            >
              {item}
            </button>
          </motion.div>
        ))}
        {/* Resume Download Link */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="/Sujal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-400 transition font-medium cursor-pointer"
          >
            Resume
          </a>
        </motion.div>
      </nav>

      {/* Mobile/Right Side Icons */}
      <div className="flex items-center space-x-4">
        <button
          className="p-2 text-gray-400 hover:text-white"
          onClick={() => handleScrollTo('home')}
        >
          <Image
            src="/images/icons8-laptop.gif"
            alt="laptop"
            width={20}
            height={20}
            className="invert hover:scale-110 transition"
          />
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar