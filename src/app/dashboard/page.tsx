"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs, deleteDoc, doc, Timestamp } from 'firebase/firestore';
import { FiTrash2, FiExternalLink, FiCalendar, FiAlertTriangle } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Inquiry {
  id: string;
  email: string;
  message: string;
  name: string;
  number: string;
  service: string;
  timestamp: Timestamp;
}

export default function InquiriesPage() {
  const [mounted, setMounted] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState<{id: string, name: string} | null>(null);
  const [decorElements, setDecorElements] = useState<Array<{width: number, height: number, top: string, left: string, scale: number, opacity: number, duration: number}>>([]);
  
  useEffect(() => {
    setMounted(true);
    
    // Generate random decorative elements only on client-side
    const elements = Array(6).fill(0).map(() => ({
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      scale: Math.random() * 0.4 + 0.6,
      opacity: Math.random() * 0.07 + 0.03,
      duration: Math.random() * 3 + 2
    }));
    
    setDecorElements(elements);
    
    // Fetch inquiries
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "inquiries"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      
      const inquiriesData: Inquiry[] = [];
      querySnapshot.forEach((doc) => {
        inquiriesData.push({
          id: doc.id,
          ...doc.data() as Omit<Inquiry, 'id'>
        });
      });
      
      setInquiries(inquiriesData);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  // Show delete confirmation dialog
  const promptDelete = (id: string, name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDeleteConfirmation({ id, name });
  };

  // Execute the actual delete operation
  const executeDelete = async (id: string) => {
    setDeleteId(id);
    try {
      await deleteDoc(doc(db, "inquiries", id));
      setInquiries(inquiries.filter(inquiry => inquiry.id !== id));
      if (selectedInquiry?.id === id) {
        setSelectedInquiry(null);
      }
    } catch (error) {
      console.error("Error deleting inquiry:", error);
    } finally {
      setDeleteId(null);
      setDeleteConfirmation(null);
    }
  };

  const formatDate = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#005F33E5] to-[#0A5C35] text-white relative">
      {/* Main content */}
      <Navbar />
      <div className="flex-1 py-12">
        <div className="max-w-7xl mx-auto">
          {mounted && (
            <>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Customer Inquiries</h1>
                <p className="mt-3 text-white/80">View and manage all customer requests</p>
              </motion.div>

              {loading ? (
                <div className="flex justify-center items-center py-20">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full"
                  />
                </div>
              ) : inquiries.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 bg-white/5 backdrop-blur-sm rounded-2xl"
                >
                  <p className="text-xl">No inquiries found.</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden shadow-xl"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Name</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Email</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Phone</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Service</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Date</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Message</th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-white/80">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <AnimatePresence>
                          {inquiries.map((inquiry) => (
                            <motion.tr 
                              key={inquiry.id}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0, height: 0 }}
                              onClick={() => setSelectedInquiry(inquiry)}
                              className="border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors"
                            >
                              <td className="px-6 py-4 whitespace-nowrap font-medium">{inquiry.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <a href={`mailto:${inquiry.email}`} className="hover:underline text-white/80">
                                  {inquiry.email}
                                </a>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <a href={`tel:${inquiry.number}`} className="hover:underline text-white/80">
                                  {inquiry.number}
                                </a>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 bg-white/10 rounded-full text-xs">
                                  {inquiry.service}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-white/70 flex items-center gap-2">
                                <FiCalendar className="text-white/40" />
                                {formatDate(inquiry.timestamp)}
                              </td>
                              <td className="px-6 py-4 max-w-[200px] truncate">
                                {truncateText(inquiry.message, 30)}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="flex items-center justify-end space-x-3">
                                  <button
                                    onClick={(e) => promptDelete(inquiry.id, inquiry.name, e)}
                                    disabled={deleteId === inquiry.id}
                                    className={`p-2 rounded-full ${deleteId === inquiry.id ? 'bg-red-500/30' : 'bg-red-500/20 hover:bg-red-500/50'} transition-all duration-300`}
                                  >
                                    {deleteId === inquiry.id ? (
                                      <motion.div 
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full"
                                      />
                                    ) : (
                                      <FiTrash2 className="w-4 h-4" />
                                    )}
                                  </button>
                                </div>
                              </td>
                            </motion.tr>
                          ))}
                        </AnimatePresence>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* Detail modal */}
              <AnimatePresence>
                {selectedInquiry && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                    onClick={() => setSelectedInquiry(null)}
                  >
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="bg-gradient-to-br from-[#005F33] to-[#0A5C35] p-6 rounded-xl border border-white/20 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Header with close button */}
                      <div className="flex justify-between items-start">
                        <div className="pr-4">
                          <h3 className="text-2xl font-bold break-words">{selectedInquiry.name}</h3>
                          <div className="mt-1 text-white/70 flex items-center gap-2">
                            <FiCalendar className="text-white/50 flex-shrink-0" />
                            <span className="break-words">{formatDate(selectedInquiry.timestamp)}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedInquiry(null)}
                          className="text-white/70 hover:text-white p-1 flex-shrink-0"
                        >
                          ✕
                        </button>
                      </div>
                      
                      {/* Scrollable content area */}
                      <div className="mt-6 overflow-y-auto flex-1 pr-1">
                        <div className="p-4 bg-black/20 rounded-lg">
                          <h4 className="text-white/50 text-sm mb-2">Message</h4>
                          <p className="text-white whitespace-pre-wrap break-words">{selectedInquiry.message}</p>
                        </div>
                        
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="p-3 bg-black/10 rounded-lg">
                            <h4 className="text-white/50 text-sm mb-1">Email</h4>
                            <a 
                              href={`mailto:${selectedInquiry.email}`} 
                              className="hover:underline break-all"
                            >
                              {selectedInquiry.email}
                            </a>
                          </div>
                          <div className="p-3 bg-black/10 rounded-lg">
                            <h4 className="text-white/50 text-sm mb-1">Phone</h4>
                            <a 
                              href={`tel:${selectedInquiry.number}`} 
                              className="hover:underline break-all"
                            >
                              {selectedInquiry.number}
                            </a>
                          </div>
                          <div className="p-3 bg-black/10 rounded-lg">
                            <h4 className="text-white/50 text-sm mb-1">Service</h4>
                            <span className="break-words">{selectedInquiry.service}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Actions footer */}
                      <div className="mt-8 flex justify-end">
                        <button
                          onClick={(e) => promptDelete(selectedInquiry.id, selectedInquiry.name, e)}
                          disabled={deleteId === selectedInquiry.id}
                          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                            deleteId === selectedInquiry.id ? 'bg-red-500/30' : 'bg-red-500/20 hover:bg-red-500/50'
                          } transition-all duration-300`}
                        >
                          {deleteId === selectedInquiry.id ? (
                            <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full"
                            />
                          ) : (
                            <FiTrash2 className="w-4 h-4" />
                          )}
                          Delete Inquiry
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Delete confirmation dialog */}
              <AnimatePresence>
                {deleteConfirmation && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                    onClick={() => setDeleteConfirmation(null)}
                  >
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="bg-gradient-to-br from-[#A02725] to-[#7A1F1D] p-6 rounded-xl border border-white/20 shadow-2xl w-full max-w-md"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-red-500/20 p-3 rounded-full">
                          <FiAlertTriangle className="text-red-300 w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold">Confirm Deletion</h3>
                      </div>
                      
                      <p className="mt-4 text-white/80">
                        Are you sure you want to delete the inquiry from <span className="font-semibold text-white">{deleteConfirmation.name}</span>? This action cannot be undone.
                      </p>
                      
                      <div className="mt-6 flex justify-end gap-3">
                        <button
                          onClick={() => setDeleteConfirmation(null)}
                          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => executeDelete(deleteConfirmation.id)}
                          disabled={!!deleteId}
                          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                            deleteId === deleteConfirmation.id ? 'bg-red-500/30' : 'bg-red-500 hover:bg-red-600'
                          } transition-all duration-300`}
                        >
                          {deleteId === deleteConfirmation.id ? (
                            <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full"
                            />
                          ) : (
                            <FiTrash2 className="w-4 h-4" />
                          )}
                          Delete
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <motion.div 
        className="py-8 text-sm text-white/70 text-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        © {new Date().getFullYear()} Jivosol. All rights reserved.
      </motion.div>
      
      {/* Decorative elements - only rendered on client side */}
      {mounted && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {decorElements.map((elem, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white bg-opacity-10"
              style={{
                width: elem.width,
                height: elem.height,
                top: elem.top,
                left: elem.left,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: elem.scale, 
                opacity: elem.opacity 
              }}
              transition={{ 
                duration: elem.duration,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}
