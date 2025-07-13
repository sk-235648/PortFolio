"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiClock } from 'react-icons/fi'
import { Send, Check, AlertCircle } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const formItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      id='contact'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-950 text-gray-100 pt-20 pb-4 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-4">SEND ME A MESSAGE</h2>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-orange-400"
          >
            Getting in touch is easy!
          </motion.h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h4 className="text-xl font-semibold mb-4 text-orange-400">Contact Information</h4>
              
              <div className="space-y-4">
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <FiMapPin className="h-6 w-6 text-orange-400 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-300">Medininagar, Palamu, Jharkhand</p>
                    <p className="text-gray-300">822126, India</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <FiMail className="h-6 w-6 text-orange-400 mr-3" />
                  <p className="text-gray-300">skgupta1242005@gmail.com</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h4 className="text-xl font-semibold mb-4 text-orange-400">Contact Hours</h4>
              <ul className="space-y-2 text-gray-300">
                <motion.li 
                  variants={itemVariants}
                  className="flex justify-between"
                >
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </motion.li>
                <motion.li 
                  variants={itemVariants}
                  className="flex justify-between"
                >
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </motion.li>
                <motion.li 
                  variants={itemVariants}
                  className="flex justify-between"
                >
                  <span>Sunday</span>
                  <span>Closed</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={formItemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                  required
                />
              </motion.div>

              <motion.div variants={formItemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                  required
                />
              </motion.div>

              <motion.div variants={formItemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Write us about any project. We&apos;d love to work with you!
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                  required
                ></textarea>
              </motion.div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-900/30 border border-green-500/50 rounded-lg flex items-center gap-2 text-green-400"
                >
                  <Check size={20} />
                  <p>Your message has been sent successfully!</p>
                </motion.div>
              )}
              
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-900/30 border border-red-500/50 rounded-lg flex items-center gap-2 text-red-400"
                >
                  <AlertCircle size={20} />
                  <p>Failed to send message. Please try again later.</p>
                </motion.div>
              )}

              <motion.div
                variants={formItemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Sending... <span className="animate-spin">⟳</span></>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ContactPage