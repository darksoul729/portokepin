"use client"; // Menandakan bahwa komponen ini dijalankan di sisi klien

import { useEffect, useState, ReactNode } from "react";
import { useInView } from "react-intersection-observer"; // Menggunakan Intersection Observer API

interface ScrollAnimationProps {
  children: ReactNode; // Menyediakan kemampuan untuk membungkus elemen
  className?: string; // Memberikan class tambahan untuk styling
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, className = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Memicu animasi berulang kali saat elemen masuk dan keluar
    threshold: 0.1, // Akan aktif ketika 10% dari elemen terlihat
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true); // Animasi muncul saat elemen terlihat
    } else {
      setIsVisible(false); // Animasi keluar saat elemen tidak terlihat
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
