import { Menu } from "@/features/browse/components/menu";
import { Search } from "@/features/browse/components/search";

import { ListCard } from "@/features/browse/components/list-card";

export const Browse = () => {
  return (
    <section className="max-w-screen-xl mx-auto space-y-4 p-2 sm:p-4">
      <div className="sticky top-0 z-10 flex justify-between items-center gap-2 bg-foreground backdrop-blur backdrop-filter bg-opacity-0 py-4">
        <Menu />
        <Search />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          deserunt quod labore? Voluptatem ipsum quod ducimus non impedit, quam
          nobis perferendis. Quam praesentium expedita dicta maiores dolores
          error nemo reiciendis!
        </p>
      </div>
      <div className="">
        <ListCard />
      </div>
    </section>
  );
};
