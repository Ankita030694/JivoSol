'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { collection, getDocs, deleteDoc, doc, query, orderBy, updateDoc } from 'firebase/firestore'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit, faTrashAlt, faEye, faSearch } from '@fortawesome/free-solid-svg-icons'
import { onAuthStateChanged } from 'firebase/auth'
import { format } from 'date-fns'
import Link from 'next/link'

// Import the already configured Firebase instances
import { app, db, auth } from '../../../lib/firebase'

// Blog interface
interface Blog {
  id?: string
  title: string
  subtitle: string
  slug: string
  date: string
  author: string
  image: string
  created: number
  description: string
  metaTitle?: string
  metaDescription?: string
}

const BlogsManagement = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [statusMessage, setStatusMessage] = useState('')
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)
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
  
  // Fetch blogs from Firestore
  useEffect(() => {
    async function fetchBlogs() {
      setIsLoading(true)
      try {
        const q = query(collection(db, 'blogs'), orderBy('created', 'desc'))
        const querySnapshot = await getDocs(q)
        
        const blogsData: Blog[] = []
        querySnapshot.forEach((doc) => {
          blogsData.push({ id: doc.id, ...doc.data() as Blog })
        })
        
        setBlogs(blogsData)
      } catch (error) {
        console.error("Error fetching blogs:", error)
        setStatusMessage("Error loading blogs. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchBlogs()
  }, [])
  
  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  // Handle blog deletion
  const handleDeleteBlog = async (id: string) => {
    if (!id) return
    
    try {
      await deleteDoc(doc(db, 'blogs', id))
      setBlogs(blogs.filter(blog => blog.id !== id))
      setStatusMessage("Blog deleted successfully!")
      setDeleteConfirm(null)
      
      // Clear status message after 3 seconds
      setTimeout(() => {
        setStatusMessage('')
      }, 3000)
    } catch (error) {
      console.error("Error deleting blog:", error)
      setStatusMessage(`Error: Failed to delete blog`)
      
      // Clear status message after 3 seconds
      setTimeout(() => {
        setStatusMessage('')
      }, 3000)
    }
  }
  
  // Navigate to edit blog page
  const handleEditBlog = (id: string) => {
    router.push(`/admin/editBlog/${id}`)
  }
  
  // Format date for display
  const formatDate = (dateStr: string) => {
    try {
      const [year, month, day] = dateStr.split('-').map(num => parseInt(num))
      return format(new Date(year, month - 1, day), 'MMM d, yyyy')
    } catch (e) {
      return dateStr
    }
  }
  
  // Update blog function
  const handleUpdateBlog = async (updatedBlog: Blog) => {
    if (!updatedBlog.id) return
    
    try {
      await updateDoc(doc(db, 'blogs', updatedBlog.id), {
        title: updatedBlog.title,
        subtitle: updatedBlog.subtitle,
        slug: updatedBlog.slug,
        date: updatedBlog.date,
        author: updatedBlog.author,
        description: updatedBlog.description,
        metaTitle: updatedBlog.metaTitle || '',
        metaDescription: updatedBlog.metaDescription || '',
      })
      
      // Update blogs in state
      setBlogs(blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog))
      setStatusMessage("Blog updated successfully!")
      setEditingBlog(null)
      
      // Clear status message after 3 seconds
      setTimeout(() => {
        setStatusMessage('')
      }, 3000)
    } catch (error) {
      console.error("Error updating blog:", error)
      setStatusMessage(`Error: Failed to update blog`)
      
      // Clear status message after 3 seconds
      setTimeout(() => {
        setStatusMessage('')
      }, 3000)
    }
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#005F33E5] to-[#0A5C35] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Page Header */}
        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 shadow-md border border-white/10 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Blog Management</h1>
              <div className="w-32 h-1 bg-white/30 mt-2"></div>
            </div>
            <motion.button
              onClick={() => router.push('/admin/addBlogs')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md font-medium transition-colors"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Create New Blog
            </motion.button>
          </div>
        </div>
        
        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-black/20 backdrop-blur-sm rounded-lg p-6 shadow-md border border-white/10 mb-6"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-white/50" />
            </div>
            <input
              type="search"
              className="block w-full pl-10 pr-4 py-3 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white"
              placeholder="Search blogs by title, keywords, or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>
        
        {/* Status Message */}
        {statusMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-md ${
              statusMessage.startsWith('Error') 
                ? 'bg-red-900/50 text-red-200 border border-red-700/50' 
                : 'bg-green-900/50 text-green-200 border border-green-700/50'
            }`}
          >
            {statusMessage}
          </motion.div>
        )}
        
        {/* Blog Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/20 backdrop-blur-sm rounded-lg shadow-md border border-white/10 overflow-hidden"
        >
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="flex flex-col items-center">
                <svg className="animate-spin h-10 w-10 text-white mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-white/70">Loading blogs...</span>
              </div>
            </div>
          ) : filteredBlogs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10">
                <thead className="bg-black/30">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Blog
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Author
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Published
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Slug
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-white/70 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-black/10 divide-y divide-white/10">
                  {filteredBlogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-black/20">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-12 w-12 flex-shrink-0 rounded-md overflow-hidden bg-black/20">
                            {blog.image ? (
                              <img src={blog.image} alt={blog.title} className="h-12 w-12 object-cover" />
                            ) : (
                              <div className="h-12 w-12 flex items-center justify-center text-white/30">No img</div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-white">{blog.title}</div>
                            <div className="text-xs text-white/70">{blog.subtitle}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/90">
                        {blog.author}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/90">
                        {formatDate(blog.date)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70">
                        /{blog.slug}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white/80 hover:text-white p-2 rounded-full bg-white/5 hover:bg-blue-500/20"
                            onClick={() => blog.id && setEditingBlog(blog)}
                            title="Edit blog post"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </motion.button>
                          
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white/80 hover:text-red-400 p-2 rounded-full bg-white/5 hover:bg-red-500/20"
                            onClick={() => setDeleteConfirm(blog.id || null)}
                            title="Delete blog post"
                          >
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </motion.button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-white/70">
                {searchTerm ? 'No blogs match your search criteria.' : 'No blogs found. Create your first blog!'}
              </p>
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-[#0A5C35] to-[#004524] rounded-lg max-w-md w-full p-6 shadow-xl border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
              <p className="mb-6 text-white/80">
                Are you sure you want to delete this blog post? This action cannot be undone.
              </p>
              <div className="flex justify-end space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md font-medium transition-colors"
                  onClick={() => setDeleteConfirm(null)}
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition-colors"
                  onClick={() => deleteConfirm && handleDeleteBlog(deleteConfirm)}
                >
                  Delete
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Edit Blog Modal */}
      <AnimatePresence>
        {editingBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-[#0A5C35] to-[#004524] rounded-lg max-w-3xl w-full p-6 shadow-xl border border-white/10 my-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6 sticky top-0 bg-gradient-to-br from-[#0A5C35] to-[#004524] py-2 z-10">
                <h3 className="text-xl font-bold">Edit Blog</h3>
                <button
                  onClick={() => setEditingBlog(null)}
                  className="text-white/70 hover:text-white text-2xl focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full h-8 w-8 flex items-center justify-center"
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                if (editingBlog) {
                  handleUpdateBlog(editingBlog);
                }
              }}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="blog-title" className="block text-sm font-medium text-white/70 mb-1">Title</label>
                    <input
                      id="blog-title"
                      type="text"
                      value={editingBlog.title}
                      onChange={(e) => setEditingBlog({...editingBlog, title: e.target.value})}
                      className="w-full px-3 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="blog-subtitle" className="block text-sm font-medium text-white/70 mb-1">Subtitle</label>
                    <input
                      id="blog-subtitle"
                      type="text"
                      value={editingBlog.subtitle}
                      onChange={(e) => setEditingBlog({...editingBlog, subtitle: e.target.value})}
                      className="w-full px-3 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="blog-slug" className="block text-sm font-medium text-white/70 mb-1">Slug</label>
                      <input
                        id="blog-slug"
                        type="text"
                        value={editingBlog.slug}
                        onChange={(e) => setEditingBlog({...editingBlog, slug: e.target.value})}
                        className="w-full px-3 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="blog-author" className="block text-sm font-medium text-white/70 mb-1">Author</label>
                      <input
                        id="blog-author"
                        type="text"
                        value={editingBlog.author}
                        onChange={(e) => setEditingBlog({...editingBlog, author: e.target.value})}
                        className="w-full px-3 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="blog-date" className="block text-sm font-medium text-white/70 mb-1">Publication Date</label>
                    <input
                      id="blog-date"
                      type="date"
                      value={editingBlog.date}
                      onChange={(e) => setEditingBlog({...editingBlog, date: e.target.value})}
                      className="w-full px-3 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="blog-description" className="block text-sm font-medium text-white/70 mb-1">Description</label>
                    <textarea
                      id="blog-description"
                      value={editingBlog.description}
                      onChange={(e) => setEditingBlog({...editingBlog, description: e.target.value})}
                      className="w-full px-3 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 h-48 resize-y"
                      required
                    />
                    <p className="text-xs text-white/50 mt-1">This is the main content of your blog post.</p>
                  </div>
                  
                  <div>
                    <label htmlFor="blog-meta-title" className="block text-sm font-medium text-white/70 mb-1">Meta Title</label>
                    <input
                      id="blog-meta-title"
                      type="text"
                      value={editingBlog.metaTitle || ''}
                      onChange={(e) => setEditingBlog({...editingBlog, metaTitle: e.target.value})}
                      className="w-full px-3 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <p className="text-xs text-white/50 mt-1">Used for SEO purposes.</p>
                  </div>
                  
                  <div>
                    <label htmlFor="blog-meta-description" className="block text-sm font-medium text-white/70 mb-1">Meta Description</label>
                    <textarea
                      id="blog-meta-description"
                      value={editingBlog.metaDescription || ''}
                      onChange={(e) => setEditingBlog({...editingBlog, metaDescription: e.target.value})}
                      className="w-full px-3 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 h-24 resize-y"
                    />
                    <p className="text-xs text-white/50 mt-1">Brief description for search engine results.</p>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-6 sticky bottom-0 bg-gradient-to-br from-[#0A5C35] to-[#004524] py-4 z-10">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                    onClick={() => setEditingBlog(null)}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Save Changes
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BlogsManagement
