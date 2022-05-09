import React from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Icon from "../icon/Icon";
import ScrollButton from "../scrollButton/ScrollButton";
import Image from "../image/Image";
//import ScrollParallax from "../../../components/ScrollParallax";

const Hero = ({ pageProps, scrollToRef }: any) => {

  return (
    <div className={styles.hero}>
      <img
        src={pageProps.backgroundImage.fields.file.url}
      />
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            {pageProps.preTitle}
          </div>
          <h1 className={cn("h1", styles.title)}>
            {pageProps.title}
          </h1>
          <div className={styles.text}>
            {pageProps.subtitle}
          </div>
          {'ctaText' in pageProps && ('ctaPageLink' in pageProps || 'ctaVideoLink' in pageProps) ?
            <div className={styles.btns}>
              <Link href={`/${pageProps.ctaPageLink}`}>
                <a className={cn("button", styles.button)}> {pageProps.ctaText} </a>
              </Link>
            </div>
            :
            null
          }
        </div>
        <ScrollButton
          onScroll={() =>
            scrollToRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className={styles.scroll}
        />
        <div className={styles.gallery}>
          <button className={cn("play", styles.play)}>
            <Icon name="play" size="40" />
          </button>
          {/*<ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <Image
              srcSet="/images/content/watch@2x.png 2x"
              srcSetDark="/images/content/watch-dark@2x.png 2x"
              src="/images/content/watch.png"
              srcDark="/images/content/watch-dark.png"
              alt="Watch"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={900}
          >
            <img
              srcSet="/images/content/ball@2x.png 2x"
              src="/images/content/ball.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={600}
          >
            <img
              srcSet="/images/content/bottle@2x.png 2x"
              src="/images/content/bottle.png"
              alt="Bottle"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={1200}
          >
            <img
              srcSet="/images/content/ball-black@2x.png 2x"
              src="/images/content/ball-black.png"
              alt="Ball black"
            />
            </ScrollParallax>*/}
        </div>
      </div>
    </div>
  );
};

export default Hero;
