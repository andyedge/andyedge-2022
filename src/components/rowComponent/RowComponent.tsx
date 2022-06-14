import React from "react";
import cn from "classnames";
import Link from "next/link";
import Icon from "../icon/Icon";
import Slider from "react-slick";
import styles from "./RowComponent.module.sass";
import ScrollParallax from "../ScrollParallax";
import StandardContainer from "../../models/standardContainer.model";
import RichText from "../RichText";

declare interface RowComponentProps {
  headContent: StandardContainer
  items: StandardContainer[]
}

const itemsC = [
  {
    title: "The Fitness Pro Philosophy",
    image: "/images/lifestyle-pic-1.png",
    content:
      "Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind.",
  },
  {
    title: "Quickly find the class you want",
    image: "/images/lifestyle-pic-2.png",
    content:
      "Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind.",
  },
  {
    title: "Keep track of calories & macros",
    image: "/images/lifestyle-pic-3.png",
    content:
      "Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind.",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }: any) => (
  <button {...props}>{children}</button>
);

const RowComponent = ({ headContent, items }: RowComponentProps) => {
  console.log(items);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size={14} />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size={14} />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 100000,
        settings: "unslick",
      },
    ],
  };

  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          {
            headContent.preTitle ?
              <div className={cn("stage-small", styles.stage)}>{headContent.preTitle}</div>
              :
              null
          }
          <h2 className={cn("h2", styles.title)}>{headContent.title}</h2>
          <div className={styles.info}>
            <RichText richText={headContent.text} />            
          </div>
          <Link href="#">
            <a className={cn("button-stroke", styles.button)}>
              <span>{headContent.ctaText}</span>
              <Icon name="arrow-right" size={10} />
            </a>
          </Link>
        </div>
        <div className={styles.wrap}>
          <Slider
            className={cn("lifestyle-slider", styles.slider)}
            {...settings}
          >
            {items.map((item, index) => (
              <ScrollParallax className={styles.item} key={index}>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <div className={styles.details}>
                      <div className={styles.number}>{item.title}.</div>
                      <div className={styles.category}>{item.subtitle}</div>
                      <div className={styles.content}>
                        <RichText richText={item.text} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.col}>
                    <img
                      src={item.logo.url}
                      alt={item.logo.description}
                    />
                  </div>
                </div>
              </ScrollParallax>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RowComponent;
