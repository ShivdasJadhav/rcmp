import { Stethoscope, UserCheck, Ambulance } from "lucide-react";

import clinic1Img from "../../assets/img/clinic_1.jpeg";
import clinic2Img from "../../assets/img/clinic_2.jpeg";
import clinic3Img from "../../assets/img/clinic_3.jpeg";

const clinicImages = [clinic1Img, clinic2Img, clinic3Img];

export default function HealthClinic() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800"> Health </span>
          <span className="text-sky-600"> & Clinic</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          "A spacious, well-lit, air-conditioned health clinic with qualified
          professionals ensuring student well-being."
        </p>
      </div>

      <div className="flex justify-center gap-10 text-sky-600">
        <div className="flex items-center gap-2">
          <Stethoscope size={32} className="text-orange-400" />
          <span className="text-lg font-semibold">Qualified Doctor</span>
        </div>
        <div className="flex items-center gap-2">
          <UserCheck size={32} className="text-orange-400" />
          <span className="text-lg font-semibold">Senior Nursing Officer</span>
        </div>
        <div className="flex items-center gap-2">
          <Ambulance size={32} className="text-orange-400" />
          <span className="text-lg font-semibold">Emergency Ambulance</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 px-4">
        {clinicImages.map((image, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            <img
              src={image}
              alt={`Clinic View ${index + 1}`}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
