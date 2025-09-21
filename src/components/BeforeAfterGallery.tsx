'use client';

import { useEffect } from 'react';

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {
  const cases = [
    {
      before: '/img/before-after/Patient-Before-01.jpg',
      after: '/img/before-after/Patient-After-01.jpg',
      alt: 'Patient Case 1'
    },
    {
      before: '/img/before-after/Patient-02-Before.jpg',
      after: '/img/before-after/Patient-02-After.jpg',
      alt: 'Patient Case 2'
    },
    {
      before: '/img/before-after/Before-1-1.jpg',
      after: '/img/before-after/After-1-1.jpg',
      alt: 'Patient Case 3'
    },
    {
      before: '/img/before-after/Before-1.jpg',
      after: '/img/before-after/After-1.jpg',
      alt: 'Patient Case 4'
    }
  ];

  useEffect(() => {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach((slider) => {
      const handleSlider = (e: Event) => {
        const target = e.target as HTMLInputElement;
        const value = target.value;
        const container = target.closest('.sliderimg');
        const after = container?.querySelector('.after') as HTMLElement;

        if (after) {
          after.style.clipPath = `polygon(${value}% 0%, 100% 0%, 100% 100%, ${value}% 100%)`;
        }
      };

      slider.addEventListener('input', handleSlider);

      return () => {
        slider.removeEventListener('input', handleSlider);
      };
    });
  }, []);

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-[#ca9c4f] text-sm md:text-base font-medium mb-2">Veda Dentistry and Cosmetology</div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Patient Cases</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {cases.map((caseItem, index) => (
            <div key={index} className="sliderimg relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <div
                className="image before absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${caseItem.before}')` }}
              ></div>
              <div
                className="image after absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${caseItem.after}')`,
                  clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)'
                }}
              ></div>
              <input
                type="range"
                className="slider absolute top-1/2 left-0 w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer z-10 transform -translate-y-1/2"
                min="1"
                max="100"
                defaultValue="50"
              />
              <div className="slider-button absolute top-1/2 left-1/2 w-8 h-8 bg-white rounded-full border-2 border-[#ca9c4f] transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-[#ca9c4f] rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-lg mt-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Ready for Your <span className="text-[#ca9c4f]">Smile Transformation?</span>
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who have transformed their smiles with Dr. Shruti&apos;s expertise. Book your consultation today and take the first step towards your dream smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onBookAppointment} className="bg-[#ca9c4f] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#b8904a] transition-colors">
              Book Consultation
            </button>
            <a href="tel:+919318481183" className="bg-black text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors text-center">
              Call Now: +91 93184 81183
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">Professional consultation includes digital scan</p>
        </div>
      </div>
    </section>
  );
}