
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-16 px-4 md:px-8 bg-ducky-yellow">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">FAQs</h2>
        
        <div className="space-y-4">
          {faqs.slice(0, 4).map((faq, index) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-ducky-red/10"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-black">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-ducky-red transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 py-4" : "max-h-0 py-0"
                }`}
              >
                <p className="text-black/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="/faqs" 
            className="inline-block text-ducky-red font-medium hover:underline"
          >
            See all FAQs
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
