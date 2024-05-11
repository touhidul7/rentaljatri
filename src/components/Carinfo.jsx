import React, { useEffect, useState } from "react";
import CarInfoModal from "./CarInfoModal";

const Carinfo = () => {
  const [car, setCar] = useState([]);
  const [findCar, setFindCar] = useState({});
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  /* Modal Handler */
  const modalHandler = (id) => {
    document.getElementById("my_modal_3").showModal();
    const findData = car.find((item) => item.id == id);
    setFindCar(findData);
  };
  return (
    <div>
      <div className="mt-24 mb-10 mx-12">
        <h1 className="mb-10 text-4xl font-bold">
          Rent a vehicle that fit your budget
        </h1>
        <div className="grid grid-cols-6 justify-between gap-5">
          {car.map((item, index) => {
            return (
              <div key={index} className="border shadow-lg p-4 text-center">
                <img
                  src={item.img}
                  alt=""
                  className=""
                  style={{ width: "200px",margin:'auto' }}
                />
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>{item.seat}</p>
                <button
                  onClick={() => modalHandler(item.id)}
                  className="bg-[#29D8DB] hover:bg-[#29D8DB] text-white font-bold py-2 px-4 rounded mt-2"
                >
                  More info
                </button>
                {/* modal--------- */}
                <dialog id="my_modal_3" className="modal">
                  <CarInfoModal findCar={findCar} />
                </dialog>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carinfo;
