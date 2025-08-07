"use client"; // Tambahkan ini di atas impor di file page.tsx
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { FaGithub, FaInstagram } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";
import Skills from "@/components/skil"; // Pastikan path-nya sesuai!
import ProjectList from "@/components/ProjectList";
import Navbar from "@/components/Navbar";
import Informasi from '@/components/Informasi';
import Footer from '@/components/footer';
import MusicCard from '@/components/MusicCard';
import ImageGallery from '@/components/gallery';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-black dark:text-white pt-16">
      {/* Panggil Navbar */}
      <Navbar />  {/* Navbar baru yang telah dipisah ke komponen */}

      {/* Header Section */}
      <div id="about" className="flex flex-col items-center justify-center py-16 px-6 text-center mt-6">
        <ScrollAnimation>
          {/* Gambar Profil */}
          <div className="relative mb-6 flex justify-center items-center">
            <div className="w-48 h-48 relative">
              <Image
                src="/images/profile1.jpg"
                alt="Kevin Hermansyah"
                width={192}
                height={192}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold">Kevin Hermansyah</h1>
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mt-2">
            Fullstack Developer
          </p>

          <p className="mt-4 mx-auto max-w-xl sm:max-w-2xl text-sm sm:text-base leading-relaxed sm:leading-loose tracking-wide">
            Saya adalah seorang programmer fullstack yang memiliki keahlian dalam berbagai bahasa pemrograman dan framework untuk membangun solusi digital yang efisien. Dalam perjalanan karir saya, saya selalu berusaha untuk belajar dan berkembang, karena saya percaya bahwa teknologi adalah alat yang sangat kuat untuk menciptakan perubahan yang signifikan di dunia. Pemrograman bukan hanya tentang menulis kode, tetapi juga tentang menyelesaikan masalah dan menciptakan sesuatu yang dapat membawa dampak positif bagi orang lain.
          </p>
        </ScrollAnimation>

        {/* Social Links */}
        <div className="flex space-x-6 mt-6 animate-fade-in-up">
          <a href="https://github.com/darksoul729" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-3xl">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/kepinnpanzekk_/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-3xl">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <ScrollAnimation>
        <Skills />
      </ScrollAnimation>

      <ScrollAnimation>
        <div id='information'>
          <Informasi />
        </div>
        <div id='musik' className="mb-20">
          <MusicCard />
        </div>
        <div id='galeri' className="mb-8">
        <ImageGallery />
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div id="project" className="p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">
            My GitHub Projects
          </h1>
          <ProjectList />
        </div>
        
      </ScrollAnimation>

      
   

      <footer id="contact">
        {/* Komponen Footer */}
        <Footer />
      </footer>
    </div>
  );
}
