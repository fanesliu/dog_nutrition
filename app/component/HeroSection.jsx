import React from "react";
import Image from "next/image";
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./Footer";

const HeroSection = () => {
  return (
    <div>
      <Navbar /> {/* Add the Navbar component */}
      <section className="relative bg-white py-0">
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center lg:justify-between relative">
          <header
            className="lg:w-full h-full flex items-start bg-cover bg-center pt-14"
            style={{
              backgroundImage: "url('/images/background-shape.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "1000px",
              backgroundPosition: "center",
              objectFit: "cover",
            }}
          >
            <div className="text-center lg:text-left lg:w-full pt-6 pl-20 text-container">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Unleash Tail-Wagging Nutrition: Fresh, Customized Meals For Your
                Dog
              </h1>
              <p className="text-base text-gray-600 mb-6">
                Worried About Your Dog's Diet? Wondering How Much They Really Need
                To Eat? We Make It Simple! Calculate Your Dog's Daily Calorie
                Needs And Let Our Cutting-Edge AI Create Delicious, Personalized
                Fresh Food Recipes Using Only Dog-Approved Ingredients. No More
                Guessing, Just Healthy, Happy Meals For Your Furry Friend!
              </p>
              <button className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300">
                Get Started
              </button>
            </div>

            <div className=" col-span-5  place-self-center mt-4 lg:mt-0">
              <div className="h-[550px] lg:h-[500px] w-auto relative flex justify-items-center items-center">
                <img
                  src="/images/food.png"
                  alt="food image"
                  className="flex-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-8"
                  style={{
                    margin: "180px 0px 50px 20px",
                    marginLeft: "250px",
                    marginTop: "700px"
                  }}
                  width={2030}
                  height={1800}
                />
              
              </div>
            </div>
          </header>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;