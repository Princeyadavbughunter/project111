interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="bg-darkGreen text-white p-6">
      <h2 className="text-xl font-bold text-center mb-4">
        <em>Professional Dental Implant Services</em>
      </h2>
      <hr className="border-[#ca9c4f] mb-4" />
      
      <p className="text-lg text-white mb-4 text-center">
        <u><strong>Professional Consultation & Digital scan with Our Certified Implantologist.</strong></u>
      </p>

      

      <p className="text-white mb-6 text-center font-bold">
        <em>&quot;ONLY VALID FOR FIRST 10 PATIENTS&quot;</em>
      </p>

      <button onClick={onBookAppointment} className="bg-yellow text-black py-3 px-6 rounded-lg font-bold w-full">
        Request a Call back ➤
      </button>
      <small className="block text-center mt-2">
        Professional Consultation & Digital scan
      </small>
    </section>
  );
} 