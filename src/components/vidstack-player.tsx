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

interface VidstackPlayerProps {
  src: string;
}

export const VidstackPlayer = ({ src }: VidstackPlayerProps) => {
  return (
    <MediaPlayer title="Sprite Fight" src={src}>
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
