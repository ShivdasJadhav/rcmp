import { ShieldCheck, IdCard, Camera, AlarmCheck } from "lucide-react";

import security1Img from "../../assets/img/security_1.webp";
import security2Img from "../../assets/img/security_2.jpeg";
import security3Img from "../../assets/img/security_3.jpg";

const securityImages = [
  security1Img, security2Img, security3Img // Replace with actual security image URL
];

export default function Security() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800"> Security </span>
          <span className="text-sky-600"> & Safety</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          "Ensuring a safe and secure environment for students, staff, and visitors."
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2">
          <ShieldCheck size={32} className="text-orange-400" />
          <span className="text-lg font-semibold">Security Guards Deployed</span>
        </div>
        <div className="flex items-center gap-2">
          <IdCard size={32} className="text-orange-400" />
          <span className="text-lg font-semibold">ID Cards for All</span>
        </div>
        <div className="flex items-center gap-2">
          <Camera size={32} className="text-orange-400" />
          <span className="text-lg font-semibold">CCTV Surveillance</span>
        </div>
        <div className="flex items-center gap-2">
          <AlarmCheck size={32} className="text-orange-400" />
          <span className="text-lg font-semibold">Fire Safety Systems</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 px-4">
        {securityImages.map((image, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <img src={image} alt={`Security View ${index + 1}`} className="w-full h-56 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}