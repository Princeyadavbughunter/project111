import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight">
        Transform Your Smile With<br />
        <span className="text-[#ca9c4f]">Orovac dental Care!</span>
      </h1>

      <div className="md:flex md:items-center md:gap-8 md:mb-12">
        <div className="relative rounded-lg h-48 md:h-[400px] mb-6 md:mb-0 md:flex-1 overflow-hidden shadow-lg">
          <video
            src="/videos/video_20251008_133807.mp4"
            controls
            autoPlay
            className="w-full h-full object-cover rounded-lg"
            poster="/images/hero.png"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Special Offer Section */}
        <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 rounded-xl text-center mb-6 md:mb-0 md:flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Dental Implants starting
            <span className="text-[#ca9c4f] block text-3xl md:text-4xl lg:text-5xl">@₹35,000</span>
            <h3 className="text-lg md:text-xl">Easy EMI options: 6, 12, or 18 months</h3>
          </h2>
          <button 
            onClick={onBookAppointment}
            className="bg-darkGreen text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:bg-[#b8904a] transition-colors pulse-element w-full md:w-auto"
          >
            📞 Book Consultation
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-8 md:flex-row md:justify-center">
        <button onClick={onBookAppointment} className="bg-darkGreen text-white py-4 px-8 rounded-lg font-bold text-lg hover:text-black hover:bg-[#b8904a] transition-colors md:min-w-[240px]">
          📞 Book Consultation
        </button>
        <a
          href="tel:+919828079898"
          className="bg-yellow text-black py-4 px-8 rounded-lg font-bold text-lg text-center hover:bg-darkGreen
          hover:text-white transition-colors md:min-w-[240px]"
        >
          CALL NOW ☏
        </a>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-8">
        <h3 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-6">
          Why choose <span className="text-[rgb(55,81,82)]
">Orovac dental Care?</span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-6">
          {[
            { icon: "/images/heroicons/Experience.png", title: "15+ Years Experience", desc: "Serving patients from across India and 25+ countries" },
           
            { icon: "/images/heroicons/premium.png", title: "Premium Implants", desc: "International Quality" },
            { icon: "/images/heroicons/team.png", title: "Specialist Team", desc: "Qualified Doctors" },
            { icon: "/images/heroicons/sterilization.png", title: "100% Sterilization", desc: "Highest Safety Standards" },
            { icon: "/images/heroicons/tech.png", title: "Advanced Technology", desc: "Home to Rajasthan's first 3D printing dental lab" }
          ].map((usp, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow md:p-6">
              <Image src={usp.icon} alt={usp.title} width={48} height={48} className="mx-auto mb-2" />
              <h4 className="font-bold text-sm md:text-base text-gray-900 mb-1">{usp.title}</h4>
              <p className="text-xs md:text-sm text-gray-600">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 md:p-8 rounded-lg md:max-w-3xl md:mx-auto">
        <h3 className="font-bold text-[#ca9c4f] mb-3 md:text-xl">Why Choose Us?</h3>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-[#ca9c4f]">✔</span>
            <span className="text-sm md:text-base">15+ Years of Excellence
Serving patients from across India and 25+ countries</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ca9c4f]">✔</span>
            <span className="text-sm md:text-base">ISO 9001:2015 Certified
International standard facility</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ca9c4f]">✔</span>
            <span className="text-sm md:text-base">98% Patient Satisfaction Rate
Based on 10,000+ patient reviews</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ca9c4f]">✔</span>
            <span className="text-sm md:text-base">Advanced Technology
Home to Rajasthan's first 3D printing dental lab</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ca9c4f]">✔</span>
            <span className="text-sm md:text-base">#1 in Rajasthan
Ranked as the top dental clinic by Dental Council of India</span>
          </li>
          
          
          <li className="flex items-start gap-2">
            <span className="text-[#ca9c4f]">✔</span>
            <span className="text-sm md:text-base">High patient satisfaction with 4.9/5 star rating</span>
          </li>
          <li className="flex items-start gap-2">
         
           
          </li>
        </ul>
        <button onClick={onBookAppointment} className="bg-[rgb(55,81,82)] text-white py-3 px-6 rounded-lg font-bold w-full hover:bg-[rgb(55,81,82)] transition-colors md:max-w-md md:mx-auto md:block">
          Request a Call back ➤
        </button>
        <small className="block text-center mt-2 text-gray-600 md:text-base">
          Professional Consultation & Digital scan
        </small>
      </div>
    </section>
  );
}