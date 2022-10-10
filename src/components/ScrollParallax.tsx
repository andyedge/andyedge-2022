import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const ScrollParallax = ({
  className,
  animateIn,
  delay,
  initiallyVisible,
  style,
  children,
}: any) => {
  return (
    <ScrollAnimation
      className={className}
      animateIn={animateIn ? animateIn : "fadeInUp"}
      animateOnce={true}
      initiallyVisible={initiallyVisible}
      duration={1}
      offset={0}
      delay={delay}
      style={style}
    >
      {children}
    </ScrollAnimation>
  );
};

export default ScrollParallax;
