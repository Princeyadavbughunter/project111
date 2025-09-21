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
              <Image src="/doc.png" alt="Dr. Shruti Goel" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#ca9c4f]">Dr. Shruti Goel</h3>
            <p className="text-gray-600 font-medium">Certified Implantologist & Principal Dentist</p>
          </div>

          <div className="space-y-4 text-gray-700 md:flex-grow">
            <p className="md:text-lg">
              Dr. Shruti Goel is a Certified Implantologist at Veda Dentistry, with over 15 years of experience transforming smiles and 5+ years of focused implant practice.
            </p>
            
            <p className="md:text-lg">
              She completed her B.D.S. and M.D.S. from the prestigious Maulana Azad Institute of Dental Sciences, Delhi and did residencies at AIIMS Delhi and Maulana Azad. She has extensive training in basic and advanced implantology – including bone grafting, sinus lifts, ridge splits, full mouth implant rehabilitation, and All-on-X techniques.
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
                    <span className="md:text-lg">B.D.S. & M.D.S. from MAIDS Delhi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ca9c4f]">🏅</span>
                    <span className="md:text-lg">Senior Residencies at AIIMS Delhi and MAIDS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ca9c4f]">🏅</span>
                    <span className="md:text-lg">15+ years experience, 5+ years focused implant practice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ca9c4f]">🏅</span>
                    <span className="md:text-lg">Certified Implantologist with Advanced Training</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#ca9c4f] mt-6 mb-3 md:mt-0 md:text-lg">Expertise & Innovation</h3>
                <p className="md:text-lg">
                  At Veda Dentistry, she specializes in dental implants, full mouth rehabilitation, bone grafting, sinus lifts, and All-on-X techniques, using prosthetically driven planning and cutting-edge technology including 3D scanners, dental lasers, and conscious sedation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button onClick={onBookAppointment} className="bg-[#ca9c4f] text-white py-3 px-6 rounded-lg font-bold w-full md:max-w-md md:mx-auto md:block">
          BOOK APPOINTMENT WITH DR. SHRUTI
        </button>
      </div>
    </section>
  );
}