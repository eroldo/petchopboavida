
import React from 'react';

export const Testimonials = () => {
  const testimonials = [
    {
      text: "Meu cachorro tinha carraças e, depois do atendimento na Pet Chop Clinic Boa Vida, ele está ótimo!",
      author: "Adriano Belo"
    },
    {
      text: "Excelente serviço! O tratamento contra carraças funcionou perfeitamente.",
      author: "Judil Wilton"
    }
  ];

  return (
    <section className="bg-white p-5 rounded-lg shadow-sm mt-10">
      <h2 className="text-[#4CAF50] text-2xl font-bold">Depoimentos</h2>
      {testimonials.map((testimonial, index) => (
        <blockquote 
          key={index}
          className="bg-[#e8f5e9] border-l-4 border-[#4CAF50] p-4 my-3 italic text-[#2e7d32]"
        >
          "{testimonial.text}"<br />
          <strong>— {testimonial.author}</strong>
        </blockquote>
      ))}
    </section>
  );
};
