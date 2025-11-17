import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10 ">
      <div className=" flex flex-col  md:grid md:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <img className="mb-2 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quam autem exercitationem tenetur placeat nostrum quibusdam ullam
            quia suscipit quo a rerum voluptates cum adipisci reiciendis velit
            saepe, fuga debitis!
          </p>
        </div>
        {/* center section  */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 ">
            <li className="cursor-pointer" onClick={() => {navigate("/"); scrollTo(0,0)}}>Home</li>
            <li className="cursor-pointer" onClick={() =>{navigate("/about"); scrollTo(0,0)}}>About us</li>
            <li className="cursor-pointer" onClick={() => {navigate("/contact"); scrollTo(0,0)}}>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* right section */}
        <div className=" ">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-9082117390</li>
            <li>kumanache@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        {/* -----------------------copy right text------------ */}
        <hr />
        <p className="text-gray-600">
          CopyRight 2025 @sachin All Rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
