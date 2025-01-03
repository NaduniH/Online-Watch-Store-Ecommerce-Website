import RatPackImg from "../assets/images/Mens/Rat_Pack.png";
import summerWindImg from "../assets/images/Mens/Summer_Wind.png";
import surveyorImg from "../assets/images/Mens/Surveyor.png";
import Sutton1Img from "../assets/images/Mens/Sutton1.png";
import Sutton2Img from "../assets/images/Mens/Sutton2.png";
import Sutton3Img from "../assets/images/Mens/Sutton3.png";
import TheBestIsYetToComeImg from "../assets/images/Mens/The_Best_Is_Yet_To_Come.png";
import WiltonGMTImg from "../assets/images/Mens/Wilton_GMT.png";

import quadraImg from "../assets/images/Womens/Quadra.png";
import regatta1Img from "../assets/images/Womens/Regatta1.png";
import regatta2Img from "../assets/images/Womens/Regatta2.png";
import rubaiyat1Img from "../assets/images/Womens/Rubaiyat1.png";
import rubaiyat2Img from "../assets/images/Womens/Rubaiyat2.png";
import rubaiyat3Img from "../assets/images/Womens/Rubaiyat3.png";
import rubaiyat4Img from "../assets/images/Womens/Rubaiyat4.png";
import SurveyorImg from "../assets/images/Womens/Surveyor.png";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CategoriesPage() {
  const navigate = useNavigate();
  const [selectedWatch, setSelectedWatch] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [items, setItems] = useState([]);
  const [menWatches, setMenWatches] = useState([]);
  const [womenWatches, setWomenWatches] = useState([]);

  // const menWatches = [
  //   // { id: 1, name: "Rat Pack", price: "3000", img: RatPackImg },
  //   // { id: 2, name: "Summer Wind", price: "2000", img: summerWindImg },
  //   // { id: 3, name: "Surveyor", price: "4500", img: surveyorImg },
  //   // { id: 4, name: "Sutton1", price: "3800", img: Sutton1Img },
  //   // { id: 5, name: "Sutton2", price: "3500", img: Sutton2Img },
  //   // { id: 6, name: "Sutton3", price: "4200", img: Sutton3Img },
  //   // {
  //   //   id: 7,
  //   //   name: "The Best Is Yet To Come",
  //   //   price: "4000",
  //   //   img: TheBestIsYetToComeImg,
  //   // },
  //   // { id: 8, name: "Wilton GMT", price: "1900", img: WiltonGMTImg },
  // ];

  // const womenWatches = [
  //   // { id: 1, name: "Quadra", price: "2000", img: quadraImg },
  //   // { id: 2, name: "Regatta1", price: "1800", img: regatta1Img },
  //   // { id: 3, name: "Regatta2", price: "2500", img: regatta2Img },
  //   // { id: 4, name: "Rubaiyat1", price: "3400", img: rubaiyat1Img },
  //   // { id: 5, name: "Rubaiyat2", price: "2700", img: rubaiyat2Img },
  //   // { id: 6, name: "Rubaiyat3", price: "3800", img: rubaiyat3Img },
  //   // { id: 7, name: "Regatta4", price: "2500", img: rubaiyat4Img },
  //   // { id: 8, name: "SurveyorImg", price: "4000", img: SurveyorImg },
  // ];

  useEffect(() => {
    fetch("http://localhost:8080/item/getAllItems") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data
        setItems(data);
        setMenWatches(data.filter((item) => item.itemCategory === "MEN"));
        setWomenWatches(data.filter((item) => item.itemCategory === "WOMEN"));
      })
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  const [currentCategory, setCurrentCategory] = useState("MEN");

  const renderWatches = (watches) => {
    return watches.map((watch) => (
      <div
        key={watch.itemId}
        className="border rounded-lg p-4 flex flex-col items-center bg-purple-100 cursor-pointer"
        onClick={() => {
          setSelectedWatch(watch);
          setIsModalOpen(true);
        }}
      >
        <div className="w-full flex justify-start">
          <div
            className={`px-2 py-1 rounded ${
              watch.inStock ? "bg-green-500" : "bg-red-500"
            } text-white text-xs font-bold`}
          >
            {watch.inStock ? "In Stock" : "Out of Stock"}
          </div>
        </div>
        <img
          src={watch.img}
          alt={watch.itemDetail.itemUrl}
          className="w-29 h-29 mb-4"
        />
        <h3 className="text-lg font-semibold">{watch.itemDetail.itemName}</h3>
        <p className="text-lg font-semibold">
          RS. {watch.itemDetail.itemPrice}/=
        </p>
        <button
          className="mt-4 px-4 py-2 bg-purple-400 text-white rounded-lg hover:bg-purple-600"
          onClick={() => navigate("/placeOrderForm", { state: watch })}
          disabled={!watch.inStock}
        >
          Order Now
        </button>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-10 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-900">
        Watch Items
      </h1>
      <h1 className="text-3l font-bold text-left mb-6">
        Choose the Watch That Complements Your Style Perfectly...
      </h1>

      {/* Buttons in One Line */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setCurrentCategory("MEN")}
          className={`px-4 py-2 rounded-lg ${
            currentCategory === "MEN"
              ? "bg-purple-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Men's Watches
        </button>
        <button
          onClick={() => setCurrentCategory("WOMEN")}
          className={`px-4 py-2 rounded-lg ${
            currentCategory === "WOMEN"
              ? "bg-purple-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Women's Watches
        </button>
      </div>

      {/* Watch Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentCategory === "MEN"
          ? renderWatches(menWatches)
          : renderWatches(womenWatches)}
      </div>
    </div>
  );
}

export default CategoriesPage;
