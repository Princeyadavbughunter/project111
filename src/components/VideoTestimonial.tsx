export default function VideoTestimonial() {
  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Patient Stories</h2>
          <p className="text-gray-600 text-sm md:text-base">Hear directly from our satisfied patients about their experience at Veda</p>
        </div>

        <div className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex justify-center">
            <video
              controls
              className="w-full max-w-2xl rounded-lg shadow-md"
              poster=""
            >
              <source src="/videos/testimonial.mp4" type="video/quicktime" />
              <source src="/videos/testimonial.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}