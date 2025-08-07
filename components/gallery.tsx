"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
}

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<CloudinaryImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/api/images');
        setImages(response.data.resources);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <motion.div 
      className="flex justify-center items-center py-12 px-6 sm:px-8 lg:px-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Lebarkan card */}
      <motion.div 
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-7xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Image Gallery</h2>
        <div className="overflow-x-auto">
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {images.map((image) => (
              <div key={image.public_id} className="relative">
                <Image
                  src={image.secure_url}
                  alt="Cloudinary Image"
                  width={450} // Perbesar gambar
                  height={450}
                  className="rounded-xl shadow-lg"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageGallery;
