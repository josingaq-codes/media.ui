"use client";

import { useEffect, useRef } from "react";
import fluidPlayer from "fluid-player";

import "fluid-player/src/css/fluidplayer.css";

interface FluidPlayerProps {
  title: string;
  src: string;
  type: string;
  width?: string;
  height?: string;
}

export const FluidPlayer = ({
  title,
  src,
  type,
  width = "100%",
  height = "auto",
}: FluidPlayerProps) => {
  const self = useRef(null);
  const player = useRef<FluidPlayerInstance | null>(null);

  useEffect(() => {
    if (self.current && !player.current) {
      player.current = fluidPlayer(self.current, {
        layoutControls: {
          title: title,
          autoPlay: true,
          controlForwardBackward: {
            show: true,
            doubleTapMobile: true,
          },
          allowDownload: true,
        },
      });
    }
  }, [title, src, type]);

  return (
    <video ref={self} width={width} height={height}>
      <source title={title} src={src} type={type} />
    </video>
  );
};
