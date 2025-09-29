import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  ratio?: string;
  priority?: boolean;
};

type ImgWithFetchPriority = React.ImgHTMLAttributes<HTMLImageElement> & {
  fetchPriority?: "auto" | "high" | "low";
};

const Img: React.FC<Props> = ({
  ratio,
  alt = "",
  className = "",
  priority,
  ...rest
}) => {
  const common: ImgWithFetchPriority = {
    alt,
    className,
    loading: priority ? "eager" : "lazy",
    decoding: "async",
    fetchPriority: priority ? "high" : "auto",
  };

  return ratio ? (
    <div
      className={`relative w-full ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <img
        {...rest}
        {...common}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  ) : (
    <img {...rest} {...common} className={className} />
  );
};

export default Img;
