import React, { useState, useEffect } from "react";

function ManageItemsPage() {
  const [form, setForm] = useState({
    itemCode: "",
    itemName: "",
    price: "",
    quantity: "",
    category: "",
    imageUrl: "",
    description: "",
  });

  const [items, setItems] = useState([]); // State to store table data

  // Fetch data from the backend
  useEffect(() => {
    fetch("http://localhost:8080/item/getAllItems") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data
        setItems(data);
      })
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const filePath = file.name; // Get the file name
      setForm({
        ...form,
        imageUrl: filePath,
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    // Add any required validation logic here
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newItem = {
        itemCode: form.itemCode,
        quantity: form.quantity,
        itemCategory: form.category,
        inStock: true,
        isVisible: true,
        entUser: "admin",
        entDate: new Date().toISOString(),

        itemDetail: {
          itemName: form.itemName,
          itemPrice: form.price,
          itemImgUrl: form.imageUrl,
          itemDescription: form.description,
        },
      };

      // Send the data to the backend
      fetch("http://localhost:8080/item/addItem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      })
        .then((response) => {
          if (response.ok) {
            console.log("New Item:", newItem);
            alert("Item added successfully!");

            // Add the new item to the table
            //setItems((prevItems) => [...prevItems, newItem]);

            // Reset the form fields
            setForm({
              itemCode: "",
              itemName: "",
              price: "",
              quantity: "",
              category: "",
              imageUrl: "",
              description: "",
            });
          } else {
            alert("Failed to add item. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error adding item:", error);
          alert("Error: Unable to add item.");
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
        <div className="grid grid-cols-2 gap-10 w-4/5">
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

          {/* Quantity */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="quantity"
              className="block text-lg font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={form.quantity}
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
              <option value="MEN">Men</option>
              <option value="WOMEN">Women</option>
            </select>
          </div>

          {/* Image URL */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="imageFile"
              className="block text-lg font-medium text-gray-700"
            >
              Select Image URL
            </label>
            <input
              type="file"
              id="imageFile"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col items-center col-span-3">
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
              rows="4"
              required
            ></textarea>
          </div>
        </div>

        {/* Add Button */}
        <div className="flex justify-end w-4/5 gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Add
          </button>

          <button
            type="submit"
            className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700"
          >
            Update
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700"
          >
            Delete
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
              Quantity
            </th>
            <th className="px-6 py-3 text-left text-lg font-medium">
              Category
            </th>
            <th className="px-6 py-3 text-left text-lg font-medium">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {items.map((item, index) => (
            <tr
              key={index}
              className="border-t border-gray-300 hover:bg-gray-100"
            >
              <td className="px-6 py-4">{item.itemCode}</td>
              <td className="px-6 py-4">{item.itemDetail.itemName}</td>
              <td className="px-6 py-4">{item.itemDetail.itemPrice}</td>
              <td className="px-6 py-4">{item.quantity}</td>
              <td className="px-6 py-4">{item.itemCategory}</td>
              <td className="px-6 py-4">{item.itemDetail.itemDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageItemsPage;
