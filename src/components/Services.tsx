
import React from 'react';

export const Services = () => {
  const services = [
    'Vacinação preventiva (incluindo vacina contra raiva)',
    'Controle parasitário: desparasitantes, pipetas, eliminação de pulgas e carraças, pulverização e desenfestação de casas',
    'Banho, tosa e estética',
    'Passeio e treinamento',
    'Consultas e pesagem',
    'Suplementos: vitamina Hico Strath e ganho muscular'
  ];

  return (
    <section className="services">
      <h2 className="text-[#4CAF50] text-2xl font-bold mt-10">Serviços</h2>
      <ul className="list-disc pl-5 text-[#555]">
        {services.map((service, index) => (
          <li key={index} className="mt-1">{service}</li>
        ))}
      </ul>
    </section>
  );
};
