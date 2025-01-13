"use client";

import { MediaPlayer, MediaProvider } from "@vidstack/react";

import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

interface VidstackPlayerProps {
  title: string;
  src: string;
}

export const VidstackPlayer = ({ title, src }: VidstackPlayerProps) => {
  return (
    <MediaPlayer
      title={title}
      src={src}
      playsInline={true}
      autoPlay={true}
      aspectRatio="16/9"
      crossOrigin="anonymous"
    >
      <MediaProvider />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
};
