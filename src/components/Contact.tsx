
import React from 'react';

export const Contact = () => {
  return (
    <section className="bg-white p-5 rounded-lg shadow-sm mt-10">
      <h2 className="text-[#4CAF50] text-2xl font-bold">Contatos e Localização</h2>
      <p className="mt-2"><strong>Endereço:</strong> Lunda Sul, Angola (atendimento também em outras províncias)</p>
      <p className="mt-2">
        <strong>WhatsApp:</strong>{' '}
        <a 
          href="https://wa.me/244948510101" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#4CAF50] font-semibold hover:text-[#FFB74D] transition-colors"
        >
          +244 948 510 101
        </a>
        {' / '}
        <a 
          href="https://wa.me/244926082013" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#4CAF50] font-semibold hover:text-[#FFB74D] transition-colors"
        >
          +244 926 082 013
        </a>
      </p>
      <p className="mt-2">
        <strong>Instagram:</strong>{' '}
        <a 
          href="https://www.instagram.com/petshop_angola_animais/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#4CAF50] font-semibold hover:text-[#FFB74D] transition-colors"
        >
          @petshop_angola_animais
        </a>
      </p>
      <p className="mt-2">
        <strong>E-mail:</strong>{' '}
        <a 
          href="mailto:petshopclinicboavida@gmail.com"
          className="text-[#4CAF50] font-semibold hover:text-[#FFB74D] transition-colors"
        >
          petshopclinicboavida@gmail.com
        </a>
      </p>
      <p className="mt-2"><strong>Horário:</strong> Segunda a sábado, das 08h às 18h</p>
    </section>
  );
};
