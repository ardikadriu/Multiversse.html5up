import Image, { StaticImageData } from "next/image";

const ImgBgc = ({
  position,
  src,
}: {
  position: string;
  src: StaticImageData;
}) => {
  return (
    <span className="image  fill">
      <Image
        src={src}
        fill
        alt="Image background"
        style={{ backgroundPosition: position }}
      />
    </span>
  );
};

export default ImgBgc;
