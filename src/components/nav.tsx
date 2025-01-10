import { Menu } from "@/features/browse/components/menu";
import { Search } from "@/features/browse/components/search";

export const Nav = () => {
  return (
    <nav className="sticky top-0 z-20 bg-foreground backdrop-blur backdrop-filter bg-opacity-0 py-2">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-2 px-2 sm:px-4">
        <Menu />
        <Search />
      </div>
    </nav>
  );
};
