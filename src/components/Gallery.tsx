
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=600&q=80",
      alt: "Cão feliz correndo ao ar livre"
    },
    {
      src: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80",
      alt: "Dono brincando com cachorro"
    },
    {
      src: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80",
      alt: "Cão correndo no parque"
    }
  ];

  return (
    <section className="mt-10" aria-label="Galeria de imagens felizes de cães e donos">
      <div className="flex flex-wrap gap-4 justify-center">
        {images.map((image, index) => (
          <div key={index} className="w-full sm:w-[280px] rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={16 / 9}>
              <img 
                src={image.src} 
                alt={image.alt}
                className="object-cover w-full h-full rounded-lg"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </section>
  );
};
