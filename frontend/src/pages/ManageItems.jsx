import React, { useState } from "react";

function ManageItemsPage() {
  const [items, setItems] = useState([
    {
      item_id: "U001",
      item_name: "Surveyor",
      price: "3000.00",
      category: "Mens",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="p-8 space-y-6 bg-blue-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
        Manage Items
      </h1>

      {/* Form Section */}
      <div className="space-y-4 flex flex-col items-center">
        <div className="grid grid-cols-2 gap-4 w-1/2">
          {/* Item ID */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="item_id"
              className="block text-lg font-medium text-gray-700"
            >
              Item ID
            </label>
            <input
              type="text"
              id="item_id"
              name="item_id"
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
              required
            />
          </div>

          {/* Item Name */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="item_name"
              className="block text-lg font-medium text-gray-700"
            >
              Item Name
            </label>
            <input
              type="text"
              id="item_name"
              name="item_name"
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
              required
            />
          </div>

          {/* Price */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="price"
              className="block text-lg font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
              required
            />
          </div>

          {/* Categories */}
<div className="flex flex-col items-center">
  <label
    htmlFor="categories"
    className="block text-lg font-medium text-gray-700"
  >
    Categories
  </label>
  <select
    id="categories"
    name="category"
    onChange={handleChange}
    className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
    required
  >
    <option value="" disabled selected>
      Select a category
    </option>
    <option value="Men">Men</option>
    <option value="Women">Women</option>
  </select>
</div>

        </div>

        {/* Add Button */}
        <div className="flex justify-end w-1/2">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>

      {/* Table Section */}
      <table className="min-w-full mt-8 border-collapse border border-gray-300">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-6 py-3 text-left text-lg font-medium">Item ID</th>
            <th className="px-6 py-3 text-left text-lg font-medium">
              Item Name
            </th>
            <th className="px-6 py-3 text-left text-lg font-medium">Price</th>
            <th className="px-6 py-3 text-left text-lg font-medium">
              Categories
            </th>
            <th className="px-6 py-3"></th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {items.map((item, index) => (
            <tr
              key={index}
              className="border-t border-gray-300 hover:bg-gray-100"
            >
              <td className="px-6 py-4">{item.item_id}</td>
              <td className="px-6 py-4">{item.item_name}</td>
              <td className="px-6 py-4">{item.price}</td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-700">
                  Update
                </button>
              </td>
              <td className="px-6 py-4">
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageItemsPage;
