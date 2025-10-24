'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  minutes: number;
  seconds: number;
}

export default function PopupForm({ isOpen, onClose, minutes, seconds }: PopupFormProps) {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Prepare data for Apps Script
    const data = {
      name: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phoneNumber') as string,
      problem: formData.get('dentalConcern') as string,
    };

    const scriptURL = "https://script.google.com/macros/s/AKfycbxyuybiRhZIqMqDbRaHmLRSkjjiRBsLAoyPmOViJH-fCwuV-vKLip5oih9j__5m45BwmQ/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resultText = await response.text();
      if (resultText.includes("Added")) {
        alert("✅ Appointment booked successfully!");
        onClose();
        router.push("/thank-you");
      } else {
        throw new Error(resultText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong. Please try again later.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#ca9c4f]">Book Your Appointment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>

        {/* Offer info */}
        <div className="bg-gray-50 p-3 md:p-4 rounded-lg mb-4 border-l-4 border-[#ca9c4f]">
          <p className="text-sm md:text-base text-gray-700 text-center">
            <strong>Includes:</strong> Professional Consultation & Digital scan <span className="text-[#ca9c4f] font-bold"> with Our Certified Implantologist</span>
          </p>
        </div>

        {/* Countdown */}
        <div className="bg-black text-white p-3 md:p-4 rounded-lg mb-4 text-center">
          <p className="text-sm md:text-base mb-1">⏰ This offer expires in:</p>
          <div className="text-2xl md:text-3xl font-bold">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </div>
          <p className="text-xs md:text-sm mt-1">Book within 20 minutes</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              required
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Describe Your Dental Concern</label>
            <textarea
              name="dentalConcern"
              required
              rows={2}
              placeholder="Briefly describe your dental issue"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ca9c4f] text-white py-3 md:py-4 rounded-lg font-bold text-lg hover:bg-[#b8904a] transition-colors"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
