import React, { useState } from "react";
import { Link } from "react-router-dom";

const CarSelect = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleSelectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
  };
  return (
    <div className="flex mt-6 lg:w-1/2 lg:justify-end items-end lg:mt-4 lg:h-[550px] lg:-mb-16 mr-14">
    <div className="w-full max-w-md bg-white border-2 rounded-lg dark:bg-white px-2 pt-6">
      <h1 className="font-semibold mb-4 ml-5 text-lg">
        Which vehicle do you need?
      </h1>
      <div className="grid grid-cols-3 gap-4 mb-6 px-4">
        <button
          className={`w-[125px] h-[165px] pt-4 rounded-lg px-2 transition duration-500 ease-in-out text-center hover:bg-[#f04935] hover:text-white ${
            selectedVehicle === 1
              ? "bg-[#f04935] text-white"
              : "bg-[#F7F7F7]"
          }`}
          onClick={() => handleSelectVehicle(1)}
        >
          <img
            src="../../../public/images/s1.png"
            alt=""
            className="w-[60px] h-[60px] mx-auto"
          />
          <h5 className="font-semibold">Sedan Car</h5>
          <p className="text-sm">4 Seats capacity</p>
        </button>
        <button
          className={`w-[125px] h-[165px] pt-4 rounded-lg px-2 transition duration-500 ease-in-out text-center hover:bg-[#f04935] hover:text-white ${
            selectedVehicle === 2
              ? "bg-[#f04935] text-white"
              : "bg-[#F7F7F7]"
          }`}
          onClick={() => handleSelectVehicle(2)}
        >
          <img
            src="../../../public/images/s1.png"
            alt=""
            className="w-[60px] h-[60px] mx-auto"
          />
          <h5 className="font-semibold">Sedan Car</h5>
          <p className="text-sm">4 Seats capacity</p>
        </button>
        <button
          className={`w-[125px] h-[165px] pt-4 rounded-lg px-2 transition duration-500 ease-in-out text-center hover:bg-[#f04935] hover:text-white ${
            selectedVehicle === 3
              ? "bg-[#f04935] text-white"
              : "bg-[#F7F7F7]"
          }`}
          onClick={() => handleSelectVehicle(3)}
        >
          <img
            src="../../../public/images/s1.png"
            alt=""
            className="w-[60px] h-[60px] mx-auto"
          />
          <h5 className="font-semibold">Sedan Car</h5>
          <p className="text-sm">4 Seats capacity</p>
        </button>
        <button
          className={`w-[125px] h-[165px] pt-4 rounded-lg px-2 transition duration-500 ease-in-out text-center hover:bg-[#f04935] hover:text-white ${
            selectedVehicle === 4
              ? "bg-[#f04935] text-white"
              : "bg-[#F7F7F7]"
          }`}
          onClick={() => handleSelectVehicle(4)}
        >
          <img
            src="../../../public/images/s1.png"
            alt=""
            className="w-[60px] h-[60px] mx-auto"
          />
          <h5 className="font-semibold">Sedan Car</h5>
          <p className="text-sm">4 Seats capacity</p>
        </button>
        <button
          className={`w-[125px] h-[165px] pt-4 rounded-lg px-2 transition duration-500 ease-in-out text-center hover:bg-[#f04935] hover:text-white ${
            selectedVehicle === 5
              ? "bg-[#f04935] text-white"
              : "bg-[#F7F7F7]"
          }`}
          onClick={() => handleSelectVehicle(5)}
        >
          <img
            src="../../../public/images/s1.png"
            alt=""
            className="w-[60px] h-[60px] mx-auto"
          />
          <h5 className="font-semibold">Sedan Car</h5>
          <p className="text-sm">4 Seats capacity</p>
        </button>
      </div>

      <Link class="nav-link" to="/forms">
        <button className="bg-[#f04935] text-white rounded-full ml-9 my-4 py-3 mx-auto w-4/5 font-semibold">
          Request Trip
        </button>
      </Link>
    </div>
  </div>
  )
};

export default CarSelect;
