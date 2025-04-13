import React from "react";
import {
  Music,
  Speaker,
  Mic,
  VideoIcon,
  Gamepad2,
  Lightbulb,
  Users,
  Theater,
} from "lucide-react";
import aud1Img from "../../assets/img/aud_1.jpg";
import aud2Img from "../../assets/img/aud_2.jpg";
import aud3Img from "../../assets/img/aud_3.jpg";
import aud4Img from "../../assets/img/aud_4.jpg";
const Auditorium = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800">State-of-the-Art</span>
          <span className="text-sky-600"> Auditorium</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          A perfect venue for performances, events, and assemblies
        </p>
      </div>

      {/* Primary Content (60% - white background) */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center gap-3 mb-5">
          <Theater className="text-sky-700" size={28} />
          <h2 className="text-2xl font-semibold">World-Class Facilities</h2>
        </div>

        <p className="mb-6">
          Our auditorium is designed to provide the perfect environment for
          performances, presentations, and gatherings. With state-of-the-art
          technology and thoughtful design, it offers an exceptional experience
          for both performers and audience members.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <Users className="text-sky-600" size={24} />
              <h3 className="text-xl font-medium">Spacious Design</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Our spacious auditorium can comfortably accommodate large
              gatherings while maintaining excellent sightlines from every seat.
              The tiered seating arrangement ensures an unobstructed view of the
              stage from all angles.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Capacity for 500+ audience members</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Comfortable, ergonomic seating</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Wheelchair accessible facilities</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Expansive stage with professional wings</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <Speaker className="text-sky-600" size={24} />
              <h3 className="text-xl font-medium">Sound-Proof Environment</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Our auditorium features comprehensive soundproofing to create an
              optimal acoustic environment. This ensures performances are heard
              with perfect clarity while preventing outside noise from
              disrupting the experience.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Professional acoustic panels and baffles</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Double-layer sound isolation</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Noise reduction coefficient of 0.95+</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Sound-dampening floor materials</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="text-sky-600" size={24} />
              <h3 className="text-xl font-medium">High-Tech Systems</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Our auditorium is equipped with cutting-edge acoustic and lighting
              systems that can be customized for any type of performance or
              presentation, from dramatic productions to academic lectures.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Digital sound mixing console</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Programmable LED lighting system</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>High-definition projection system</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Wireless microphone infrastructure</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Secondary Content (30% - sky blue background) */}
      <section className="bg-sky-50 p-6 rounded-lg shadow-md mb-8 border border-sky-100">
        <h2 className="text-2xl font-semibold mb-4 text-sky-800">
          Technical Specifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-sky-800 mb-3 flex items-center gap-2">
              <Music className="text-sky-700" size={20} />
              Acoustic Features
            </h3>
            <ul className="space-y-2 text-sky-800">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sky-700 text-xs font-bold">•</span>
                </div>
                <p>
                  Dolby Atmos surround sound system with 32 strategically placed
                  speakers
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sky-700 text-xs font-bold">•</span>
                </div>
                <p>
                  Acoustic reverberation time adjustable between 1.0-2.2 seconds
                  for different performances
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sky-700 text-xs font-bold">•</span>
                </div>
                <p>
                  Professional-grade subwoofers with frequency response down to
                  20Hz
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sky-700 text-xs font-bold">•</span>
                </div>
                <p>Digital signal processing for real-time audio enhancement</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-sky-800 mb-3 flex items-center gap-2">
              <VideoIcon className="text-sky-700" size={20} />
              Lighting System
            </h3>
            <ul className="space-y-2 text-sky-800">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sky-700 text-xs font-bold">•</span>
                </div>
                <p>DMX-controlled LED lighting grid with over 100 fixtures</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sky-700 text-xs font-bold">•</span>
                </div>
                <p>Programmable scene settings with custom color profiles</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sky-700 text-xs font-bold">•</span>
                </div>
                <p>Moving head spotlights with automatic tracking capability</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sky-700 text-xs font-bold">•</span>
                </div>
                <p>
                  Environmentally friendly LED technology with minimal heat
                  output
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tertiary Content (10% - orange accent) */}
      <section className="bg-orange-50 p-6 rounded-lg shadow-md mb-8 border border-orange-100">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 flex items-center gap-2">
          <Mic className="text-orange-600" size={24} />
          Experience Our Auditorium
        </h2>
        <p className="text-orange-800 mb-6">
          Our auditorium hosts a variety of events throughout the academic year,
          from dramatic performances and musical concerts to guest lectures and
          graduation ceremonies. The versatile space adapts to any occasion
          while providing exceptional comfort and audio-visual excellence.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src={aud1Img}
            alt="Auditorium interior with stage lighting"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src={aud2Img}
            alt="Performance on stage with lighting effects"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src={aud3Img}
            alt="Auditorium seating with center aisle"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src={aud4Img}
            alt="Technical booth with sound and lighting controls"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
        </div>
      </section>
    </div>
  );
};

export default Auditorium;
