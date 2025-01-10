import { Menu } from "@/features/browse/components/menu";
import { Search } from "@/features/browse/components/search";

import { ListCard } from "@/features/browse/components/list-card";

export const Browse = () => {
  return (
    <>
      <section className="sticky top-0 z-10 bg-foreground backdrop-blur backdrop-filter bg-opacity-0 py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-2 px-2 sm:px-4">
          <Menu />
          <Search />
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto space-y-4 px-2 sm:px-4">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            deserunt quod labore? Voluptatem ipsum quod ducimus non impedit,
            quam nobis perferendis. Quam praesentium expedita dicta maiores
            dolores error nemo reiciendis!
          </p>
        </div>
        <div className="">
          <ListCard />
        </div>
      </section>
    </>
  );
};
