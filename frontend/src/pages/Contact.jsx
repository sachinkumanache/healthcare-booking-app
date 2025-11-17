import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-evenly  w-full mt-10">
          <img className="w-full md:max-w-[360px]" src={assets.contact_image} alt="" />
          <div className="flex flex-col justify-center items-start gap-6 text-sm text-gray-800">
            <p className="font-semibold text-lg text-gray-800"> OUR OFFICE</p>
            <p className="text-gray-600">
              A/203, Jankalyan CHS Match fcatory Lane <br /> Kurla West Mumbai
              400070
            </p>
            <p className="text-gray-600">
              mob:+91-9082117390 <br /> Email:kumanache@gmail.com
            </p>
            <p className="text-lg font-semibold">career at Prescripto</p>
            <p className="text-gray-600">Learn more about our teams and job openings</p>
            <button  className="hover:bg-black hover:text-white  transition-all duration-500 rounded-full py-4 px-8 border border-black text-sm ">Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
