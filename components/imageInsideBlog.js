import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ImageInsideBlog({ ...props }) {
  return (
    <Zoom>
      <Image
        src={props.src}
        alt="image"
        width={props.width}
        height={props.height}
      ></Image>
    </Zoom>
  );
}
