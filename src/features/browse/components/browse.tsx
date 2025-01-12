import { Nav } from "@/components/nav";
import { VidstackPlayer } from "@/components/vidstack-player";

import { Carousel } from "@/features/browse/components/carousel";
import { ListCard } from "@/features/browse/components/list-card";

export const Browse = () => {
  return (
    <>
      <Nav />
      <Carousel />
      <VidstackPlayer src="https://vpk1g9itdgtk.acek-cdn.com/hls2/01/02905/6a5bioyk9u3j_h/index-v1-a1.m3u8?t=PHCH5QnJWSSpw7dGFB2h_gjLXwHe_MNLdN491dW9W8c&s=1736658676&e=129600&f=14527762&srv=yCdcGNsOcuCU&i=0.4&sp=500&p1=yCdcGNsOcuCU&p2=yCdcGNsOcuCU&asn=" />
      <VidstackPlayer src="https://jactvpro.xyz/Upb93ECM5B/RRzkDRt6w8/10273.m3u8" />
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
