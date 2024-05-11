import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CarSelect from "../components/CarSelect";
import Carinfo from "../components/Carinfo";

const Rental = () => {
  return (
    <div>
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "Cover",
          backgroundPosition: " Center",
          height: "500px",
          backgroundImage:
            "linear-gradient(to bottom,rgba(0, 0, 0, 1.0), rgba(41, 216, 219, 0.8)), url('../../public/images/hero-car2.jpg')",
        }}
      >
        <div class="my-2">
          <div class="flex flex-col items-center text-start  lg:flex-row ml-20 mt-0">
            <div class="lg:w-1/2">
              <h3 class="mb-12 text-5xl text-white font-bold">
                Rental ready to go at <br />
                affordable prices
              </h3>

              <button className="bg-[#29D8DB] flex items-center gap-2 text-white rounded-full px-10 my-4 py-2 font-semibold ">
                Learn More{" "}
                <span class="material-symbols-outlined">arrow_downward</span>
              </button>
            </div>

            <CarSelect />
          </div>
        </div>
      </div>
      <div className="mt-24 mb-10 mx-12">
        <h1 className="mb-10 text-4xl font-bold">
          Rent a vehicle that fit your budget
        </h1>
        <div className="flex justify-between">
          <div className="w-[300px]">
            <img src="../../public/images/bujet1.png" alt="" />
            <h2 className="text-xl font-semibold">Enter your travel details</h2>
            <p>
              Enter your pickup, destination and trip details to place a trip
              request
            </p>
          </div>
          <div className="w-[300px]">
            <img src="../../public/images/bujet2.png" alt="" />
            <h2 className="text-xl font-semibold">Browse Through Bits</h2>
            <p>
              Enter your pickup, destination and trip details to place a trip
              request
            </p>
          </div>
          <div className="w-[300px]">
            <img src="../../public/images/bujet3.png" alt="" />
            <h2 className="text-xl font-semibold">Confirm Your Trip</h2>
            <p>
              Enter your pickup, destination and trip details to place a trip
              request
            </p>
          </div>
        </div>
      </div>

      {/* Rating section start */}
      <div className="bg-[#F4F4F4] grid grid-cols-2 md:grid-cols-4 mx-12 my-12 border rounded-3xl">
        <div className="w-[260px] text-center px-20 py-12">
          <p className="text-7xl font-bold">30+</p>
          <p className="">Districts</p>
        </div>
        <div className="w-[260px] text-center px-20 py-12">
          <p className="text-7xl font-bold">90K+</p>
          <p className="">Users</p>
        </div>
        <div className="w-[260px] text-center px-20 py-12">
          <p className="text-7xl font-bold">35K+</p>
          <p className="w-28">Rental Partners</p>
        </div>
        <div className="w-[260px] text-center px-20 py-12">
          <p className="text-7xl font-bold">50K+</p>
          <p className="w-36">Registered Vehicles</p>
        </div>
      </div>


      {/* car-info------ */}
      <Carinfo/>




      {/* Why choose jatri rentals */}
      <div className="mt-24 mb-10 mx-12">
        <h1 className="text-2xl mb-5">Why choose jatri rentals ?</h1>
        <div className="flex justify-start  py-10">
          <h1 className="text-3xl font-bold w-1/2">Easy and simple</h1>
          <p>
            Our services are designed to provide you a seamless rental booking
            experience
          </p>
        </div>
        <hr />
        <div className="flex justify-start py-10">
          <h1 className="text-3xl font-bold w-1/2">All of you needs covered</h1>
          <p className="">
            Traveling solor or with your extended family? We have multiple
            vehicle types of suit your needs!
          </p>
        </div>
        <hr />
        <div className="flex justify-start py-10 pr-4">
          <h1 className="text-3xl font-bold w-1/2">Pocket-friendly prices</h1>
          <p className="pl-2">
            Enjoy multiple bids from rental owners all over the city, in just a
            few minutes!
          </p>
        </div>
      </div>

      {/* Introducing a better way to travel for business*/}
      <div
        className="mx-12 mt-20 "
        style={{
          /*   backgroundImage:
            'url("https://rental.jatri.co/_nuxt/intro-desktop.f069a14d.png")',
          backgroundRepeat: "no-repeat",
          height: "345px", 
          backgroundSize: "cover",
          backgroundPosition:"Center",
          backgroundImage:
            "linear-gradient(to bottom,rgba(0, 0, 0, 1.0), rgba(41, 216, 219, 0.8)), url('../../public/images/hero-car2.jpg')", */

          backgroundRepeat: "no-repeat",
          backgroundSize: "Cover",
          backgroundPosition: " Center",
          height: "400px",
          backgroundImage:
            "linear-gradient(to bottom,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('../../public/images/hero-car.jpg')",
          borderRadius: "20px",
        }}
      >
        <div class="my-2 text-white ">
          <div class="flex flex-col items-center text-start  lg:flex-row ml-20">
            <div class="lg:w-1/2">
              <h3 class="text-5xl font-bold mt-16">
                Introducing a better way to travel for business
              </h3>
              <p className="py-8">
                Get in touch for a customized transport plan your company
              </p>
              <button className="bg-[#29D8DB] text-white rounded-full   py-3 px-16  font-semibold">
                Request Trip
              </button>
              {/*  <button className="bg-neutral-800 flex items-center gap-2 text-white rounded-full px-10 my-4 py-2 font-semibold ">
                Learn More{" "}
                <span class="material-symbols-outlined">north_east</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* FAQ section with accordion */}
      <div className="mt-24 mb-10 mx-12">
        <h1 className="text-4xl font-bold mb-5">Frequently asked questions</h1>
        <div className="collapse collapse-plus -ml-4 mb-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Why can't I see the fare before placing a trip request?
          </div>
          <div className="collapse-content">
            <p>
              Once you place a trip request, our partner will bid on your trip.
              You can sort throgh the bids to find the best car at a suitable
              price for your needs. This lets you receive multiple prices at
              once with the flexibility and freedom to choose.
            </p>
          </div>
        </div>
        <hr />
        <div className="collapse collapse-plus -ml-4 mb-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How long should I wait for the bidding process?
          </div>
          <div className="collapse-content">
            <p>We rocommened waiting up to 90 minutes to complete bidding.</p>
          </div>
        </div>
        <hr />
        <div className="collapse collapse-plus -ml-4 mb-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            When can I cancel my trip?
          </div>
          <div className="collapse-content">
            <p>You can cancel your trip until 2 hours before the trip time.</p>
          </div>
        </div>
        <hr />

        <div className="collapse collapse-plus -ml-4 mb-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How can I cancel my confirmed trip?
          </div>
          <div className="collapse-content">
            <p>
              Please call our customers service at 09642080808 to cancel your
              confirmed trip.
            </p>
          </div>
        </div>
        <hr />

        <div className="collapse collapse-plus -ml-4 mb-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Are there any hidden charges?
          </div>
          <div className="collapse-content">
            <p>
              You only have to pay the bidding price shown in the app. We don't
              have any additional charges.
            </p>
          </div>
        </div>
      </div>
      {/* Join section */}
      <div className="mt-16">
        <div
          style={{

          backgroundRepeat: "no-repeat",
          backgroundSize: "Cover",
          backgroundPosition: " Center",
          height: "300px",
          backgroundImage:
            "linear-gradient(to bottom,rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1.0)), url('../../public/images/hero-car2.jpg')", 


          }}
        >
          <div>
            <div className="flex justify-evenly text-start items-center">
              <div class="lg:w-1/2 mt-14">
                <h3 class="text-4xl font-bold text-white">
                  Introducing a better way to travel for business
                </h3>
                <p className="w-1/2 py-2 text-white">
                  Take your rental business to the next level with the lowest
                  commission in the market
                </p>
              </div>
              <div>
              <button className="bg-[#29D8DB] text-white rounded-full   py-3 px-16  font-semibold">
                Request Trip
              </button>
               {/*  <button className="bg-white flex gap-2 text-neutral-500 rounded-full px-6 my-4 py-2 font-semibold mt-10">
                  Sign up as partner{" "}
                  <span class="material-symbols-outlined">north_east</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default Rental;
