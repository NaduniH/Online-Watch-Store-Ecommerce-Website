import React, { useEffect, useState } from "react";
import "flowbite";
import { Carousel } from "flowbite";
import backgroundImage1 from "../assets/images/background1.jpg";
import backgroundImage2 from "../assets/images/background2.png";
import backgroundImage3 from "../assets/images/background3.jpg";
import backgroundImage4 from "../assets/images/background4.png";

function HomePage() {
  const [displayedText, setDisplayedText] = useState("");
  const slide1Text = "Welcome to Home Page..";

  useEffect(() => {
    let interval;
    const animateText = () => {
      let currentWordIndex = 0;
      setDisplayedText(""); // Reset text
      interval = setInterval(() => {
        if (currentWordIndex < slide1Text.length) {
          setDisplayedText((prev) => prev + slide1Text[currentWordIndex]);
          currentWordIndex++;
        } else {
          clearInterval(interval);
        }
      }, 200);
    };

    animateText();

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        animateText(); // Restart animation when the tab becomes visible
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative w-full mt-8"
      data-carousel="slide"
    >
      <div className="relative h-96 overflow-hidden rounded-lg md:h-[600px]">
        {/* Slide 1 */}
        <div className="block duration-700 ease-in-out" data-carousel-item>
          <img
            src={backgroundImage1}
            className="absolute block w-full h-full object-cover"
            alt="Slide 1"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-4xl md:text-6xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
              {displayedText}
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={backgroundImage2}
            className="absolute block w-full h-full object-cover"
            alt="Slide 2"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-4xl md:text-6xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
              "Experience innovation like never before!"
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={backgroundImage3}
            className="absolute block w-full h-full object-cover"
            alt="Slide 3"
          />
        </div>

        {/* Slide 4 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={backgroundImage4}
            className="absolute block w-full h-full object-cover"
            alt="Slide 4"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
