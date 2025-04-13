import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { schoolInfo } from "../assets/constant";
const Footer = () => {
  // School information - replace with your actual data
  return (
    <footer id="footer" className="bg-gray-800 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">{schoolInfo.name}</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 mr-2 flex-shrink-0" />
                <span className=" capitalize">{schoolInfo.address}</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                <a
                  href={`tel:${schoolInfo.phone}`}
                  className="hover:text-blue-300"
                >
                  {schoolInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                <a
                  href={`tel:${schoolInfo.phone2}`}
                  className="hover:text-blue-300"
                >
                  {schoolInfo.phone1}
                </a>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                <a
                  href={`mailto:${schoolInfo.email}`}
                  className="hover:text-blue-300"
                >
                  {schoolInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="w-fit">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {schoolInfo.socialMedia.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                  aria-label={platform.name}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={platform.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          {/* Google Maps */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
           <div className="mt-2 rounded-lg overflow-hidden">
            <div className="w-48 h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.7927478368233!2d79.95428650944909!3d28.243969575778504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399f8645256860b9%3A0x256200925baa2dca!2sRMCP%20ACADEMY!5e0!3m2!1sen!2sin!4v1742659034585!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm">
          <p>
            © {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
