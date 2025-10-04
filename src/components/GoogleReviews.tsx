import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "RAGE GOD",
      initials: "RG",
      date: "4 months ago",
      review: "Really happy with my experience here. I got my braces done by Dr. Pooja and she did a great job. Everything was explained clearly, the process went smoothly, and I’m very satisfied with the results. Highly recommend!"
    },
    {
      name: "Nisha Sharma",
      initials: "NS",
      date: "6 months ago",
      review: "I came from Gurgaon to Orovac Dental care in Malviya Nagar, Jaipur near the airport for a root canal and wisdom tooth extraction. Both procedures were completely painless! Dr. Pooja is truly one of Jaipur’s finest dentists. Highly recommend!"
    },
    {
      name: "Vijay kumari",
      initials: "Vk",
      date: "8 months ago",
      review: "She is super talented doctor.. she is one among top notch dental surgeon who never compromise with quality and certainly we get highly sterilized and esthetics driven treatment.. clinic runs on international standards so is her foundation for clinic is laid upon. We see a rush of international patients over there who gets ultimately satisfied treatment and fine reviews."
    },
    {
      name: "ATUL PANCHARIYA",
      initials: "AP",
      date: "6 months ago",
      review: "Had a completely painless tooth extraction at Orovac Oral Care, Malviya Nagar. I didn’t even feel the needle prick! Such a comfortable and homely experience with Dr. Pooja. Thank you doctor."
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