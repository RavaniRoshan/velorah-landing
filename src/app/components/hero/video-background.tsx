import { ImageWithFallback } from "../figma/ImageWithFallback";
import heroImage from "../../../imports/image.png";

export function VideoBackground() {
  return (
    <ImageWithFallback
      src={heroImage}
      alt="Coastal seascape framed by a cave mouth and yellow wildflowers"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
  );
}
