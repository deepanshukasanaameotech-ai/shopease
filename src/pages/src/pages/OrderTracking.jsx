import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaBox, FaTruck, FaHouseChimney, FaCircleCheck, FaArrowLeft, FaFileDownload } from "react-icons/fa6";

export default function OrderTracking() {
  const { productKey } = useParams();
  const navigate = useNavigate();
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  const productTracking = {
    laptop: {
      title: "ASUS TUF Gaming F15",
      orderId: "#ZMJ82D9",
      trackingId: "23458039",
      expectedArrival: "01/05/2024",
      stages: [
        { status: "done", label: "Order Confirmed", icon: <FaCircleCheck />, date: "24 Apr, 2024 – 10:08 AM" },
        { status: "done", label: "Order Shipped", icon: <FaBox />, date: "25 Apr, 2024 – 3:45 PM" },
        { status: "done", label: "Out for Delivery", icon: <FaTruck />, date: "28 Apr, 2024 – 8:10 AM" },
        { status: "current", label: "Order Delivered", icon: <FaHouseChimney />, date: "—" },
      ],
    },
    book: {
      title: "Atomic Habits (Book)",
      orderId: "#PSK28QB",
      trackingId: "30941721",
      expectedArrival: "29/04/2024",
      stages: [
        { status: "done", label: "Order Confirmed", icon: <FaCircleCheck />, date: "22 Apr, 2024 – 1:15 PM" },
        { status: "current", label: "Order Shipped", icon: <FaBox />, date: "23 Apr, 2024 – 9:00 AM" },
        { status: "pending", label: "Out for Delivery", icon: <FaTruck />, date: "—" },
        { status: "pending", label: "Order Delivered", icon: <FaHouseChimney />, date: "—" },
      ],
    },
    headphone: {
      title: "Sony WH-CH510 Headphones",
      orderId: "#AB920LN",
      trackingId: "42761047",
      expectedArrival: "30/04/2024",
      stages: [
        { status: "done", label: "Order Confirmed", icon: <FaCircleCheck />, date: "20 Apr, 2024 – 12:26 PM" },
        { status: "done", label: "Order Shipped", icon: <FaBox />, date: "22 Apr, 2024 – 11:15 AM" },
        { status: "current", label: "Out for Delivery", icon: <FaTruck />, date: "23 Apr, 2024 – 8:05 AM" },
        { status: "pending", label: "Order Delivered", icon: <FaHouseChimney />, date: "23 Apr, 2024 – 1:32 PM" },
      ],
    },
  };

  const data = productTracking[productKey];

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl font-bold mb-4">Order Tracking</h2>
        <p className="text-red-600 font-semibold mb-6">
          Invalid or unknown product/order.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 pt-20`}>
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mt-6">
        <div className="flex justify-between items-center mb-4">
          <div className="font-semibold text-gray-800 dark:text-gray-200">
            Order ID: <span className="text-blue-600">{data.orderId}</span>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium">Expected Arrival:</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
            {data.expectedArrival}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium">Tracking ID:</span>
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs">
            {data.trackingId}
          </span>
        </div>

        <h3 className="mt-5 text-lg font-semibold">{data.title}</h3>

        {/* Progress timeline */}
        <div className="mt-6 pl-4 border-l-2 border-gray-300 dark:border-gray-600">
          {data.stages.map((s, i) => (
            <div key={i} className="relative mb-5 flex items-start">
              <div
                className={`flex items-center justify-center w-9 h-9 rounded-full mr-3 text-lg ${
                  s.status === "done"
                    ? "bg-yellow-300 text-yellow-900"
                    : s.status === "current"
                    ? "bg-blue-500 text-white animate-pulse"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-500"
                }`}
              >
                {s.icon}
              </div>
              <div>
                <div className="font-semibold">{s.label}</div>
                <div className="text-xs text-gray-500">{s.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded flex items-center gap-2">
            <FaFileDownload /> Invoice
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <FaArrowLeft /> Back
          </button>
        </div>
      </div>
    </div>
  );
}
