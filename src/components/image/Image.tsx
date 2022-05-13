import React from "react";
import Image from "next/image";
//import useDarkMode from "use-dark-mode";

const ImageComp = ({ className, src, srcDark, srcSet, srcSetDark, alt, style }: any) => {
  // const darkMode = useDarkMode(false);

  return (
    <Image
      className={className}
      src={'https:' + src}
      alt={alt}
      layout={'fill'}
      style={style}
    />
  );
};

export default ImageComp;