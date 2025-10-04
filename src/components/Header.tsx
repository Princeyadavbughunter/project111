import Image from "next/image";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm p-4 md:py-6">
      <div className="text-center max-w-6xl mx-auto md:flex md:items-center md:justify-between md:text-left">
        <div className="md:flex md:items-center md:gap-8">
          <Image
            src="/images/orovac-logo-svg-1 (1).svg"
            alt="Veda Dentistry Logo"
            width={192}
            height={48}
            className="h-auto mx-auto mb-4 md:mb-0 md:mx-0"
          />
          <a
            href="https://maps.app.goo.gl/4PZ4Fr8gUWvcYs1Y6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-700 mb-4 md:mb-0 hover:text-[#ca9c4f] transition-colors cursor-pointer block"
          >
            📍 7/320, opp. EHCC Hospital, near Jawahar Circle, Sector 7, Malviya Nagar, Jaipur, Rajasthan 302017
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:gap-4">
          <button onClick={onBookAppointment} className="bg-[#ca9c4f] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#b8904a] transition-colors">
            BOOK APPOINTMENT
          </button>
          <a href="tel:+919828079898" className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors text-center">
            CALL NOW ☏
          </a>
        </div>
      </div>
    </header>
  );
}