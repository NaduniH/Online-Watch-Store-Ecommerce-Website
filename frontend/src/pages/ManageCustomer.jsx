import React, { useState, useEffect } from "react";
import axios from "axios";

function ManageCustomer() {
  const [customer, setCustomer] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null);     // To handle error state

  // Fetch customer data from backend
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/customer/getAllCustomer");
        setCustomer(response.data); // Assuming response.data is an array of customers
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch customer data.");
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

 



  if (loading) return <p>Loading customer data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-8 space-y-6 bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-900 text-center">
        Registered Customer Details
      </h1>
      <table className="min-w-full divide-y divide-gray-200 mt-8">
        <thead className="bg-gray-800">
          <tr>
            {/* <th className="px-6 py-3 text-left text-lg font-medium text-white tracking-wider">Customer Id</th> */}
            <th className="px-6 py-3 text-left text-lg font-medium text-white tracking-wider">Customer Name</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-white tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-white tracking-wider">Phone Number</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-white tracking-wider">Address</th>
            {/* <th className="px-6 py-3 text-left text-lg font-medium text-white tracking-wider">Actions</th> */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {customer.map((customer, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              {/* <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{customer.customerId}</td> */}
              <td className="px-6 py-4">{customer.name}</td>
              <td className="px-6 py-4">{customer.email}</td>
              <td className="px-6 py-4">{customer.phoneNo}</td>
              <td className="px-6 py-4">{customer.address}</td>
              {/* <td className="px-6 py-4">
                <button
                  onClick={() => handleUpdate(customer.customerId)}
                  className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(customer.customerId)}
                  className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded"
                >
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageCustomer;
