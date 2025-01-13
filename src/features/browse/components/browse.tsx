import { Carousel } from "@/features/browse/components/carousel";
import { ListCard } from "@/features/browse/components/list-card";

import { VidstackPlayer } from "@/components/vidstack-player";

export const Browse = () => {
  return (
    <>
      <Carousel />
      {/* <VidstackPlayer
        title="Star Channel"
        src="https://jactvpro.xyz/Upb93ECM5B/RRzkDRt6w8/10273.m3u8"
      /> */}
      <VidstackPlayer
        title="Robot Salvaje"
        src="https://q7k6ad0empwu.cdn-centaurus.com/hls2/01/05136/h51jwhyb2z6e_h/master.m3u8?t=lEaQ4XZGepBjJnl0YZVUejGajv5FrmNG1ed268ZnopQ&s=1736739485&e=129600&f=25680350&srv=12hzmb7iqd3r&i=0.4&sp=500&p1=12hzmb7iqd3r&p2=12hzmb7iqd3r&asn="
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
