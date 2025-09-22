import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Users,
  Target,
  Award,
  Heart,
} from "lucide-react";

const AboutPage = () => {
  const [activePage, setActivePage] = useState("about");

  const AboutSection = () => (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">EduConnect</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between learners and educators through innovative
            technology, creating meaningful connections that transform the
            educational experience.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At EduConnect, our mission is to bridge the gap between
                educators and institutions through technology. We aim to empower
                administrators with seamless tools to manage faculty data,
                support academic excellence, and foster a connected, efficient
                educational ecosystem.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where educational management is not just
                efficient but empowering — enabling institutions to focus on
                what truly matters: teaching, learning, and innovation. Through
                EduConnect, we strive to simplify academic workflows and enhance
                visibility into faculty achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Empathy
              </h3>
              <p className="text-gray-600">
                We believe in building solutions that address real pain points
                of educators and administrators.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600">
                We work hand-in-hand with institutions, students, and developers
                to craft tools that serve everyone better
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for quality, reliability, and performance in every
                feature we deliver..
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Our Story
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              EduConnect was born from a simple need: managing faculty
              information shouldn’t be complex. What started as a college
              project quickly evolved into a full-fledged platform when we
              realized how many institutions were still relying on outdated
              systems and spreadsheets. With hands-on experience in building
              full-stack applications, and inspired by the real challenges faced
              in academic institutions, we designed EduConnect to be fast,
              flexible, and future-ready. From onboarding new faculty to
              managing profiles, research interests, and publications —
              everything is now just a few clicks away.
            </p>
          </div>
        </div>
      </section>
    </main>
  );

  const ContactSection = () => (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Contact <span className="text-blue-600">EduConnect</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you! Reach out to us for support,
            partnerships, or just to say hello.
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
                <p className="text-green-600 font-medium">+1 (555) 123-4567</p>
                <p className="text-gray-600 mt-4">Support Hotline:</p>
                <p className="text-green-600 font-medium">+1 (555) 765-4321</p>
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
                <p className="text-purple-600 font-medium">
                  123 Education Avenue
                </p>
                <p className="text-purple-600 font-medium">
                  Learning City, LC 12345
                </p>
                <p className="text-purple-600 font-medium">United States</p>
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
          <p className="text-blue-100 text-lg">
            We typically respond to all inquiries within 24 hours during
            business days. For urgent support issues, please call our support
            hotline for immediate assistance.
          </p>
        </div>
      </section>
    </main>
  );

  return (
    <div className="font-sans">
      {/* Page Content */}
      {activePage === "about" ? <AboutSection /> : <ContactSection />}
    </div>
  );
};

export default AboutPage;
