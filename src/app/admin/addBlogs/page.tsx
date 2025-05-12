'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { db, app } from '../../../lib/firebase'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

// Dynamically import Tiptap editor with client-side rendering only
const TiptapEditor = dynamic(() => import('./TiptapEditor'), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
})

// Define FAQ interface
interface FAQ {
  id?: string
  question: string
  answer: string
}

// Define Blog interface
interface Blog {
  id?: string
  title: string
  subtitle: string
  description: string
  date: string
  image: string
  created: number
  metaTitle?: string
  metaDescription?: string
  slug: string
  faqs?: FAQ[]
  author: string
}

const AddBlog = () => {
  const [newBlog, setNewBlog] = useState<Blog>({
    title: '',
    subtitle: '',
    description: '',
    date: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
    image: '',
    created: Date.now(),
    metaTitle: '',
    metaDescription: '',
    slug: '',
    faqs: [],
    author: 'Akanksha Chugh'
  })
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const router = useRouter()

  // Check if user is logged in; if not, redirect to login page
  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(getAuth(app), (user) => {
    //   if (!user) {
    //     router.push('/login')
    //   }
    // })
    // return () => unsubscribe()
  }, [router])

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
      .trim() // Trim spaces from start and end
  }

  // Handle blog form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewBlog(prevState => {
      // If title field is changed, auto-generate slug (only if slug is empty or user hasn't modified it)
      if (name === 'title' && (!prevState.slug || prevState.slug === generateSlug(prevState.title))) {
        return {
          ...prevState,
          [name]: value,
          slug: generateSlug(value)
        }
      }
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  // Handle Tiptap editor content changes
  const handleEditorChange = (content: string) => {
    setNewBlog(prevState => ({
      ...prevState,
      description: content
    }))
  }

  // Add FAQ to the blog
  const addFaq = () => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: [...(prevState.faqs || []), { question: '', answer: '' }]
    }))
  }

  // Remove FAQ from the blog
  const removeFaq = (index: number) => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: (prevState.faqs || []).filter((_, i) => i !== index)
    }))
  }

  // Handle FAQ input changes
  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    setNewBlog(prevState => {
      const updatedFaqs = [...(prevState.faqs || [])]
      updatedFaqs[index] = {
        ...updatedFaqs[index],
        [field]: value
      }
      return {
        ...prevState,
        faqs: updatedFaqs
      }
    })
  }

  // Handle blog form submission
  const handleSubmitBlog = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('')

    try {
      // Validate required fields
      if (!newBlog.title || !newBlog.description || !newBlog.slug) {
        throw new Error('Please fill in all required fields')
      }

      // Add timestamp and format the date
      const blogWithMetadata = {
        ...newBlog,
        created: formMode === 'add' ? Date.now() : newBlog.created,
        date: new Date(newBlog.date).toISOString().split('T')[0] // Ensure date is in YYYY-MM-DD format
      }

      // Remove faqs from the main document
      const { faqs, ...blogData } = blogWithMetadata

      let blogId = newBlog.id

      if (formMode === 'add') {
        // Add to Firestore
        const docRef = await addDoc(collection(db, 'blogs'), blogData)
        blogId = docRef.id
        setStatusMessage('Blog published successfully!')
      } else {
        // Update existing document
        if (blogId) {
          const blogRef = doc(db, 'blogs', blogId)
          await updateDoc(blogRef, blogData)
          setStatusMessage('Blog updated successfully!')
        }
      }

      // Add FAQs to subcollection
      if (blogId && faqs && faqs.length > 0) {
        for (const faq of faqs) {
          if (faq.question && faq.answer) {
            await addDoc(collection(db, 'blogs', blogId, 'faqs'), {
              question: faq.question,
              answer: faq.answer
            })
          }
        }
      }

      // Reset form on add mode, keep data on edit mode
      if (formMode === 'add') {
        resetForm()
      }

      // Redirect or show success
      setTimeout(() => {
        if (formMode === 'add') {
          // Optionally redirect to blogs list
          // router.push('/admin/blogs')
        }
      }, 2000)
    } catch (error) {
      console.error("Error publishing blog:", error)
      setStatusMessage(`Error: ${error instanceof Error ? error.message : 'Something went wrong'}`);
    } finally {
      setIsSubmitting(false)
    }
  }

  // Reset form state
  const resetForm = () => {
    setNewBlog({
      title: '',
      subtitle: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      image: '',
      created: Date.now(),
      metaTitle: '',
      metaDescription: '',
      slug: '',
      faqs: [],
      author: 'Akanksha Chugh'
    })
  }

  // Navigate back to blogs list
  const handleGoBack = () => {
    router.push('/admin/blogs')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#005F33E5] to-[#0A5C35] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 shadow-md border border-white/10 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">
                {formMode === 'add' ? 'Create New Blog' : 'Edit Blog'}
              </h1>
              <div className="w-32 h-1 bg-white/30 mt-2"></div>
            </div>
            <motion.button
              onClick={handleGoBack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md font-medium transition-colors"
            >
              <FontAwesomeIcon icon={faChartLine} className="mr-2" />
              Back to Blogs
            </motion.button>
          </div>
        </div>

        {/* Blog Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/20 backdrop-blur-sm rounded-lg p-6 shadow-md border border-white/10"
        >
          <AnimatePresence mode="wait">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmitBlog}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-1">Blog Title*</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newBlog.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white"
                    placeholder="Enter blog title"
                  />
                </div>
                
                <div>
                  <label htmlFor="slug" className="block text-sm font-medium mb-1">URL Slug*</label>
                  <input
                    type="text"
                    id="slug"
                    name="slug"
                    value={newBlog.slug}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white"
                    placeholder="url-friendly-blog-name"
                  />
                  <p className="mt-1 text-xs text-white/70">Will be used in the URL: /blog/{newBlog.slug}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="subtitle" className="block text-sm font-medium mb-1">Subtitle/SEO Keywords*</label>
                  <input
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={newBlog.subtitle}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white"
                    placeholder="Enter subtitle or SEO keywords"
                  />
                </div>
                
                <div>
                  <label htmlFor="metaTitle" className="block text-sm font-medium mb-1">Meta Title</label>
                  <input
                    type="text"
                    id="metaTitle"
                    name="metaTitle"
                    value={newBlog.metaTitle || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white"
                    placeholder="Enter meta title for SEO"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-1">Publication Date*</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={newBlog.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="image" className="block text-sm font-medium mb-1">Image URL*</label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    value={newBlog.image}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white"
                    placeholder="Enter image URL"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="metaDescription" className="block text-sm font-medium mb-1">Meta Description</label>
                  <input
                    type="text"
                    id="metaDescription"
                    name="metaDescription"
                    value={newBlog.metaDescription || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white"
                    placeholder="Enter meta description for SEO"
                  />
                </div>
                
                <div>
                  <label htmlFor="author" className="block text-sm font-medium mb-1">Author*</label>
                  <select
                    id="author"
                    name="author"
                    value={newBlog.author}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white"
                  >
                    <option value="Akanksha Chugh">Akanksha Chugh</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">FAQs</label>
                <div className="border border-white/20 rounded-md p-4 bg-black/10">
                  {/* Display existing FAQs */}
                  {(newBlog.faqs || []).map((faq, index) => (
                    <div key={index} className="mb-4 p-4 bg-black/20 rounded-md shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm font-medium">FAQ #{index + 1}</h3>
                        <motion.button
                          type="button"
                          onClick={() => removeFaq(index)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-2 py-1 bg-red-500/50 hover:bg-red-500/70 text-white text-xs rounded-md"
                        >
                          Remove
                        </motion.button>
                      </div>
                      <div className="mb-2">
                        <label className="block text-xs font-medium mb-1">Question</label>
                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                          className="w-full px-3 py-2 text-sm bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white"
                          placeholder="Enter FAQ question"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1">Answer</label>
                        <textarea
                          value={faq.answer}
                          onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                          rows={3}
                          className="w-full px-3 py-2 text-sm bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white"
                          placeholder="Enter FAQ answer"
                        />
                      </div>
                    </div>
                  ))}
                  
                  {/* Add FAQ button */}
                  <motion.button
                    type="button"
                    onClick={addFaq}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md text-sm font-medium flex items-center transition-colors"
                  >
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    Add FAQ
                  </motion.button>
                  <p className="mt-2 text-xs text-white/70">Add frequently asked questions related to this blog post.</p>
                </div>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">Blog Content*</label>
                {/* Tiptap Editor Integration */}
                <div className="border border-white/20 rounded-md">
                  <TiptapEditor
                    content={newBlog.description || ''}
                    onChange={handleEditorChange}
                    className="min-h-[300px]"
                  />
                </div>
                <p className="mt-1 text-xs text-white/70">Use the toolbar above to format your content.</p>
              </div>

              {/* Status Message */}
              {statusMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-md ${
                    statusMessage.startsWith('Error') 
                      ? 'bg-red-900/50 text-red-200 border border-red-700/50' 
                      : 'bg-green-900/50 text-green-200 border border-green-700/50'
                  }`}
                >
                  {statusMessage}
                </motion.div>
              )}
              
              <div className="flex justify-end space-x-3">
                <motion.button
                  type="button"
                  onClick={resetForm}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md font-medium transition-colors"
                  disabled={isSubmitting}
                >
                  Reset Form
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md font-medium flex items-center transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {formMode === 'add' ? 'Publishing...' : 'Updating...'}
                    </>
                  ) : (
                    formMode === 'add' ? 'Publish Blog' : 'Update Blog'
                  )}
                </motion.button>
              </div>
            </motion.form>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default AddBlog