import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { API } from "../../assets/constant";

// import images
import gallery1 from "../../assets/img/newEvent/gal (1).jpg";
import gallery2 from "../../assets/img/newEvent/gal (2).jpg";
import gallery3 from "../../assets/img/newEvent/gal (3).jpg";
import gallery4 from "../../assets/img/newEvent/gal (4).jpg";
import gallery5 from "../../assets/img/newEvent/gal (5).jpg";
import gallery6 from "../../assets/img/newEvent/gal (6).jpg";
import gallery7 from "../../assets/img/newEvent/gal (7).jpg";
import gallery8 from "../../assets/img/newEvent/gal (8).jpg";
import gallery9 from "../../assets/img/newEvent/gal (9).jpg";
import gallery10 from "../../assets/img/newEvent/gal (10).jpg";
import gallery11 from "../../assets/img/newEvent/gal (11).jpg";
import gallery12 from "../../assets/img/newEvent/gal (12).jpg";
import gallery13 from "../../assets/img/newEvent/gal (13).jpg";
import gallery14 from "../../assets/img/newEvent/gal (14).jpg";
import gallery15 from "../../assets/img/newEvent/gal (15).jpg";
import gallery16 from "../../assets/img/newEvent/gal (16).jpg";
import gallery17 from "../../assets/img/newEvent/gal (17).jpg";
import gallery18 from "../../assets/img/newEvent/gal (18).jpg";
import gallery19 from "../../assets/img/newEvent/gal (19).jpg";
import gallery20 from "../../assets/img/newEvent/gal (20).jpg";
import gallery21 from "../../assets/img/newEvent/gal (21).jpg";
import gallery22 from "../../assets/img/newEvent/gal (22).jpg";
import gallery23 from "../../assets/img/newEvent/gal (23).jpg";

const ImageGallery = () => {
  const [custGallery, setCustGallery] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGallery();
    setCustGallery([
      { id: 1, image: gallery1, title: "Academy Event", description: "" },
      { id: 2, image: gallery2, title: "Academy Event", description: "" },
      { id: 3, image: gallery3, title: "Academy Event", description: "" },
      { id: 4, image: gallery4, title: "Academy Event", description: "" },
      { id: 5, image: gallery5, title: "Academy Event", description: "" },
      { id: 6, image: gallery6, title: "Academy Event", description: "" },
      { id: 7, image: gallery7, title: "Academy Event", description: "" },
      { id: 8, image: gallery8, title: "Academy Event", description: "" },
      { id: 9, image: gallery9, title: "Academy Event", description: "" },
      { id: 10, image: gallery10, title: "Academy Event", description: "" },
      { id: 11, image: gallery11, title: "Academy Event", description: "" },
      { id: 12, image: gallery12, title: "Academy Event", description: "" },
      { id: 13, image: gallery13, title: "Academy Event", description: "" },
      { id: 14, image: gallery14, title: "Academy Event", description: "" },
      { id: 15, image: gallery15, title: "Academy Event", description: "" },
      { id: 16, image: gallery16, title: "Academy Event", description: "" },
      { id: 17, image: gallery17, title: "Academy Event", description: "" },
      { id: 18, image: gallery18, title: "Academy Event", description: "" },
      { id: 19, image: gallery19, title: "Academy Event", description: "" },
      { id: 20, image: gallery20, title: "Academy Event", description: "" },
      { id: 21, image: gallery21, title: "Academy Event", description: "" },
      { id: 22, image: gallery22, title: "Academy Event", description: "" },
      { id: 23, image: gallery23, title: "Academy Event", description: "" },
    ]);
    setLoading(false);
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await axios.get(`${API}/api/gallery`);
      if (response.status === 200) {
        setGallery(response.data);
      } else {
        throw new Error("Failed to load gallery");
      }
    } catch (err) {
      setError("Error fetching gallery images");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchItem = (id) => {
    try {
      axios.get(`${API}/api/gallery/${id}`).then((res) => {
        setSelectedImage(res.data);
      });
    } catch (err) {
      console.log(err);
      alert("An error occurred while fetching custGallery item details.");
    }
  };

  return (
    <div className="bg-white p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800"> Events </span>
          <span className="text-sky-600"> & Gallery</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          "Capturing Moments, Inspiring Futures."
        </p>
      </div>

      {loading && (
        <p className="text-center text-lg text-gray-700">Loading gallery...</p>
      )}
      {error && <p className="text-center text-lg text-red-600">{error}</p>}
      {/* Gallery Grid */}
      {!loading && (
        <div className="grid grid-cols-3 gap-4">
          {gallery &&
            gallery.map((image) => (
              <div
                key={image._id}
                className="relative group overflow-hidden cursor-pointer border border-gray-400 rounded-md shadow-md"
                onClick={() => fetchItem(image._id)}
              >
                <img
                  src={`${API}${image.image}`}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-all duration-300 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 text-center px-4">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          {custGallery &&
            custGallery.map((image) => (
              <div
                key={image._id}
                className="relative group overflow-hidden cursor-pointer border border-gray-400 rounded-md shadow-md"
                onClick={() => fetchItem(image._id)}
              >
                <img
                  // src={`${API}${image.image}`}
                  src={image.image}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-all duration-300 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 text-center px-4">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Image Details Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-white w-3/4 h-3/4 flex">
            {/* Image Section - 60% white space */}
            <div className="w-3/5 bg-white p-8 flex items-center justify-center">
              <img
                src={`${API}${selectedImage.image}`}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Details Section - 30% sky blue space */}
            <div className="w-2/5 bg-sky-100 p-8 relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-sky-600 hover:text-sky-800"
              >
                <X size={24} />
              </button>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-sky-800 mb-4">
                  {selectedImage.title}
                </h2>
                <p className="text-sky-700 mb-4">{selectedImage.description}</p>

                {/* Date Section - 10% orange space */}
                <div className="bg-orange-100 p-3 rounded-md mt-6">
                  <p className="text-orange-800 text-sm">
                    Posted on:{" "}
                    {new Date(selectedImage.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
