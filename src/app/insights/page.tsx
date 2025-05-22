import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import BlogsSection from './BlogsSection';
import { Metadata } from 'next';

interface Blog {
  id: string;
  author: string;
  created: number;
  date: string;
  description: string;
  image: string;
  metaDescription: string;
  metaTitle: string;
  slug: string;
  subtitle: string;
  title: string;
}

export const metadata: Metadata = {
  title: 'Jivo Solutions | Insights',
  description: 'Latest trends, news, and insights from Jivo Solutions.',
};

async function getBlogs() {
  try {
    const blogRef = collection(db, 'blogs');
    const blogQuery = query(blogRef, orderBy('created', 'desc'));
    const snapshot = await getDocs(blogQuery);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Blog[];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function InsightsPage() {
  const blogs = await getBlogs();
  
  return (
    <div>
        <Navbar />
        <div className="w-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="font-poppins font-bold text-white uppercase" 
              style={{ 
                fontSize: "42px", 
              }}>
            Insights
          </h1>
        </div>
        <Image
          src="/jivobn1.svg"
          alt="Jivo Hero"
          width={1000}
          height={100}
          className="w-full h-48 object-cover"
          priority
        />
      </div>

      {/* Blog Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-2 text-black">Our Blogs</h1>
        
        {blogs.length > 0 ? (
          <BlogsSection blogs={blogs} />
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No blog posts found. Check back soon!</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
