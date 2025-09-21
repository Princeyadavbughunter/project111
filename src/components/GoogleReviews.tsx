import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "An Y",
      initials: "AY",
      date: "37 weeks ago",
      review: "I had two implants and full mouth rehabilitation done by Dr Shruti recently. It was a really amazing experience as she led the entire process with such care and efficiency. I was explained everything and the total process was impeccable and seamless. The staff assisting her and the other junior docs with her are equally efficient. I strongly recommend her clinic and infact a few of my acquaintances have already got some dental procedures done at her clinic. They are equally gushing about it. Big thumbs up to Veda!"
    },
    {
      name: "Urmil Gupta",
      initials: "UG",
      date: "35 weeks ago",
      review: "Dr Shruti is the best. I got very good treatment for full mouth rehabilitation, smile makeover and dental implants. Doctor is very sincere, polite, dedicated, calm. She treats like your own family member. I come from Gurgaon for the treatment. I am highly satisfied. I love coming here. Whole team is great."
    },
    {
      name: "Devraj Gupta",
      initials: "DG",
      date: "19 Apr 2024",
      review: "I got full mouth fixed implants for my teeth at Veda dentistry. I am fully satisfied and delighted with the treatment. The doctors and staff are very helpful. Clinic is very hygienic. I recommend them to everybody."
    },
    {
      name: "Dr.M.S. Goel",
      initials: "MG",
      date: "37 weeks ago",
      review: "I have treatment of my teeth problem at Veda Dentistry. The tooth implant was done by Dr Shruti. I am fully satisfied with the treatment and very good behavior of staff and hygiene. I recommend to all"
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <Image
            src="/images/google.png"
            alt="Google Logo"
            width={128}
            height={48}
            className="mx-auto mb-4 object-contain"
          />
          <h2 className="text-xl md:text-3xl font-bold">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold md:text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}