import { FaSchool, FaCode, FaMapMarkerAlt, FaBirthdayCake, FaLaptopCode } from "react-icons/fa";
import ScrollAnimation from "../app/ScrollAnimation"; // Sesuaikan jika path berbeda

const Informasi = () => {
  return (
    <div className="py-16 px-6" id="personal-info">
      <ScrollAnimation>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Informasi Pribadi</h2>

          {/* Card Container */}
          <div className="w-full max-w-5xl mx-auto bg-blue-900 bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg p-10 border border-blue-700">            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Informasi Sekolah */}
              <div className="flex items-center space-x-4 ">
                <div className="w-16 h-16 flex justify-center items-center text-blue-400 bg-blue-700 rounded-full p-2 shadow-lg">
                  <FaSchool size={40} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-300">Sekolah</h3>
                  <p className="text-gray-300">SMK TI Airlangga Samarinda</p>
                </div>
              </div>

              {/* Informasi Jurusan */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 flex justify-center items-center text-orange-400 bg-orange-700 rounded-full p-2 shadow-lg">
                  <FaCode size={50} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300">Jurusan</h3>
                  <p className="text-gray-300">PPLG (Pengembangan Perangkat Lunak dan Gim)</p>
                </div>
              </div>

              {/* Informasi Lokasi */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 flex justify-center items-center text-green-400 bg-green-700 rounded-full p-2 shadow-lg">
                  <FaMapMarkerAlt size={40} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-300">Lokasi</h3>
                  <p className="text-gray-300">East Kalimantan</p>
                </div>
              </div>

              {/* Informasi Umur */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 flex justify-center items-center text-yellow-400 bg-yellow-700 rounded-full p-2 shadow-lg">
                  <FaBirthdayCake size={40} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-300">Umur</h3>
                  <p className="text-gray-300">16 tahun</p>
                </div>
              </div>

              {/* Informasi Bidang (Fullstack Programmer) */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 flex justify-center items-center text-purple-400 bg-purple-700 rounded-full p-2 shadow-lg">
                  <FaLaptopCode size={40} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-300">Bidang</h3>
                  <p className="text-gray-300">Fullstack Programmer</p>
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
