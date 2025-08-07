"use client";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

const MusicCard = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">🎵 Favorite Songs</h2>

      {/* Card Container */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-300 dark:border-gray-700 lg:p-8 lg:rounded-2xl lg:shadow-xl">
        <div className="grid grid-cols-1 gap-6">
          
          {/* Song 1 */}
          <div className="flex items-center space-x-4">
            <Image
              src="/images/kenang.jpeg"
              alt="Naff - Kenanglah Aku"
              width={100} // Lebih besar di desktop
              height={100}
              className="rounded-lg shadow-md object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-teal-300">Kenanglah Aku Sepanjang waktu</h3>
              <p className="text-gray-600 dark:text-gray-300">Naff</p>
              <a
                href="https://open.spotify.com/track/0zJIPpVcHKWqmf2FaKXbQQ?si=b55ebf9d349444d7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-lg transition-all shadow-md w-max"
              >
                <FaPlay size={14} /> <span>Play</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 dark:border-gray-700"></div>

          {/* Song 2 */}
          <div className="flex items-center space-x-4">
            <Image
              src="/images/judika.jpeg"
              alt="Judika - Sampai Akhir Nanti"
              width={100} 
              height={100}
              className="rounded-lg shadow-md object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-teal-300">Sampai Akhir Nanti</h3>
              <p className="text-gray-600 dark:text-gray-300">Judika</p>
              <a
                href="https://open.spotify.com/track/1apPmtDyQfYTtsMdfziIdN?si=586e76f2d89e436d"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-lg transition-all shadow-md w-max"
              >
                <FaPlay size={14} /> <span>Play</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MusicCard;
