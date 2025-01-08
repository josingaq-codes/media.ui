interface PlayerProps {
  src: string;
  width?: string;
  height?: string;
}

export const Player = ({
  src,
  width = "100%",
  height = "500px",
}: PlayerProps) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      allowFullScreen={true}
      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
    ></iframe>
  );
};
