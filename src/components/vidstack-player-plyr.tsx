"use client";

import { useEffect, useState } from "react";

// import { Skeleton } from "@nextui-org/skeleton";

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

  // if (!mounted) {
  //   return <Skeleton className="rounded-lg w-full h-[500px]" />;
  // }

  return (
    <MediaPlayer
      title={title}
      src={src}
      autoPlay={true}
      aspectRatio="16/9"
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
