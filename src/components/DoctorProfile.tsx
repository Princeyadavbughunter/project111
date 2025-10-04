import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-6">Meet Our Principal Dentist</h2>

      <div className="bg-white rounded-lg p-4 md:p-8 shadow-sm max-w-6xl mx-auto">
        <div className="md:flex md:gap-8 md:items-start mb-8">
          <div className="text-center mb-6 md:mb-0 md:flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden relative">
              <Image src="/meet-dr-pooja-sharma.jpg" alt="Dr. Pooja Sharma" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#ca9c4f]">Dr. Pooja Sharma</h3>
            <p className="text-gray-600 font-medium">Founder and Director of Orovac Dental Care</p>
          </div>

          <div className="space-y-4 text-gray-700 md:flex-grow">
            <p className="md:text-lg">
              Dr. Pooja Sharma, founder and director of Orovac Dental Care, is revolutionizing dental care accessibility in India and beyond. Her vision extends far beyond traditional dentistry, focusing on making modern dental care accessible and affordable for everyone.
            </p>
            
            <p className="md:text-lg">
              Expertise and Recognition
Honored by Mrs. Ruth Margaret Cadbury (MP British Parliament). Recognized by Miss Universe Lara Dutta. Advanced certifications in:

Implantology,
Cosmetic Dentistry,
Orthodontics,
Digital Smile Design,
Laser Dentistry,
Full Mouth Rehabilitation,
Botox and Facial Aesthetics.
            </p>

            <p className="md:text-lg">
              Her empathetic and transparent approach, combined with advanced technology and conscious sedation options, creates a comfortable and transformative dental experience for every patient.
            </p>

            <div className="md:grid md:grid-cols-2 md:gap-8 mt-6">
              <div>
                <h3 className="font-bold text-[#ca9c4f] mb-3 md:text-lg">Professional Achievements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ca9c4f]">🏅</span>
                    <span className="md:text-lg">Digital Smile Design Expert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ca9c4f]">🏅</span>
                    <span className="md:text-lg">Advanced Implantology Specialist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ca9c4f]">🏅</span>
                    <span className="md:text-lg">Certified Orthodontist for Adults and Children</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ca9c4f]">🏅</span>
                    <span className="md:text-lg">Laser Dentistry Certification</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#ca9c4f] mt-6 mb-3 md:mt-0 md:text-lg">Expertise & Innovation</h3>
                <p className="md:text-lg">
                  Honored by Mrs. Ruth Margaret Cadbury (MP British Parliament). Recognized by Miss Universe Lara Dutta. Advanced certifications in:

Implantology,
Cosmetic Dentistry,
Orthodontics,
Digital Smile Design,
Laser Dentistry,
Full Mouth Rehabilitation,
Botox and Facial Aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button onClick={onBookAppointment} className="bg-[#ca9c4f] text-white py-3 px-6 rounded-lg font-bold w-full md:max-w-md md:mx-auto md:block">
          BOOK APPOINTMENT WITH DR. Pooja Sharma
        </button>
      </div>
    </section>
  );
}