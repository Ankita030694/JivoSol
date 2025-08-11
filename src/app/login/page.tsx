"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
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
  }, []);

  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful:', userCredential.user);
      
      // Redirect to dashboard after successful login
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Login error:', error);
      
      // Handle specific Firebase auth errors
      switch (error.code) {
        case 'auth/user-not-found':
          setError('No account found with this email address.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password. Please try again.');
          break;
        case 'auth/invalid-email':
          setError('Please enter a valid email address.');
          break;
        case 'auth/user-disabled':
          setError('This account has been disabled.');
          break;
        case 'auth/too-many-requests':
          setError('Too many failed attempts. Please try again later.');
          break;
        default:
          setError('Login failed. Please check your credentials and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show loading spinner while checking authentication
  if (loading || !mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#005F33E5] to-[#0A5C35]">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full"
        />
      </div>
    );
  }

  // Don't render login form if user is already authenticated (will redirect)
  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#005F33E5] to-[#0A5C35] text-white px-4 relative">
      {/* Main content - centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full">
          {/* Animated elements */}
          {mounted && (
            <>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/10"
              >
                <motion.div 
                  className="text-center mb-8"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Sign In</h1>
                  <p className="mt-3 text-white/80">Welcome back! Please enter your details</p>
                </motion.div>

                {/* Error message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                <motion.form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-white/90">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label htmlFor="password" className="block text-sm font-medium text-white/90">
                        Password
                      </label>
                      <Link href="/forgot-password" className="text-sm text-white/80 hover:text-white">
                        Forgot password?
                      </Link>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="••••••••"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-[#0A5C35] px-4 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0A5C35] mr-2"></div>
                          Signing in...
                        </>
                      ) : (
                        'Sign in'
                      )}
                    </button>
                  </div>

                  <div className="text-center text-sm text-white/70">
                    Don't have an account?{' '}
                    <Link href="/signup" className="font-medium text-white hover:underline">
                      Sign up
                    </Link>
                  </div>
                </motion.form>
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* Footer - positioned at bottom */}
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
    </div>
  );
}
