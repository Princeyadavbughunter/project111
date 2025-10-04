'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How often should I visit the dentist for a check-up?",
      answer: "It's generally recommended to visit your dentist for a check-up and cleaning every six months. However, some individuals may need more frequent visits depending on their oral health needs. Regular check-ups help prevent dental issues and maintain optimal oral health."
    },
    {
      question: "How long does a typical teeth whitening treatment take?",
      answer: "Professional in-office teeth whitening typically takes about 60-90 minutes. At-home whitening treatments can take anywhere from a few days to a couple of weeks, depending on the product and desired results."
    },
    {
      question: "Are aligners better than braces?",
      answer: "Clear aligners are removable, transparent trays that gradually straighten teeth, while traditional braces use fixed metal brackets and wires. Aligners are less noticeable and can be removed for eating and cleaning, but braces may be more effective for complex orthodontic issues."
    },
    {
      question: "Is it normal for gums to bleed when brushing?",
      answer: "Occasional light bleeding while brushing isn't uncommon, but frequent or heavy bleeding can indicate gum disease or other oral health issues. If you experience persistent gum bleeding, consult your dentist for an evaluation."
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