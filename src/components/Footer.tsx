import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <Image 
            src="/images/orovac-logo-svg-1 (1).svg" 
            alt="Orovac dental Care" 
            width={192}
            height={48}
            className="mx-auto mb-4 h-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="font-bold text-[#ca9c4f] mb-2 md:text-lg">Contact Us</h3>
            <a href="tel:+919318481183" className="block text-[#ca9c4f] font-bold md:text-lg hover:text-black transition-colors">+91 9828079898</a>
            <p className="text-gray-700">contactcare@orovac.in</p>
            <p className="text-gray-700">www.orovac.com</p>
          </div>

          <div>
            <h3 className="font-bold text-[#ca9c4f] mb-2 md:text-lg">Open Hours</h3>
            <p className="text-gray-700 md:text-lg">Monday to Saturday: 10:30 AM to 7:00 PM
Sunday: 11:00 AM to 3:00 PM</p>
          </div>

          <div>
            <h3 className="font-bold text-[#ca9c4f] mb-2 md:text-lg">Location</h3>
            <a
              href="https://maps.app.goo.gl/4PZ4Fr8gUWvcYs1Y6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 font-bold hover:text-[#ca9c4f] transition-colors cursor-pointer block"
            >
              📍 7/320, opp. EHCC Hospital, near Jawahar Circle, Sector 7, Malviya Nagar, Jaipur, Rajasthan 302017
            </a>
            <p className="text-sm text-gray-500 mt-1">Click to open in Google Maps</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7842439264383!2d77.3127636!3d28.634932899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb06f3ba5b8f%3A0x8a86c9c6a5c5c5c5!2s12%20AGCR%20Enclave%2C%20Anand%20Vihar%2C%20Delhi%20110092!5e0!3m2!1sen!2sin!4v1748115653813!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Orovac Dental Care Location - Malviya Nagar, Jaipur, Rajasthan 302017"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}