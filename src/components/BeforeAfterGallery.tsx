'use client';

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {
  const cases = [
    {
      image: '/img/before-after/after1.jpg',
      alt: 'Patient Case 1'
    },
    {
      image: '/img/before-after/after2.jpg',
      alt: 'Patient Case 2'
    },
    {
      image: '/img/before-after/after8.jpg',
      alt: 'Patient Case 3'
    },
    {
      image: '/img/before-after/after4.jpg',
      alt: 'Patient Case 4'
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-[#ca9c4f] text-sm md:text-base font-medium mb-2">Orovac Dental Care</div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Patient Cases</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {cases.map((caseItem, index) => (
            <div key={index} className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src={caseItem.image}
                alt={caseItem.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-lg mt-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Ready for Your <span className="text-[#ca9c4f]">Smile Transformation?</span>
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who have transformed their smiles with Dr. Pooja Sharma&apos;s expertise. Book your consultation today and take the first step towards your dream smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onBookAppointment} className="bg-[#ca9c4f] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#b8904a] transition-colors">
              Book Consultation
            </button>
            <a href="tel:+919828079898" className="bg-black text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors text-center">
              Call Now: +91 9828079898
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">Professional consultation includes digital scan</p>
        </div>
      </div>
    </section>
  );
}
