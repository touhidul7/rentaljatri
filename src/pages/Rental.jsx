import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarSelect from "../components/CarSelect";

const Rental = () => {
  
  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("https://i.postimg.cc/jSFLHnJ2/hero-car.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "Cover",
          height: "500px", // Adjust the height as needed
        }}
      >
        <div class="my-2">
          <div class="flex flex-col items-center text-start  lg:flex-row ml-20 mt-0">
            <div class="lg:w-1/2">
              <h3 class="mb-12 text-5xl text-white font-bold">
                Rental ready to go at <br />
                affordable prices
              </h3>

              <button className="bg-[#f04935] flex items-center gap-2 text-white rounded-full px-10 my-4 py-2 font-semibold ">
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
            <img src="../../public/images/location.5aa5a8ed.svg" alt="" />
            <h2 className="text-xl font-semibold">Enter your travel details</h2>
            <p>
              Enter your pickup, destination and trip details to place a trip
              request
            </p>
          </div>
          <div className="w-[300px]">
            <img src="../../public/images/location.5aa5a8ed.svg" alt="" />
            <h2 className="text-xl font-semibold">Enter your travel details</h2>
            <p>
              Enter your pickup, destination and trip details to place a trip
              request
            </p>
          </div>
          <div className="w-[300px]">
            <img src="../../public/images/location.5aa5a8ed.svg" alt="" />
            <h2 className="text-xl font-semibold">Enter your travel details</h2>
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
      {/* Why choose jatri rentals */}
      <div className="mt-24 mb-10 mx-12">
        <h1 className="text-2xl mb-5">Why choose jatri rentals</h1>
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
          <p className="pl-10">
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
      {/* What users say about us */}
      <div className="bg-[#F04935] bg-opacity-[6%] px-24 mb-10 pb-10">
        <div className="py-10 pb-10">
          <p className="text-2xl">What users say about us</p>
        </div>
        <hr />
        <div className="flex flex-between py-10">
          <p className="text-2xl w-4/5 font-semibold">
            My company uses Jatri Business to plan our office pick-and-drop and
            corporate getaways. The service is seamless and quick- just the
            solution we needed for our company
          </p>
          <div className="pl-32">
            <p className="text-2xl font-bold">Al Imran</p>
            <p className="pl-8">Jatri user</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-end gap-16 py-10">
          <img
            className="rounded-full"
            src="../../public/images/jatri-user1.png"
            alt=""
          />
          <img
            className="rounded-full"
            src="../../public/images/jatri-user2.png"
            alt=""
          />
          <img
            className="rounded-full"
            src="../../public/images/jatri-user3.png"
            alt=""
          />
          <img
            className="rounded-full"
            src="../../public/images/jatri-user4.png"
            alt=""
          />
        </div>
      </div>
      {/* Introducing a better way to travel for business*/}
      <div
        className="mx-12 mt-20"
        style={{
          backgroundImage:
            'url("https://rental.jatri.co/_nuxt/intro-desktop.f069a14d.png")',
          backgroundRepeat: "no-repeat",
          height: "345px", // Adjust the height as needed
        }}
      >
        <div class="my-2">
          <div class="flex flex-col items-center text-start  lg:flex-row ml-20">
            <div class="lg:w-1/2">
              <h3 class="text-5xl font-bold mt-16 text-black">
                Introducing a better way to travel for business
              </h3>
              <p className="py-8">
                Get in touch for a customized transport plan your company
              </p>
              <button className="bg-neutral-800 flex items-center gap-2 text-white rounded-full px-10 my-4 py-2 font-semibold ">
                Learn More{" "}
                <span class="material-symbols-outlined">north_east</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ section with accordion */}
      <div className="mt-24 mb-10 mx-12">
        <h1 className="text-2xl font-bold">Frequently asked questions</h1>
        <div className="collapse collapse-plus -ml-4">
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
        <div className="collapse collapse-plus -ml-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How long should I wait for the bidding process?
          </div>
          <div className="collapse-content">
            <p>We rocommened waiting up to 90 minutes to complete bidding.</p>
          </div>
        </div>
        <div className="collapse collapse-plus -ml-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            When can I cancel my trip?
          </div>
          <div className="collapse-content">
            <p>You can cancel your trip until 2 hours before the trip time.</p>
          </div>
        </div>
        <div className="collapse collapse-plus -ml-4">
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
        <div className="collapse collapse-plus -ml-4">
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
            backgroundImage:
              'url("https://rental.jatri.co/_nuxt/rental_update.db992fca.png")',
            backgroundRepeat: "no-repeat",
            height: "250px",
            backgroundSize: "Cover", // Adjust the height as needed
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
                <button className="bg-white flex gap-2 text-neutral-500 rounded-full px-6 my-4 py-2 font-semibold mt-10">
                  Sign up as partner{" "}
                  <span class="material-symbols-outlined">north_east</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <div style={{
                    backgroundImage: 'url("https://rental.jatri.co/_nuxt/rental_update.db992fca.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'Cover',height: '345px' // Adjust the height as needed
                    }}> 
                    </div>*/}
          <img
            src="../../public/images/footer-img.a9a8541a.png"
            alt=""
            className="bg-red-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Rental;
