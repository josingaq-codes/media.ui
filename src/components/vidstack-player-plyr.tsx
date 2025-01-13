"use client";

import { useEffect, useState } from "react";

import { MediaPlayer, MediaProvider } from "@vidstack/react";

import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";

interface VidstackPlayerPlyrProps {
  title: string;
  src: string;
}

export const VidstackPlayerPlyr = ({ title, src }: VidstackPlayerPlyrProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <MediaPlayer
      title={title}
      src={src}
      playsInline={true}
      autoPlay={true}
      aspectRatio="16/9"
      crossOrigin="anonymous"
    >
      {mounted && (
        <>
          <MediaProvider />
          <PlyrLayout icons={plyrLayoutIcons} />
        </>
      )}
    </MediaPlayer>
  );
};
