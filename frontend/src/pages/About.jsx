import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div>
        <p className="text-center text-2xl pt-10 text-gray-500">
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm">
          <p>
            Welcome to Prescripto. We help you manage your healthcare needs in a
            simple and convenient way. We know how stressful it can be to book
            doctor appointments or keep track of medical records, so we designed
            Prescripto to make that process easier.
          </p>
          <p>
            We’re committed to building reliable healthcare technology. Our team
            is always improving the platform with new features and better tools.
            Whether you’re booking your first appointment or managing long-term
            care, we’re here to support you.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision is to create a smooth and connected healthcare experience
            for everyone. We want to make it easier for patients and healthcare
            providers to connect, so you get the care you need when you need it.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
        <div className="flex flex-col md:flex-row mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <b>Efficiency:</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <b>Convenience:</b>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <b>Personalization:</b>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
