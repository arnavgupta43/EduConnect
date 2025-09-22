import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Contact <span className="text-blue-600">EduConnect</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you! Reach out to us for support,
            partnerships.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Email */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Email Us
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">General Inquiries:</p>
                <p className="text-blue-600 font-medium">info@educonnect.com</p>
                <p className="text-gray-600 mt-4">Support:</p>
                <p className="text-blue-600 font-medium">
                  support@educonnect.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Call Us
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">Main Office:</p>
                <p className="text-green-600 font-medium">+91 9144914512</p>
                <p className="text-gray-600 mt-4">Support Hotline:</p>
                <p className="text-green-600 font-medium">+91 99921992</p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Visit Us
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">Headquarters:</p>
                <p className="text-purple-600 font-medium">Kengeri</p>
                <p className="text-purple-600 font-medium">
                  Bengaluru, Karnataka
                </p>
                <p className="text-purple-600 font-medium">India</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Business Hours
              </h3>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="text-orange-600 font-medium">9AM - 6PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="text-orange-600 font-medium">
                    10AM - 4PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="text-orange-600 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Information */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Other Ways to Connect
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                For Partnerships
              </h3>
              <p className="text-gray-600 mb-2">partnerships@educonnect.com</p>
              <p className="text-gray-600">
                Let's explore collaboration opportunities
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Media Inquiries
              </h3>
              <p className="text-gray-600 mb-2">press@educonnect.com</p>
              <p className="text-gray-600">
                For journalists and media professionals
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Careers
              </h3>
              <p className="text-gray-600 mb-2">careers@educonnect.com</p>
              <p className="text-gray-600">Join our growing team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Notice */}
      <section className="py-12 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            We're Here to Help!
          </h3>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
