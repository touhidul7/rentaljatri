import React, { useEffect, useState } from "react";

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
        <div className="grid grid-cols-4 justify-between gap-20">
          {car.map((item, index) => {
            return (
              <div key={index} className="border shadow-lg p-4">
                <img src={item.img} alt="" className="w-full" />
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>{item.seat}</p>
                <button
                  onClick={() => modalHandler(item.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                >
                  More info
                </button>
                {/* modal--------- */}
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg">{findCar.name}</h3>
                    <p className="py-4">
                      <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                        <li class="flex items-center">
                          <svg
                            class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                          <b>Fuel Type : </b> {findCar.fuelType}
                        </li>
                        <li class="flex items-center">
                          <svg
                            class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                          <b>Sun Roof : </b> {findCar.sunroof ? "Yes" : "No"}
                        </li>
                        <li class="flex items-center">
                          <svg
                            class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                          <b>Wifi : </b> {findCar.sunroof ? "Yes" : "No"}
                        </li>
                        <li class="flex items-center">
                          <svg
                            class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                          <b>Car Condition : </b> {findCar.carCondition}
                        </li>
                        <li class="flex items-center">
                          <svg
                            class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                          <b>Driver Status : </b> {findCar.driverStatus}
                        </li>
                      </ul>
                    </p>
                  </div>
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
