"use client";

import { useState } from "react";

import { Button } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";

import { VidstackPlayer } from "@/components/vidstack-player";
// import { VidstackPlayerPlyr } from "@/components/vidstack-player-plyr";

export const Live = () => {
  const [src, setSrc] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const list = [
    {
      list: "",
      src: "https://jactvpro.xyz/Upb93ECM5B/RRzkDRt6w8/10303.m3u8",
      title: "Animal Planet",
    },
    {
      list: "",
      src: "http://1901011995.lat:25461/JAKUBSKRALY/JakubSkraly09@/524368.m3u8",
      title: "Star Channel 4K",
    },
    {
      list: "https://live-evg25.tv360.bitel.com.pe/bitel/willax/playlist.m3u8",
      src: "https://live-evg25.tv360.bitel.com.pe/bitel/willax/bitel/willax_ori_source/chunks.m3u8",
      title: "Willax",
    },
    {
      list: "https://dsr.ride.com.ar/tvmia/an29/playlist.m3u8",
      src: "https://dsr.ride.com.ar/tvmia/an29/chunks.m3u8",
      title: "America",
    },
    {
      list: "https://live-evg25.tv360.bitel.com.pe/bitel/latina/playlist.m3u8",
      src: "https://live-evg25.tv360.bitel.com.pe/bitel/latina/bitel/latina_ori_source/chunks.m3u8",
      title: "1) Latina",
    },
    {
      list: "https://jireh-1-hls-video-ar-isp.dps.live/hls-video/567ffde3fa319fadf3419efda25619456231dfea/latina/latina.smil/playlist.m3u8",
      src: "",
      title: "2) Latina",
    },
    {
      list: "https://redirector.dps.live/hls-video/567ffde3fa319fadf3419efda25619456231dfea/latina/latina.smil/playlist.m3u8",
      src: "",
      title: "3) Latina",
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
      list: "https://dsr.ride.com.ar/tvmia/an08/playlist.m3u8",
      src: "https://dsr.ride.com.ar/tvmia/an08/chunks.m3u8",
      title: "RPP",
    },
    {
      list: "",
      src: "http://1901011995.lat:25461/JAKUBSKRALY/JakubSkraly09@/472317.m3u8",
      title: "1) Liga 1",
    },
    {
      list: "",
      src: "http://1901011995.lat:25461/JAKUBSKRALY/JakubSkraly09@/472362.m3u8",
      title: "2) Liga 1",
    },
    {
      list: "",
      src: "http://1901011995.lat:25461/JAKUBSKRALY/JakubSkraly09@/472316.m3u8",
      title: "1) Liga 1 Max",
    },
    {
      list: "",
      src: "http://1901011995.lat:25461/JAKUBSKRALY/JakubSkraly09@/472318.m3u8",
      title: "2) Liga 1 Max",
    },
    {
      list: "https://dsr.ride.com.ar/tvmia/bn19/playlist.m3u8",
      src: "https://dsr.ride.com.ar/tvmia/bn19/chunks.m3u8",
      title: "Gol TV",
    },
    {
      list: "",
      src: "http://1901011995.lat:25461/movie/JAKUBSKRALY/JakubSkraly09@/931504.mp4",
      title: "ROBOT SALVAJE",
    },
    {
      list: "",
      src: "https://vod-evg1.tv360.bitel.com.pe/Pnn0TKuxYtH3v-uCG-e0jg/1736740200/peru-video/2025/01/07/17/11017073/11017073-e946-4955-88c8-11aac9000ca3_6.m3u8?uid=4727728",
      title: "Bitel",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto p-2">
      <div className="flex gap-2">
        <div className="w-1/5">
          <ScrollShadow className="max-h-[500px]" orientation="vertical">
            <div className="flex flex-col gap-2">
              {list.map(({ list, src, title }) => (
                <Button
                  key={title}
                  onPress={() => {
                    setSrc(list || src);
                    setTitle(title);
                  }}
                  className="mx-2"
                >
                  {title}
                </Button>
              ))}
            </div>
          </ScrollShadow>
        </div>
        <div className="w-4/5">
          <VidstackPlayer title={title} src={src} />
        </div>
      </div>
    </section>
  );
};
