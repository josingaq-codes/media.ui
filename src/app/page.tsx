import { Player } from "@/components/player";

export default function HomePage() {
  return (
    <main>
      <h1 className="text-center">Media UI</h1>
      <Player src="https://voe.sx/e/mtyqxbov2bc9" width="100%" height="500px" />
      <Player
        src="https://iframe.mediadelivery.net/embed/365724/b7cb85bc-a3a5-4d48-9de2-2e3ee12b34e9?autoplay=true"
        width="100%"
        height="500px"
      />
    </main>
  );
}
