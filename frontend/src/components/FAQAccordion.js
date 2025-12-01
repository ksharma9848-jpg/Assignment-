import React, { useState } from "react";

const FAQAccordion = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "How to book?", a: "Contact us via phone or email." },
    { q: "What is the refund policy?", a: "Full refund within 7 days." }
  ];

  return (
    <div className="faq-container">
      <h2>❓ Frequently Asked Questions</h2>
      {faqs.map((faq, idx) => (
        <div className="faq-item" key={idx}>
          <div 
            className={`faq-question ${open === idx ? 'active' : ''}`}
            onClick={() => setOpen(open === idx ? null : idx)}>
            {faq.q}
          </div>
          {open === idx && <div className="faq-answer">{faq.a}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
