'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

interface BlogsSectionProps {
  blogs: Blog[];
}

export default function BlogsSection({ blogs }: BlogsSectionProps) {
  const [activeTab, setActiveTab] = useState<'popular' | 'latest'>('popular');
  const [visibleBlogs, setVisibleBlogs] = useState<Blog[]>(blogs.slice(0, 8));
  
  const handleTabChange = (tab: 'popular' | 'latest') => {
    setActiveTab(tab);
    if (tab === 'popular') {
      // Sort by some popularity metric, or just use the original order
      setVisibleBlogs(blogs.slice(0, 8));
    } else {
      // Sort by date (newest first)
      const sorted = [...blogs].sort((a, b) => b.created - a.created);
      setVisibleBlogs(sorted.slice(0, 8));
    }
  };
  
  const handleLoadMore = () => {
    const currentLength = visibleBlogs.length;
    const moreBlogs = activeTab === 'popular' 
      ? blogs.slice(0, currentLength + 4)
      : [...blogs].sort((a, b) => b.created - a.created).slice(0, currentLength + 4);
    
    setVisibleBlogs(moreBlogs);
  };
  
  return (
    <>
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <button 
          className={`px-6 py-2 rounded-full ${activeTab === 'popular' ? 'bg-[#2B5741] text-white' : 'bg-gray-100 text-black'}`}
          onClick={() => handleTabChange('popular')}
        >
          Popular
        </button>
        <button 
          className={`px-6 py-2 rounded-full ${activeTab === 'latest' ? 'bg-[#2B5741] text-white' : 'bg-gray-100 text-black'}`}
          onClick={() => handleTabChange('latest')}
        >
          Latest
        </button>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleBlogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <Link href={`/insights/${blog.slug}`}>
            <div className="relative h-48">
                
              <Image
                src={   '/jabout1.svg'}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-black mb-2">{blog.date}</p>
              <h3 className="font-bold text-lg mb-2 text-black">{blog.title}</h3>
              <p className="text-sm text-black mb-4">{blog.metaDescription}</p>
            </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleBlogs.length < blogs.length && (
        <div className="flex justify-center mt-12">
          <button 
            className="px-8 py-3 bg-[#2B5741] text-white rounded-full flex items-center gap-2"
            onClick={handleLoadMore}
          >
            Loading More... <span>→</span>
          </button>
        </div>
      )}
    </>
  );
} 