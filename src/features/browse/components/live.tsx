"use client";

import { useState } from "react";

import { Button } from "@nextui-org/react";

import { VidstackPlayerPlyr } from "@/components/vidstack-player-plyr";

export const Live = () => {
  const [src, setSrc] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const list = [
    {
      list: "https://live-evg25.tv360.bitel.com.pe/bitel/willax/playlist.m3u8",
      src: "https://live-evg25.tv360.bitel.com.pe/bitel/willax/bitel/willax_ori_source/chunks.m3u8",
      title: "Willax",
    },
    {
      list: "",
      src: "https://dsr.ride.com.ar/tvmia/an29/chunks.m3u8",
      title: "America",
    },
    {
      list: "https://live-evg25.tv360.bitel.com.pe/bitel/latina/playlist.m3u8",
      src: "https://live-evg25.tv360.bitel.com.pe/bitel/latina/bitel/latina_ori_source/chunks.m3u8",
      title: "Latina",
    },
    {
      list: "https://jireh-1-hls-video-ar-isp.dps.live/hls-video/567ffde3fa319fadf3419efda25619456231dfea/latina/latina.smil/playlist.m3u8",
      src: "",
      title: "Latina 2",
    },
    {
      list: "https://redirector.dps.live/hls-video/567ffde3fa319fadf3419efda25619456231dfea/latina/latina.smil/playlist.m3u8",
      src: "",
      title: "Latina 3",
    },
    {
      list: "https://live-evg25.tv360.bitel.com.pe/bitel/atv/playlist.m3u8",
      src: "https://live-evg25.tv360.bitel.com.pe/bitel/atv/bitel/atv_ori_source/chunks.m3u8",
      title: "ATV",
    },
    {
      list: "https://live-evg25.tv360.bitel.com.pe/bitel/atvmas/playlist.m3u8",
      src: "https://live-evg25.tv360.bitel.com.pe/bitel/atvmas/bitel/atvmas_ori_source/chunks.m3u8",
      title: "ATV+",
    },
    {
      list: "https://live-evg25.tv360.bitel.com.pe/bitel/panamericana/playlist.m3u8",
      src: "https://live-evg25.tv360.bitel.com.pe/bitel/panamericana/bitel/panamericana_ori_source/chunks.m3u8",
      title: "Panamericana",
    },
    {
      list: "https://live-evg25.tv360.bitel.com.pe/bitel/tvperu/playlist.m3u8",
      src: "https://live-evg25.tv360.bitel.com.pe/bitel/tvperu/bitel/tvperu_ori_source/chunks.m3u8",
      title: "TV Perú",
    },
    {
      list: "https://live-evg25.tv360.bitel.com.pe/bitel/global/playlist.m3u8",
      src: "https://live-evg25.tv360.bitel.com.pe/bitel/global/bitel/global_ori_source/chunks.m3u8",
      title: "Global",
    },
    {
      list: "https://live-evg25.tv360.bitel.com.pe/bitel/fmhmovies/playlist.m3u8",
      src: "https://live-evg25.tv360.bitel.com.pe/bitel/fmhmovies/chunks.m3u8",
      title: "FMH Movies",
    },
    {
      list: "https://live-evg25.tv360.bitel.com.pe/bitel/fmhkids/playlist.m3u8",
      src: "https://live-evg25.tv360.bitel.com.pe/bitel/fmhkids/chunks.m3u8",
      title: "FMH Kids",
    },
    {
      list: "",
      src: "https://dsr.ride.com.ar/tvmia/an08/chunks.m3u8",
      title: "RPP",
    },
    {
      list: "",
      src: "http://1901011995.lat:25461/JAKUBSKRALY/JakubSkraly09@/472317.m3u8",
      title: "Liga 1",
    },
    {
      list: "",
      src: "http://1901011995.lat:25461/JAKUBSKRALY/JakubSkraly09@/472362.m3u8",
      title: "Liga 1 II",
    },
    {
      list: "",
      src: "http://1901011995.lat:25461/JAKUBSKRALY/JakubSkraly09@/472316.m3u8",
      title: "Liga 1 Max",
    },
    {
      list: "",
      src: "http://1901011995.lat:25461/JAKUBSKRALY/JakubSkraly09@/472318.m3u8",
      title: "Liga 1 Max II",
    },
    {
      list: "",
      src: "https://dsr.ride.com.ar/tvmia/bn19/playlist.m3u8",
      title: "Gol TV",
    },
    {
      list: "",
      src: "http://1901011995.lat:25461/JAKUBSKRALY/JakubSkraly09@/504235.m3u8",
      title: "Sony Movies",
    },
    {
      list: "",
      src: "http://1901011995.lat:25461/movie/JAKUBSKRALY/JakubSkraly09@/931504.mp4",
      title: "IPTV",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto space-y-4 p-2">
      <div className="flex gap-2">
        <div className="w-1/3 grid grid-cols-2 gap-2">
          {list.map(({ list, src, title }) => (
            <Button
              key={title}
              onPress={() => {
                setSrc(list || src);
                setTitle(title);
              }}
            >
              {title}
            </Button>
          ))}
        </div>
        <div className="w-2/3">
          <VidstackPlayerPlyr title={title} src={src} />
        </div>
      </div>
    </section>
  );
};
