import { Bus, MapPin, Clock } from "lucide-react";
import trans1Img from "../../assets/img/trans_1.jpg";
import trans2Img from "../../assets/img/trans_2.jpeg";
import trans3Img from "../../assets/img/trans_3.jpg";
const transportationData = [
  {
    id: 1,
    image: trans1Img, // Replace with actual bus image URL
    title: "Safe & Secure Buses",
    description: "Modern, GPS-enabled buses ensuring safe and timely travel for students."
  },
  {
    id: 2,
    image: trans2Img, // Replace with actual bus image URL
    title: "Wide Route Coverage",
    description: "Covers major city areas with multiple pickup and drop locations."
  },
  {
    id: 3,
    image: trans3Img, // Replace with actual bus image URL
    title: "Real-Time Tracking",
    description: "Live tracking for parents to monitor bus location and arrival times."
  }
];

export default function Transportation() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800"> Transportation </span>
          <span className="text-sky-600"> Facility</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          "Ensuring Safe and Reliable Journeys for Our Students."
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {transportationData.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-12 gap-10 text-sky-600">
        <div className="flex items-center gap-2">
          <Bus size={32} className="text-orange-400" />
          <span className="text-lg font-semibold">Modern Buses</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={32} className="text-orange-400" />
          <span className="text-lg font-semibold">Wide Coverage</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={32} className="text-orange-400" />
          <span className="text-lg font-semibold">On-Time Arrivals</span>
        </div>
      </div>
    </section>
  );
}
