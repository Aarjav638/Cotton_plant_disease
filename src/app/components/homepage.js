import React from "react";
import Image from "next/image";
import Aphidis from "../../../public/Images/Aphidis.jpg";
import ArmyWorm from "../../../public/Images/ArmyWorm.jpg";
import Bacterial from "../../../public/Images/Bacterial.jpg";
import Healthy from "../../../public/Images/Healthy.jpg";
import Powdery from "../../../public/Images/Powdery.jpg";
import targetSpot from "../../../public/Images/targetSpot.jpg";

export default function HomePage() {
  const diseaseData = [
    {
      image: Aphidis,
      alt: "Aphidis Disease",
      description:
        "Aphidis disease, also known as powdery mildew, is a fungal infection that commonly affects cotton plants, resulting in white powdery spots on the leaves, stems, and buds.",
    },
    {
      image: ArmyWorm,
      alt: "Armyworm Damage",
      description:
        "Armyworm damage is caused by the larvae of armyworm moths, which feed on cotton leaves, leading to irregular holes and skeletonized foliage. Severe infestations can significantly reduce crop yield.",
    },
    {
      image: Bacterial,
      alt: "Bacterial Blight",
      description:
        "Bacterial blight is a bacterial infection that affects cotton plants, causing water-soaked lesions on leaves and stems. It can lead to defoliation and yield loss if not controlled.",
    },
    {
      image: Healthy,
      alt: "Healthy Cotton Leaves",
      description:
        "Healthy cotton leaves are characterized by vibrant green coloration and absence of spots, lesions, or deformities. They contribute to optimal photosynthesis and overall plant vigor.",
    },
    {
      image: Powdery,
      alt: "Powdery Mildew",
      description:
        "Powdery mildew is a fungal disease that infects cotton plants, forming powdery white patches on the leaves, stems, and flowers. It can weaken the plant and reduce yield if left untreated.",
    },
    {
      image: targetSpot,
      alt: "Target Spot Disease",
      description:
        "Target spot disease is caused by a fungal pathogen and manifests as circular lesions with concentric rings on cotton leaves. It can lead to defoliation and reduced fiber quality.",
    },
    // Add more disease data as needed
  ];

  const feedbackData = [
    {
      name: "John Doe",
      feedback:
        "I have been using the Cotton Leaf Disease Prediction application for a while now, and it has been incredibly helpful in identifying diseases early and taking necessary actions to protect my crops. Highly recommended!",
    },
    {
      name: "Jane Smith",
      feedback:
        "As a cotton farmer, I appreciate the simplicity and accuracy of this disease prediction tool. It has saved me a lot of time and effort in diagnosing leaf diseases, allowing me to focus more on crop management.",
    },
    {
      name: "Mike Johnson",
      feedback:
        "The Cotton Leaf Disease Prediction application has become an essential tool in my farming practices. Its fast and accurate predictions have helped me prevent outbreaks and maintain healthy cotton crops throughout the season.",
    },
    {
      name: "Emily Brown",
      feedback:
        "I am impressed by how easy it is to use this application. Uploading an image and getting instant predictions has never been simpler. The accuracy of the predictions is remarkable.",
    },
    {
      name: "David Wilson",
      feedback:
        "This tool has been a game-changer for me. It not only predicts diseases accurately but also provides valuable insights and recommendations for disease management. It is like having a virtual agronomist!",
    },
    {
      name: "Sarah Thompson",
      feedback:
        "The Cotton Leaf Disease Prediction application has exceeded my expectations. Its user-friendly interface and timely predictions have helped me stay ahead of diseases and maximize crop yields.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">
        About Cotton Leaf Disease Prediction
      </h2>
      <p className="mb-4 text-white">
        Cotton leaf disease prediction is a web application that helps farmers
        and agronomists to predict diseases affecting cotton plants using
        machine learning models.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-white">Features</h2>
      <ul className="list-disc pl-4 mb-4 text-white">
        <li>Predict common diseases affecting cotton leaves.</li>
        <li>Easy-to-use interface for uploading images.</li>
        <li>Quick prediction results.</li>
      </ul>
      <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
      <p className="text-white">
        Simply navigate to the Predict Disease page, upload an image of a cotton
        leaf, and our machine learning model will predict if the leaf is healthy
        or affected by a disease.
      </p>
      <h2 className="text-2xl font-bold text-white mb-4">
        Additional Information
      </h2>
      <p className="text-white">
        Our platform employs state-of-the-art machine learning algorithms
        trained on extensive datasets to ensure accurate predictions. We
        continuously update our models to adapt to new strains of diseases and
        improve accuracy over time.
      </p>
      <h2 className="text-2xl font-bold text-white mb-4">Featured Diseases</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {diseaseData.map((disease, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src={disease.image}
              alt={disease.alt}
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <p className="mt-2 text-black">{disease.description}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4 text-white mt-8">
        Feedback & Testimonials
      </h2>
      <div className="flex overflow-x-auto space-x-4 p-2">
        {[...feedbackData, ...feedbackData, ...feedbackData].map(
          (feedback, index) => (
            <div
              key={index}
              className="bg-white p-2 rounded-lg shadow-md flex-shrink-0"
              style={{ maxWidth: "250px" }}
            >
              <p className="text-gray-600 text-center italic">
                &quot;{feedback.feedback}&quot;
              </p>
              <p className="mt-2 text-black text-center font-bold">
                {feedback.name}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
