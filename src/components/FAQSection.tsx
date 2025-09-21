'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a dental implant procedure take?",
      answer: "Typically, 2-3 visits over 3 months, depending on bone health. Some cases can be done faster with same-day crowns."
    },
    {
      question: "Is the treatment painful?",
      answer: "No. All treatments are performed under local anesthesia with added comfort measures. We also specialize in painless root canals."
    },
    {
      question: "Are aligners better than braces?",
      answer: "Yes, for most mild-to-moderate cases. Aligners are invisible, removable, and easier to manage."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend every 6 months for a check-up and cleaning—even if you have no symptoms."
    },
    {
      question: "Do you offer treatments for senior citizens or kids?",
      answer: "Yes, we offer complete family dentistry—from kids' cavities to full-mouth rehab for seniors."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6">
          Frequently Asked Questions about Dental Implants
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 md:p-6 text-left font-bold hover:bg-gray-50 flex justify-between items-center"
              >
                <span className="flex-grow pr-4 md:text-lg">{faq.question}</span>
                <span className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''} flex-shrink-0`}>
                  ▼
                </span>
              </button>
              {openFAQ === index && (
                <div className="p-4 md:p-6 border-t bg-gray-50">
                  <p className="text-gray-700 italic md:text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}