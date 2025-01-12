"use client";

import { MediaPlayer, MediaProvider, Track } from "@vidstack/react";

// import {
//   PlyrLayout,
//   plyrLayoutIcons,
// } from "@vidstack/react/player/layouts/plyr";

// import "@vidstack/react/player/styles/base.css";
// import "@vidstack/react/player/styles/plyr/theme.css";

import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

export const VidstackPlayer = () => {
  return (
    <MediaPlayer
      title="Sprite Fight"
      src="https://vpk1g9itdgtk.acek-cdn.com/hls2/01/02905/6a5bioyk9u3j_h/master.m3u8?t=GlFt6akpsVOqg_tO5kwJf3n2RyS20t7aMveQiNnMXR0&s=1736661505&e=129600&f=14527762&srv=yCdcGNsOcuCU&i=0.4&sp=500&p1=yCdcGNsOcuCU&p2=yCdcGNsOcuCU&asn="
    >
      <MediaProvider>
        <Track
          kind="subtitles"
          label="Spanish"
          src="https://ycdcgnsocucu.acek-cdn.com/vtt/01/02905/6a5bioyk9u3j_spa.vtt"
        />
      </MediaProvider>
      {/* <PlyrLayout icons={plyrLayoutIcons} /> */}
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
};
