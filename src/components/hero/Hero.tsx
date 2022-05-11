import React from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Icon from "../icon/Icon";
import ScrollButton from "../scrollButton/ScrollButton";
import ScrollParallax from "../ScrollParallax";
import Image from "../image/Image";

const Hero = ({ contents, scrollToRef }: any) => {

  return (
    <div className={styles.hero}>
      {contents.backgroundImage !== {} ?
        <img
          src={contents.backgroundImage.url}
          alt={contents.description}
        />
        :
        null
      }
      <div className={cn("container", styles.container)}>
        <ScrollParallax className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            {contents.preTitle}
          </div>
          <h1 className={cn("h1", styles.title)}>
            {contents.title}
          </h1>
          <div className={styles.text}>
            {contents.subtitle}
          </div>
          {contents.ctaText !== null && (contents.ctaPageLink == null  || contents.ctaVideoLink !== null) ?
            <div className={styles.btns}>
              <Link href={`/${contents.ctaPageLink}`}>
                <a className={cn("button", styles.button)}> {contents.ctaText} </a>
              </Link>
            </div>
            :
            null
          }
        </ScrollParallax>
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
        </div>
      </div>
    </div> 
  );
};

export default Hero;
