import { useState, type ImgHTMLAttributes } from "react";

type ImgProps = ImgHTMLAttributes<HTMLImageElement>;

// Photographic <img> wrapper: shows a shimmering skeleton until the image
// paints, so slow network loads don't flash blank/broken boxes.
function Img({ className, onLoad, ...props }: ImgProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      className={[
        "img-loading",
        loaded && "is-loaded",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
      {...props}
    />
  );
}

export default Img;
