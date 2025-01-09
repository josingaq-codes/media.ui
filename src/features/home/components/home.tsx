import { ThemeSwitcher } from "@/components/theme-switcher";
// import { VideoPlayer } from "@/components/video-player";

export const Home = () => {
  return (
    <section>
      <h1 className="text-center">Home</h1>
      <ThemeSwitcher />
      {/* <VideoPlayer
        src="https://voe.sx/e/mtyqxbov2bc9"
        width="100%"
        height="500px"
      />
      <VideoPlayer
        src="https://iframe.mediadelivery.net/embed/365724/b7cb85bc-a3a5-4d48-9de2-2e3ee12b34e9?autoplay=true&preload=true&responsive=true"
        width="100%"
        height="500px"
      /> */}
    </section>
  );
};
