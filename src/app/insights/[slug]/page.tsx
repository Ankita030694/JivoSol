// import { collection, query, where, getDocs, limit } from "firebase/firestore"
// import { db } from "@/lib/firebase"
// import Navbar from "@/components/Navbar"
// import Footer from "@/components/Footer"
// import Image from "next/image"
// import type { Metadata } from "next"
// import Link from "next/link"

// interface Blog {
//   id: string
//   author: string
//   created: number
//   date: string
//   description: string
//   image: string
//   metaDescription: string
//   metaTitle: string
//   slug: string
//   subtitle: string
//   title: string
// }

// type Params = {
//   slug: string
// }

// export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
//   try {
//     const blog = await getBlogBySlug(params.slug)

//     if (!blog) {
//       return {
//         title: "Blog Post Not Found | Jivo Solutions",
//         description: "The requested blog post could not be found.",
//       }
//     }

//     return {
//       title: blog.metaTitle || blog.title,
//       description: blog.metaDescription,
//       openGraph: {
//         title: blog.metaTitle || blog.title,
//         description: blog.metaDescription,
//         images: [{ url: blog.image }],
//       },
//     }
//   } catch (error) {
//     console.error("Error generating metadata:", error)
//     return {
//       title: "Jivo Solutions | Blog",
//       description: "Explore our latest insights and articles",
//     }
//   }
// }

// async function getBlogBySlug(slug: string): Promise<Blog | null> {
//   try {
//     const blogRef = collection(db, "blogs")
//     const blogQuery = query(blogRef, where("slug", "==", slug))
//     const snapshot = await getDocs(blogQuery)

//     if (snapshot.empty) {
//       return null
//     }

//     return {
//       id: snapshot.docs[0].id,
//       ...snapshot.docs[0].data(),
//     } as Blog
//   } catch (error) {
//     console.error(`Error fetching blog with slug ${slug}:`, error)
//     return null
//   }
// }

// async function getRelatedBlogs(currentSlug: string, category = ""): Promise<Blog[]> {
//   try {
//     const blogRef = collection(db, "blogs")
//     const blogQuery = query(blogRef, where("slug", "!=", currentSlug), limit(3))
//     const snapshot = await getDocs(blogQuery)

//     return snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     })) as Blog[]
//   } catch (error) {
//     console.error("Error fetching related blogs:", error)
//     return []
//   }
// }

// // Remove type annotations and let Next.js infer the types
// export default async function BlogPage({ params, searchParams }: any) {
//   const blog = await getBlogBySlug(params.slug)
//   const relatedBlogs = blog ? await getRelatedBlogs(params.slug) : []

//   if (!blog) {
//     return (
//       <div>
//         <Navbar />
//         <div className="container mx-auto px-4 py-12 min-h-screen">
//           <h1 className="text-3xl font-bold">Blog post not found</h1>
//           <p className="mt-4">
//             <Link href="/insights" className="text-[#2B5741] underline">
//               Return to Insights
//             </Link>
//           </p>
//         </div>
//         <Footer />
//       </div>
//     )
//   }

//   return (
//     <div className="bg-gray-50">
//       <Navbar />

//       {/* Hero Section with Featured Image */}
//       <div className="w-full relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-gray-900 to-black">
//         {/* Overlay with gradient */}
//         <div className="absolute inset-0 bg-black/50 z-10"></div>

//         {/* Background Image */}
//         <Image src={"/jabout1.svg"} alt={blog.title} fill className="object-cover opacity-60 z-0" priority />

//         {/* Content Container */}
//         <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
//           <div className="max-w-4xl">
//             <div className="mb-4 inline-block px-3 py-1 bg-[#2B5741]/90 text-white text-sm rounded-full">
//               {blog.subtitle || "Jivo Blog"}
//             </div>
//             <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{blog.title}</h1>
//             <div className="flex items-center justify-center text-white/90 gap-2 text-sm md:text-base">
//               <span>{blog.date}</span>
//               <span className="mx-2">•</span>
//               <span>By {blog.author}</span>
//               <span className="mx-2">•</span>
//               <span>6 min read</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-xl overflow-hidden">
//           {/* Author Info Box */}
//           <div className="flex items-center p-6 border-b border-gray-100">
//             <div className="w-12 h-12 bg-[#2B5741] rounded-full flex items-center justify-center text-white font-bold text-xl">
//               {blog.author ? blog.author.charAt(0) : "J"}
//             </div>
//             <div className="ml-4">
//               <p className="font-medium text-gray-900">{blog.author || "Jivo Author"}</p>
//               <p className="text-sm text-gray-500">
//                 {blog.date} • {blog.subtitle}
//               </p>
//             </div>

//             {/* Social Share */}
//             <div className="ml-auto flex gap-2">
//               <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c-.002-.249 1.51-2.772 1.818-4.013v-.001z" />
//                 </svg>
//               </button>
//               <button className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
//                 </svg>
//               </button>
//               <button className="p-2 bg-[#2B5741] text-white rounded-full hover:bg-[#1e3d2d] transition">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
//                   <polyline points="16 6 12 2 8 6" />
//                   <line x1="12" y1="2" x2="12" y2="15" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Blog Content */}
//           <div className="p-6 md:p-10">
//             <div
//               className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-black prose-a:text-[#000000] prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg"
//               dangerouslySetInnerHTML={{ __html: blog.description }}
//               style={{
//                 color: "black",
//               }}
//             />
//           </div>

//           {/* Bottom CTA */}
//           <div className="px-6 md:px-10 py-8 bg-gradient-to-r from-[#2B5741]/10 to-[#2B5741]/5 border-t border-gray-100">
//             <div className="flex flex-col md:flex-row items-center justify-between">
//               <p className="text-gray-700 mb-4 md:mb-0">Want to learn more about our digital marketing services?</p>
//               <Link
//                 href="/contact"
//                 className="px-6 py-2 bg-[#2B5741] text-white rounded-full hover:bg-[#1e3d2d] transition"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Related Articles */}
//         {relatedBlogs.length > 0 && (
//           <div className="mt-16">
//             <h2 className="text-2xl font-bold text-center mb-8">Related Articles</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {relatedBlogs.map((relatedBlog) => (
//                 <Link key={relatedBlog.id} href={`/insights/${relatedBlog.slug}`} className="block group">
//                   <div className="bg-white rounded-xl overflow-hidden shadow-sm transition group-hover:shadow-md">
//                     <div className="relative h-48">
//                       <Image src={"/jabout1.svg"} alt={relatedBlog.title} fill className="object-cover" />
//                     </div>
//                     <div className="p-5">
//                       <p className="text-sm text-gray-500 mb-2">{relatedBlog.date}</p>
//                       <h3 className="font-bold text-lg mb-2 group-hover:text-[#2B5741] transition-colors">
//                         {relatedBlog.title}
//                       </h3>
//                       <p className="text-sm line-clamp-2 text-black">{relatedBlog.metaDescription}</p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Back Button */}
//         <div className="flex justify-center mt-12">
//           <Link
//             href="/insights"
//             className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition flex items-center gap-2"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M19 12H5M12 19l-7-7 7-7" />
//             </svg>
//             Back to All Insights
//           </Link>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }
