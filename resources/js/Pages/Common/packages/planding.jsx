import { Search, Calendar, ChevronDown } from "lucide-react"

const TravelPackages = () => {
  return (
    <div className="bg-[#f8fafc] text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl text-gray-100">
              Explore our handpicked destinations and create unforgettable memories
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 max-w-5xl mx-auto shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-medium mb-1">Location</label>
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-medium mb-1">Package Type</label>
                <div className="flex items-center justify-between p-2 border rounded-md hover:border-blue-500 cursor-pointer">
                  <span>All Inclusive</span>
                  <ChevronDown size={18} />
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-medium mb-1">Travel Date</label>
                <div className="flex items-center justify-between p-2 border rounded-md hover:border-blue-500 cursor-pointer">
                  <span>Select dates</span>
                  <Calendar size={18} />
                </div>
              </div>

              <div className="flex items-end">
                <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Search size={20} />
                  <span className="hidden md:inline">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dubai Packages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-blue-600 mb-2">Discover Luxury and Adventure in the Desert</p>
            <h2 className="text-3xl font-bold text-gray-900">Dubai Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=2070&auto=format&fit=crop"
                  alt="Burj Khalifa"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Burj Khalifa</h3>
                  <p className="text-white/80 text-sm">Dubai</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1578575436955-ef29da568c6c?q=80&w=2070&auto=format&fit=crop"
                  alt="Burj al Arab"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Burj al Arab</h3>
                  <p className="text-white/80 text-sm">Dubai</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1584352604394-c2c6f06e0692?q=80&w=2069&auto=format&fit=crop"
                  alt="Atlantis"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Atlantis</h3>
                  <p className="text-white/80 text-sm">Dubai</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1974&auto=format&fit=crop"
                  alt="Safari"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Safari</h3>
                  <p className="text-white/80 text-sm">Dubai</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              View details
            </button>
          </div>
        </div>
      </section>

      {/* Europe Packages Section */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-blue-300 mb-2">Most Popular choices for travelers</p>
            <h2 className="text-3xl font-bold text-white">Europe Packages</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-40">
                <img
                  src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop"
                  alt="Europe"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <h3 className="text-white font-semibold text-center">Europe</h3>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-40">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
                  alt="London"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <h3 className="text-white font-semibold text-center">London</h3>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-40">
                <img
                  src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=2070&auto=format&fit=crop"
                  alt="Italy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <h3 className="text-white font-semibold text-center">Italy</h3>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-40">
                <img
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop"
                  alt="Paris"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <h3 className="text-white font-semibold text-center">Paris</h3>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-40">
                <img
                  src="https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070&auto=format&fit=crop"
                  alt="Spain"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <h3 className="text-white font-semibold text-center">Spain</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kashmir Packages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-blue-600 mb-2">Most Popular choices for travelers from Kashmir India</p>
            <h2 className="text-3xl font-bold text-gray-900">Kashmir Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070&auto=format&fit=crop"
                  alt="Mughal Garden"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-center">Mughal Garden</h3>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1566837828676-d71608e815f7?q=80&w=2070&auto=format&fit=crop"
                  alt="Gulmarg"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-center">Gulmarg</h3>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1566837830183-6be3b8808783?q=80&w=2070&auto=format&fit=crop"
                  alt="Srinagar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-center">Srinagar</h3>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1624309845812-a7c7e55fa104?q=80&w=2033&auto=format&fit=crop"
                  alt="Pahalgam"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-center">Pahalgam</h3>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1623953653730-526967cf6f0f?q=80&w=2070&auto=format&fit=crop"
                  alt="Yousmarg"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-center">Yousmarg</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              View details
            </button>
          </div>
        </div>
      </section>

      {/* North East & Bhutan Packages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-blue-600 mb-2">Explore the Mystical Beauty of the North East and Bhutan</p>
            <h2 className="text-3xl font-bold text-gray-900">North East & Bhutan Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?q=80&w=2069&auto=format&fit=crop"
                  alt="Meghalaya"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-center">Meghalaya</h3>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=2069&auto=format&fit=crop"
                  alt="Darjeeling"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-center">Darjeeling</h3>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1623677375459-4302b76763c4?q=80&w=2070&auto=format&fit=crop"
                  alt="Bhutan"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-center">Bhutan</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelPackages;

