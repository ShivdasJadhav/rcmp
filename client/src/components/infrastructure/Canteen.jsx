import { Utensils, Store, Clock } from "lucide-react";

import canteen1Img from "../../assets/img/canteen_1.jpeg";
import canteen2Img from "../../assets/img/canteen_2.jpeg";
import canteen3Img from "../../assets/img/canteen_3.jpeg";

const canteenImages = [
  canteen1Img, canteen2Img, canteen3Img  // Replace with actual canteen image URL
];

export default function Canteen() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800"> Canteen </span>
          <span className="text-sky-600"> Facility</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          "A neat, hygienic, and well-stocked canteen open during school hours."
        </p>
      </div>
      
      <div className="flex justify-center gap-10 text-sky-600">
        <div className="flex items-center gap-2">
          <Utensils size={32} className="text-orange-400" />
          <span className="text-lg font-semibold">Hygienic Food</span>
        </div>
        <div className="flex items-center gap-2">
          <Store size={32} className="text-orange-400" />
          <span className="text-lg font-semibold">Well Stocked</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={32} className="text-orange-400" />
          <span className="text-lg font-semibold">Open School Hours</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 px-4">
        {canteenImages.map((image, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <img src={image} alt={`Canteen View ${index + 1}`} className="w-full h-56 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
