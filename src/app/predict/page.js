"use client";
import React, { useState } from "react";
import axios from "axios";
import { FiLoader } from "react-icons/fi"; // Importing spinner from React Icons
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

const Predict = () => {
  const [prediction, setPrediction] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileUri, setFileUri] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFileUri(URL.createObjectURL(file));
    setIsImageUploaded(true);
  };

  const handleSubmit = async () => {
    setLoading(true);

    const formData = new FormData();
    const blob = await fetch(fileUri).then((r) => r.blob());
    formData.append("image", blob, "image.jpg");

    try {
      const response = await axios.post(
        "https://13.127.20.168:4000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error predicting:", error);
      setPrediction("Error predicting. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <NavBar />
      <div className="container mx-auto flex-grow mt-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-white text-center">
          Predict Disease
        </h2>
        <p className="mb-4 text-center text-white">
          Upload an image of a cotton leaf below, and our machine learning model
          will predict if the leaf is healthy or affected by a disease.
        </p>
        <div className="flex items-center justify-center mb-4">
          <input
            type="file"
            accept="image/*"
            className="border border-gray-400 rounded-md p-2 mr-2"
            onChange={handleImageChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
            disabled={!isImageUploaded}
          >
            Predict
          </button>
        </div>
        {fileUri && (
          <div className="mt-4 text-center">
            <h3 className="text-lg text-white font-bold">Selected Image:</h3>
            <Image
              src={fileUri}
              alt="Selected Leaf"
              width={300}
              height={300}
              className="mt-2 rounded-lg mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>
        )}
        <div className="mt-4 text-center">
          {loading && (
            <FiLoader className="inline-block animate-spin text-blue-500 text-3xl" />
          )}{" "}
          {/* Using FiLoader as spinner */}
          {!loading && prediction && (
            <p className=" text-white font-bold">
              Disease Name : {prediction}{" "}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Predict;
