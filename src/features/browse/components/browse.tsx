import { Carousel } from "@/features/browse/components/carousel";
import { ListCard } from "@/features/browse/components/list-card";

import { VidstackPlayerPlyr } from "@/components/vidstack-player-plyr";

export const Browse = () => {
  return (
    <>
      <Carousel />
      {/* <VidstackPlayerPlyr title="Star Channel" src="https://jactvpro.xyz/Upb93ECM5B/RRzkDRt6w8/10273.m3u8" /> */}
      <VidstackPlayerPlyr
        title="Star Channel"
        src="https://jactvpro.xyz/Upb93ECM5B/RRzkDRt6w8/10307.m3u8"
      />
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
