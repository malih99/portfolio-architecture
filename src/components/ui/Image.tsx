import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  ratio?: string;
};

const Img: React.FC<Props> = ({ ratio, alt = "", className = "", ...rest }) => {
  return ratio ? (
    <div
      className={`relative w-full ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <img
        {...rest}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  ) : (
    <img {...rest} alt={alt} className={className} loading="lazy" />
  );
};

export default Img;
