import React from "react";
import cardImage from "../assets/images/Card.png"; // Update the path to your image

function CardPaymentForm() {
    return (
        <section className="min-h-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center">
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
                <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-full max-w-md">
                    {/* Heading */}
                    <h1 className="text-3xl font-semibold text-blue-900 text-center">
                        Card Payment Details
                    </h1>

                    {/* Card Image */}
                    <div className="flex justify-center">
                        <img
                            src={cardImage}
                            alt="Bank Card"
                            className="w-70 h-auto object-contain"
                        />
                    </div>

                    {/* Form Section */}
                    <form>
                        {/* Card Number */}
                        <div className="mb-4">
                            <label
                                htmlFor="cardNumber"
                                className="block text-gray-700 font-medium mb-1"
                            >
                                Card Number
                            </label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                placeholder="XXXX XXXX XXXX XXXX"
                                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
                                required
                            />
                        </div>

                        {/* EXP and CVV */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            {/* EXP */}
                            <div>
                                <label
                                    htmlFor="exp"
                                    className="block text-gray-700 font-medium mb-1"
                                >
                                    EXP
                                </label>
                                <input
                                    type="password"
                                    id="exp"
                                    name="exp"
                                    placeholder="XX/XX"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
                                    required
                                />
                            </div>

                            {/* CVV */}
                            <div>
                                <label
                                    htmlFor="cvv"
                                    className="block text-gray-700 font-medium mb-1"
                                >
                                    CVV
                                </label>
                                <input
                                    type="password"
                                    id="cvv"
                                    name="cvv"
                                    placeholder="XXX"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
                                    required
                                />
                            </div>
                        </div>

                        {/* Total Amount */}
                        <div className="flex justify-center items-center mb-6">
                            <span className="text-gray-700 font-medium">Total Amount : </span>
                            <span className="text-lg font-semibold text-gray-900">
                                RS. 6000.00
                            </span>
                        </div>

                        {/* Pay Button */}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-green-400 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                        >
                            Pay RS. 6000.00
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default CardPaymentForm;
