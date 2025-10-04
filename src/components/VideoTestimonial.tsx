export default function VideoTestimonial() {
  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Patient Stories</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Hear directly from our satisfied patients about their experience at Orovac dental Care.
          </p>
        </div>

        <div className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            <img
              src="/patent1.jpg"
              alt="Testimonial 1"
              className="w-full max-w-xs rounded-lg shadow-md"
            />
            <img
              src="/patent2.jpg"
              alt="Testimonial 2"
              className="w-full max-w-xs rounded-lg shadow-md"
            />
            <img
              src="/patent3.jpg"
              alt="Testimonial 3"
              className="w-full max-w-xs rounded-lg shadow-md"
            />
            <img
              src="/patent4.jpg"
              alt="Testimonial 4"
              className="w-full max-w-xs rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
