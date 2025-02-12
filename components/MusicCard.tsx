import { FaPlay } from "react-icons/fa";
import Image from "next/image";

const MusicCard = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">🎵 Favorite Songs</h2>

      {/* Card Container */}
      <div className="bg-blue-900 bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg p-6 md:p-8 border border-blue-700">
        <div className="grid grid-cols-1 gap-6">
          
          {/* Song 1 */}
          <div className="flex items-center space-x-4">
            <Image
              src="/images/kenang.jpeg"
              alt="Naff - Kenanglah Aku"
              width={80}
              height={80}
              className="rounded-lg shadow-md w-20 h-20 object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-teal-300">Kenanglah Aku</h3>
              <p className="text-gray-300">Naff</p>
              <a
                href="https://open.spotify.com/track/0zJIPpVcHKWqmf2FaKXbQQ?si=b55ebf9d349444d7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-lg transition-all shadow-md w-max"
              >
                <FaPlay size={14} /> <span>Play</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-blue-700"></div>

          {/* Song 2 */}
          <div className="flex items-center space-x-4">
            <Image
              src="/images/judika.jpeg"
              alt="-"
              width={80}
              height={80}
              className="rounded-lg shadow-md w-20 h-20 object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-teal-300">Sampai Akhir Nanti</h3>
              <p className="text-gray-300">Judika</p>
              <a
                href="https://open.spotify.com/track/1apPmtDyQfYTtsMdfziIdN?si=586e76f2d89e436d"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-lg transition-all shadow-md w-max"
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
