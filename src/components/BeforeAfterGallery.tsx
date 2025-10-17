'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {
  const beforeAfterPairs = [
    {
      before: '/img/before-after/before1.jpg',
      after: '/img/before-after/after1.jpg',
    },
    {
      before: '/img/before-after/b2.jpg',
      after: '/img/before-after/a2.jpg',
    },
    {
      before: '/img/before-after/b3.jpg',
      after: '/img/before-after/a3.jpg',
    },
    {
      before: '/img/before-after/before4.jpg',
      after: '/img/before-after/after4.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPair = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterPairs.length);
  };

  const prevPair = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? beforeAfterPairs.length - 1 : prev - 1
    );
  };

  const currentPair = beforeAfterPairs[currentIndex];

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="text-[#ca9c4f] text-sm md:text-base font-medium mb-2">
            Orovac Dental Care
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Before & After Results
          </h2>
        </div>

        {/* Image Box */}
        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={prevPair}
            className="absolute left-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <div className="grid grid-cols-2 gap-4 md:gap-8 w-full max-w-4xl">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src={currentPair.before}
                alt="Before"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
                Before
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src={currentPair.after}
                alt="After"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
                After
              </div>
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={nextPair}
            className="absolute right-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* CTA Box */}
        <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-lg mt-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Ready for Your <span className="text-[#ca9c4f]">Smile Transformation?</span>
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who have transformed their smiles with Dr. Pooja Sharma&apos;s expertise. Book your consultation today and take the first step towards your dream smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookAppointment}
              className="bg-[#ca9c4f] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#b8904a] transition-colors"
            >
              Book Consultation
            </button>
            <a
              href="tel:+919828079898"
              className="bg-black text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors text-center"
            >
              Call Now: +91 9828079898
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Professional consultation includes digital scan
          </p>
        </div>
      </div>
    </section>
  );
}
