import React, { useState } from "react";

function ManageItemsPage() {
  

  const [form, setForm] = useState({
    itemCode: "",
    itemName: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure form validation passes before sending the request
    if (validateForm()) {
      // Create the product object matching the backend structure
      const item = {
        itemCode: form.itemCode,
        itemCategory: form.category,
        inStock: true, // Hardcoded, can be replaced with form input if needed
        isVisible: true, // Hardcoded, can be replaced with form input if needed
        quantity: "100",
        entUser: "admin", // Hardcoded, can be replaced with logged-in user
        entDate: new Date().toISOString(), // Auto-generate current date
        itemDetail: {
          itemName: form.itemName, // Assuming `itemName` is a state variable for item name
          itemPrice: form.price, // Assuming `price` is a state variable for item price
          itemDescription: "description", // Assuming `description` is a state variable
          itemImgUrl: "imageUrl",
        },
      };

      // Send the POST request to the backend
      fetch("http://localhost:8080/item/addItem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      })
        .then((response) => {
          if (response.ok) {
            alert("Product Successfully Added!");
            // Clear form fields and reset state
            // setItemCode("");
            // setItemCategory("");
            // setQuantity("");
            // setImageUrl("");
            // setPrice("");
            // setDescription("");
            // setErrors({});
          } else {
            alert("Failed to add product. Please try again.");
          }
        })
        .catch((error) => {
          alert("Error: " + error.message);
        });
    }
  };

  return (
    <div className="p-8 space-y-6 bg-blue-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
        Manage Items
      </h1>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col items-center"
      >
        <div className="grid grid-cols-2 gap-4 w-1/2">
          {/* Item Code */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="itemCode"
              className="block text-lg font-medium text-gray-700"
            >
              Item Code
            </label>
            <input
              type="text"
              id="itemCode"
              name="itemCode"
              value={form.itemCode}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
              required
            />
          </div>

          {/* Item Name */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="itemName"
              className="block text-lg font-medium text-gray-700"
            >
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={form.itemName}
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
              value={form.price}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
              required
            />
          </div>

          {/* Categories */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="category"
              className="block text-lg font-medium text-gray-700"
            >
              Categories
            </label>
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
              required
            >
              <option value="" disabled>
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
      </form>

      {/* Table Section */}
      <table className="min-w-full mt-8 border-collapse border border-gray-300">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-6 py-3 text-left text-lg font-medium">
              Item Code
            </th>
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
          {/* {items.map((item, index) => (
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
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default ManageItemsPage;
