import React, { useState } from "react";
import SurveyorImg from "../assets/images/Mens/Surveyor.png";
import { useNavigate } from "react-router-dom";

function PlaceOrderForm() {
  // State to track quantity and total price
  const [quantity, setQuantity] = useState(2);
  const price = 3000;
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/payment", {
      state: { quantity, price, total: quantity * price },
    });
  };

  // Handlers for "+" and "-" buttons
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Prevent negative or zero quantity

  return (
    <div className="min-h-screen bg-gray-150 p-8 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-20 text-blue-900 text-center">
        Place Your Order...
      </h1>

      {/* Main Layout: Image on Left, Details on Right */}
      <div className="flex flex-row items-center justify-center space-x-8 w-full max-w-4xl">
        {/* Image Section */}
        <div className="flex-none">
          <img
            src={SurveyorImg}
            alt="Surveyor"
            className="w-80 h-80 object-cover rounded-md"
          />
        </div>

        {/* Order Details Section */}
        <div className="flex-1 p-6 bg-purple-100 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-medium">Item Name</span>
            <h2 className="text-2xl font-semibold text-gray-800">Surveyor</h2>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-medium">Price</span>
            <p className="text-xl text-gray-600 font-medium">RS. {price}/=</p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-medium">Quantity</span>
            <div className="flex items-center space-x-4">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md font-bold hover:bg-gray-400"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md font-bold hover:bg-gray-400"
              >
                +
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-medium">Total Price</span>
            <span className="text-lg font-semibold">
              RS. {quantity * price}/=
            </span>
          </div>

          {/* Order Button */}
          <button
            className="w-full mt-4 px-4 py-2 bg-purple-500 text-white text-lg font-semibold rounded-md hover:bg-purple-600"
            onClick={handleOrder}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrderForm;
