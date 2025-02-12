"use client"; // Tambahkan ini di atas impor di file page.tsx
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { FaGithub, FaInstagram, FaBars, FaTimes, FaSchool, FaCode, FaMapMarkerAlt, FaBirthdayCake } from "react-icons/fa";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiMysql, DiPhp, DiGo, DiCss3 } from "react-icons/di";
import ScrollAnimation from "./ScrollAnimation";
import ProjectList from "@/components/ProjectList";
import Navbar from "@/components/Navbar";
import Informasi from '@/components/Informasi';
import Footer from '@/components/footer';
import MusicCard from '@/components/MusicCard';

const skills = [
  { name: "JavaScript", Icon: DiJavascript1, color: "#F7DF1E", percentage: 90 },
  { name: "React", Icon: DiReact, color: "#61DAFB", percentage: 80 },
  { name: "Next.js", Icon: DiNodejs, color: "#339933", percentage: 85 },
  { name: "Tailwind CSS", Icon: DiCss3, color: "#06B6D4", percentage: 75 },
  { name: "MongoDB", Icon: DiMongodb, color: "#47A248", percentage: 70 },
  { name: "MySQL", Icon: DiMysql, color: "#4479A1", percentage: 80 },
  { name: "PHP", Icon: DiPhp, color: "#777BB4", percentage: 60 },
  { name: "Python", Icon: DiPython, color: "#3776AB", percentage: 85 },
  { name: "Go Lang", Icon: DiGo, color: "#00ADD8", percentage: 65 }
];


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white pt-16">
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
                className="rounded-full border-4 border-blue-700 shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white">Kevin Hermansyah</h1>
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mt-2">
            Fullstack Developer
          </p>

          <p className="mt-4 mx-auto max-w-xl sm:max-w-2xl text-sm sm:text-base text-gray-300 leading-relaxed sm:leading-loose tracking-wide text-center sm:text-center">
            Saya adalah seorang programmer fullstack yang memiliki keahlian dalam berbagai bahasa pemrograman dan framework untuk membangun solusi digital yang efisien. Dalam perjalanan karir saya, saya selalu berusaha untuk belajar dan berkembang, karena saya percaya bahwa teknologi adalah alat yang sangat kuat untuk menciptakan perubahan yang signifikan di dunia. Pemrograman bukan hanya tentang menulis kode, tetapi juga tentang menyelesaikan masalah dan menciptakan sesuatu yang dapat membawa dampak positif bagi orang lain.
          </p>

        </ScrollAnimation>

        {/* Social Links */}
        <div className="flex space-x-6 mt-6 animate-fade-in-up">
          <a href="https://github.com/darksoul729" target="_blank" className="text-gray-400 hover:text-white text-3xl">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/kepinnpanzekk_/" target="_blank" className="text-gray-400 hover:text-white text-3xl">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="py-16 px-6">
      <ScrollAnimation>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Keahlian</h2>

          {/* Skills List */}
          <div className="space-y-4">
            {skills.map(({ name, Icon, color, percentage }, index) => (
              <ScrollAnimation key={name}>
                <div className="flex items-center space-x-4">
                  {/* Skill Icon */}
                  <div className="w-16 h-16 flex justify-center items-center">
                    <Icon size={60} style={{ color }} />
                  </div>
            
                  {/* Skill Progress Bar */}
                  <div className="w-full">
                    <div className="h-3 bg-gray-300 rounded-lg">
                      <div
                        className="h-3 rounded-lg"
                        style={{ width: `${percentage}%`, backgroundColor: color }}
                      ></div>
                    </div>
                  </div>
            
                  {/* Skill Percentage */}
                  <span className="text-sm font-semibold text-gray-300">{percentage}%</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
      </div>
      <div id='information'>
        <Informasi />
      </div>
     
            
      <ScrollAnimation>
      <div id="project" className="p-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          My GitHub Projects
        </h1>
        <ProjectList />
        </div>

        <MusicCard />
        
      </ScrollAnimation>

      <footer id="contact">
          {/* Komponen Footer */}
      <Footer />
      </footer>
    </div>
  );
}
