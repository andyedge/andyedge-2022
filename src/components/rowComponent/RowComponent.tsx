import React from "react";
import cn from "classnames";
import Link from "next/link";
import Icon from "../icon/Icon";
import Slider from "react-slick";
import styles from "./RowComponent.module.sass";
import ScrollParallax from "../ScrollParallax";
import StandardContainer from "../../models/generic/standardContainer.model";
import RichText from "../RichText";
import CustomImage from "../image/Image";

declare interface RowComponentProps {
  headContent: StandardContainer
  items: StandardContainer[]
  isTitle?: boolean
  isPearson?: boolean
}

const SlickArrow = ({ currentSlide, slideCount, children, ...props }: any) => (
  <button {...props}>{children}</button>
);

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
      settings: "unslick" as "unslick",
    },
  ],
};

const RowComponent = ({ headContent, items, isTitle, isPearson } : RowComponentProps) => {
  return (
    <section className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn(styles.head, isPearson && styles.head_extra_margin)}>
          {
            headContent.preTitle ?
              <h6>{headContent.preTitle}</h6>
              :
              null
          }
          {isTitle ?
            <h2 className={cn("h2", styles.title)}>{headContent.title}</h2>
            :
            <h3 className={cn("h3", styles.subtitle)}>{headContent.title}</h3>
          }
          {
            headContent.text ?
              <div className={styles.info}>
                <RichText richText={headContent.text} />
              </div>
              :
              null
          }
          {
            headContent.ctaText ?
              <Link href="#">
                <a className={cn("button-stroke", styles.button)}>
                  <span>{headContent.ctaText}</span>
                  <Icon name="arrow-right" size={10} />
                </a>
              </Link>
              :
              null
          }
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
                      <h4 className={styles.number}>{item.title}</h4>
                      <h6 className={styles.category}>{item.subtitle}</h6>
                      {
                        item.text ?
                          <div className={styles.content}>
                            <RichText richText={item.text} />
                          </div>
                          :
                          null
                      }
                    </div>
                  </div>
                  <div className={styles.col}>
                    <img
                      className={isPearson ? styles.image_shadow : styles.image_default}
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
    </section>
  );
};

export default RowComponent;
