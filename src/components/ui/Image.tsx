import React, { useState } from "react";

type Base = React.ImgHTMLAttributes<HTMLImageElement> & {
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  avifSrc?: string;
  webpSrc?: string;
};

type ImgWithFetchPriority = React.ImgHTMLAttributes<HTMLImageElement> & {
  fetchPriority?: "auto" | "high" | "low";
};

const Img: React.FC<Base> = ({
  ratio,
  alt,
  className = "",
  priority,
  sizes,
  width,
  height,
  src,
  avifSrc,
  webpSrc,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);

  const common: ImgWithFetchPriority = {
    alt: alt ?? "",
    loading: priority ? "eager" : "lazy",
    decoding: "async",
    fetchPriority: priority ? "high" : "auto",
    width,
    height,
    onLoad: (e) => {
      setLoaded(true);
      rest.onLoad?.(e);
    },
  };

  const imgEl = (
    <img
      {...rest}
      {...common}
      src={src}
      sizes={sizes}
      className={
        ratio ? "absolute inset-0 w-full h-full object-cover" : className
      }
    />
  );

  const pictureEl = (children: React.ReactNode) => (
    <picture>
      {/* فقط اگر واقعاً فایل داریم */}
      {avifSrc ? <source srcSet={avifSrc} type="image/avif" /> : null}
      {webpSrc ? <source srcSet={webpSrc} type="image/webp" /> : null}
      {children}
    </picture>
  );

  if (ratio) {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ aspectRatio: ratio }}
      >
        <div
          aria-hidden
          className={`absolute inset-0 rounded-xl bg-zinc-200/60 dark:bg-white/10
            ${loaded ? "opacity-0" : "opacity-100"} transition-opacity pointer-events-none`}
        >
          <div className="h-full w-full animate-pulse bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/10" />
        </div>
        {pictureEl(imgEl)}
      </div>
    );
  }

  return pictureEl(imgEl);
};

export default Img;
