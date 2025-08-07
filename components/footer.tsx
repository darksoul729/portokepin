"use client";
import { useState } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Import ikon
import { FaSpinner } from "react-icons/fa"; // Import ikon spinner untuk loading
import ScrollAnimation from "../app/ScrollAnimation"; // Sesuaikan jika path berbeda


const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Menambahkan state loading

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); 

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Pesan berhasil dikirim!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Gagal mengirim pesan.");
    }

    setIsLoading(false); 
  };

  const currentYear = new Date().getFullYear(); 
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <ScrollAnimation>
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Logo & Nama */}
        <div className="flex flex-col items-center md:items-start animate__animated animate__fadeIn animate__delay-1s">
          <img src="https://i.ibb.co.com/4gTMcR57/20250208-161853-removebg.png"  className="w-24 h-24 mb-4 transition-transform transform hover:scale-110" />
          <h2 className="text-2xl justify-center font-bold text-center md:text-left animate__animated animate__fadeIn animate__delay-1s">Kevin Hermansyah</h2>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6 md:mb-0 animate__animated animate__fadeIn animate__delay-1.5s">
          <a href="https://www.instagram.com/kepinnpanzekk_" target="_blank" className="hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
            <FaInstagram className="text-2xl md:text-3xl" />
          </a>
          <a href="https://www.facebook.com/JuxzYouri" target="_blank" className="hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
            <FaFacebookF className="text-2xl md:text-3xl" />
          </a>
          <a href="https://wa.me/6287777581730" target="_blank" className="hover:text-green-500 transition-all duration-300 transform hover:scale-110">
            <FaWhatsapp className="text-2xl md:text-3xl" />
          </a>
          <a href="mailto:hermansyahkevin362@gmail.com" className="hover:text-red-500 transition-all duration-300 transform hover:scale-110">
            <FaEnvelope className="text-2xl md:text-3xl" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-[700px] bg-gray-800 p-6 rounded-lg md:ml-6 transition-all duration-500 transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-4 text-center">Hubungi Kami</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nama Anda"
              required
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none transition-all duration-300 transform hover:scale-105"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Anda"
              required
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none transition-all duration-300 transform hover:scale-105"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Pesan Anda"
              required
              rows={4}
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none transition-all duration-300 transform hover:scale-105"
              value={formData.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <FaSpinner className="animate-spin text-white mr-2" /> {/* Ikon spinner */}
                  Mengirim...
                </div>
              ) : (
                "Kirim Pesan"
              )}
            </button>

            {status && <p className="text-center mt-4">{status}</p>}
          </form>
         
        </div>
        
      </div>
      </ScrollAnimation>  

      <div className="mt-8 border-t border-gray-600 pt-6 text-center">
        <p className="text-sm animate__animated animate__fadeIn animate__delay-2s">&copy; {currentYear} KevinHermansyah. Semua hak cipta dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
