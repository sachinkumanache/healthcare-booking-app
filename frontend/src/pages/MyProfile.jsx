import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    img: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "line1" || name === "line2") {
      setUserData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
      return;
    }

    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const saveChanges = () => setIsEdit(false);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg">
      
      {/* Profile Photo */}
      <div className="flex flex-col items-center">
        <img
          src={userData.img}
          alt="Profile"
          className="w-32 h-32 rounded-md object-cover shadow-sm mb-4"
        />
      </div>

      {/* Name */}
      <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
        {userData.name}
      </h2>

      {/* CONTACT INFORMATION */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-700 tracking-wider mb-2">
          CONTACT INFORMATION
        </h3>
        <div className="w-full h-px bg-gray-300 mb-4"></div>

        {!isEdit ? (
          <>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Email id: </span>
              {userData.email}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Phone: </span>
              {userData.phone}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Address: </span>
              {userData.address.line1}, {userData.address.line2}
            </p>
          </>
        ) : (
          <div className="space-y-3">
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="line1"
              value={userData.address.line1}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="line2"
              value={userData.address.line2}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        )}
      </div>

      {/* BASIC INFORMATION */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-700 tracking-wider mb-2">
          BASIC INFORMATION
        </h3>
        <div className="w-full h-px bg-gray-300 mb-4"></div>

        {!isEdit ? (
          <>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Gender: </span>
              {userData.gender}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Birthday: </span>
              {userData.dob}
            </p>
          </>
        ) : (
          <div className="space-y-3">
            <select
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="date"
              name="dob"
              value={userData.dob}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        )}
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center mt-6">
        {!isEdit ? (
          <button
            onClick={() => setIsEdit(true)}
            className="px-8 py-2 rounded-full border border-gray-400 hover:bg-gray-100"
          >
            Edit
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={saveChanges}
              className="px-8 py-2 bg-blue-600 text-white rounded-full"
            >
              Save
            </button>
            <button
              onClick={() => setIsEdit(false)}
              className="px-8 py-2 bg-gray-200 text-gray-800 rounded-full"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
