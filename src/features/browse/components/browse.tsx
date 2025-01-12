import { Nav } from "@/components/nav";

import { Carousel } from "@/features/browse/components/carousel";
import { ListCard } from "@/features/browse/components/list-card";

export const Browse = () => {
  return (
    <>
      <Nav />
      <Carousel />
      <iframe src="https://ghbrisk.com/e/h51jwhyb2z6e" width="100%" height="500px"></iframe>
      <section className="max-w-screen-xl mx-auto space-y-4 p-2">
        <div className="">
          <ListCard />
        </div>
        <div className="">
          <ListCard />
        </div>
      </section>
    </>
  );
};
