'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { storage } from '../../../lib/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

interface ImageUploadProps {
  onImageUploaded: (url: string) => void
  currentImage?: string
  folder?: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({ 
  onImageUploaded, 
  currentImage = '', 
  folder = 'blog-images' 
}) => {
  const [isUploading, setIsUploading] = useState(false)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setIsUploading(true)
      
      // Create a unique filename
      const timestamp = Date.now()
      const filename = `${timestamp}_${file.name}`
      
      // Create a reference to the file location in Firebase Storage
      const storageRef = ref(storage, `${folder}/${filename}`)
      
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file)
      
      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref)
      
      // Call the callback with the new image URL
      onImageUploaded(downloadURL)
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Error uploading image. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="relative">
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      <label
        htmlFor="image-upload"
        className={`flex items-center justify-center w-full px-4 py-2 bg-black/30 border border-white/20 rounded-md cursor-pointer hover:bg-black/40 transition-colors ${
          isUploading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isUploading ? (
          <>
            <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
            Uploading...
          </>
        ) : currentImage ? (
          <>
            <FontAwesomeIcon icon={faUpload} className="mr-2" />
            Change Image
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faUpload} className="mr-2" />
            Upload Image
          </>
        )}
      </label>
      {currentImage && (
        <div className="mt-2">
          <img
            src={currentImage}
            alt="Uploaded"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      )}
    </div>
  )
}

export default ImageUpload 