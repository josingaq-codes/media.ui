"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { Image } from "@nextui-org/react";

export const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="sm:p-2">
      <div className="rounded-large overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_100%] px-2">
            <Image
              src="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/ukAmSyNdtWduHZfm27R2EOsguKt.jpg"
              alt="Squid Game"
              className="flex justify-center items-center"
            />
          </div>
          <div className="flex-[0_0_100%] px-2">
            <Image
              src="https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/vZG7PrX9HmdgL5qfZRjhJsFYEIA.jpg"
              alt="Venom"
              className="flex justify-center items-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
