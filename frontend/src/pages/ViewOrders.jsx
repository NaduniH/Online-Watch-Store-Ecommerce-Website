import React, { useState } from "react";

function ViewOrdersPage() {
  const [items, setItems] = useState([
    {
      userId: "1",
      itemId: "101",
      userName: "John Doe",
      itemName: "Watch A",
      qty: 2,
      price: "Rs.3000.00",
    },
    {
      userId: "2",
      itemId: "102",
      userName: "Jane Smith",
      itemName: "Watch B",
      qty: 1,
      price: "RS.3800.00",
    },
  ]);

  return (
    <div className="p-8 space-y-6 bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-900 text-center">
        View Orders
      </h1>
      <table className="min-w-full divide-y divide-gray-200 mt-8">
        <thead className="bg-gray-800">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-lg font-medium text-white tracking-wider"
            >
              User ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-lg font-medium text-white tracking-wider"
            >
              Item ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-lg font-medium text-white tracking-wider"
            >
              User Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-lg font-medium text-white tracking-wider"
            >
              Item Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-lg font-medium text-white tracking-wider"
            >
              QTY
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-lg font-medium text-white tracking-wider"
            >
              Price
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.userId}
              </td>
              <td className="px-6 py-4">{item.itemId}</td>
              <td className="px-6 py-4">{item.userName}</td>
              <td className="px-6 py-4">{item.itemName}</td>
              <td className="px-6 py-4">{item.qty}</td>
              <td className="px-6 py-4">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewOrdersPage;
