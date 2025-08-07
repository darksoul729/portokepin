"use client";
import { FaSchool, FaCode, FaMapMarkerAlt, FaBirthdayCake, FaLaptopCode } from "react-icons/fa";
import ScrollAnimation from "../app/ScrollAnimation"; // Sesuaikan jika path berbeda

const Informasi = () => {
  return (
    <div className="py-16 px-6" id="personal-info">
      <ScrollAnimation>
        <div className="max-w-6xl mx-auto"> {/* Card lebih besar di desktop */}
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">Informasi Pribadi</h2>

          {/* Card Container */}
          <div className="w-full max-w-6xl mx-auto bg-gray-200 dark:bg-gray-800 bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg p-10 md:p-12 lg:p-14 border border-gray-400 dark:border-gray-700">            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Informasi Sekolah */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 md:w-20 md:h-20 flex justify-center items-center text-blue-300 bg-blue-700 dark:bg-blue-900 rounded-full p-2 shadow-lg">
                  <FaSchool size={40} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-300">Sekolah</h3>
                  <p className="text-gray-600 dark:text-gray-400">SMK TI Airlangga Samarinda</p>
                </div>
              </div>

              {/* Informasi Jurusan */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 md:w-20 md:h-20 flex justify-center items-center text-orange-300 bg-orange-700 dark:bg-orange-900 rounded-full p-2 shadow-lg">
                  <FaCode size={50} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-500 dark:text-orange-300">Jurusan</h3>
                  <p className="text-gray-600 dark:text-gray-400">PPLG (Pengembangan Perangkat Lunak dan Gim)</p>
                </div>
              </div>

              {/* Informasi Lokasi */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 md:w-20 md:h-20 flex justify-center items-center text-green-300 bg-green-700 dark:bg-green-900 rounded-full p-2 shadow-lg">
                  <FaMapMarkerAlt size={40} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-500 dark:text-green-300">Lokasi</h3>
                  <p className="text-gray-600 dark:text-gray-400">East Kalimantan</p>
                </div>
              </div>

              {/* Informasi Umur */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 md:w-20 md:h-20 flex justify-center items-center text-yellow-300 bg-yellow-700 dark:bg-yellow-900 rounded-full p-2 shadow-lg">
                  <FaBirthdayCake size={40} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-500 dark:text-yellow-300">Umur</h3>
                  <p className="text-gray-600 dark:text-gray-400">16 tahun</p>
                </div>
              </div>

              {/* Informasi Bidang (Fullstack Programmer) */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 md:w-20 md:h-20 flex justify-center items-center text-purple-300 bg-purple-700 dark:bg-purple-900 rounded-full p-2 shadow-lg">
                  <FaLaptopCode size={40} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-500 dark:text-purple-300">Bidang</h3>
                  <p className="text-gray-600 dark:text-gray-400">Fullstack Programmer</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Informasi;
