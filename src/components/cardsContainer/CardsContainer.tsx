import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./CardsContainer.module.sass";
import ScrollParallax from "../ScrollParallax";

const items = [
  {
    title: "Beginners",
    url: "/class02-details",
    color: "#45B26B",
    image: "/images/content/user.svg",
    alt: "user",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
  {
    title: "Advanced",
    url: "/class02-details",
    color: "#9757D7",
    image: "/images/content/medal-1.svg",
    alt: "medal",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
  {
    title: "Premium",
    url: "/class02-details",
    color: "#3772FF",
    image: "/images/content/lightning.svg",
    alt: "lightning",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
];

const CardsContainer = ({ contents, scrollToRef }: any) => {
  console.log(contents);
  return (
    <div className={cn('section-pb', styles.section)}>
      <div className={styles.anchor} ref={scrollToRef}></div>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          {contents.map((content: any, index: number) => (
            <ScrollParallax key={index}>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <img src={content.icon.url} alt={content.icon.description} />
                </div>
                <div className={styles.subtitle}>{content.title}</div>
                <div className={styles.content}>{content.text}</div>
                <Link href={`/${content.leftCtaLink}`}>
                  <div className={cn("button-stroke", styles.button, styles.button_card)}>
                    {content.leftCtaText}
                  </div>
                </Link>
              </div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
