import cn from "classnames";
import Link from "next/link";
import Icon from "../icon/Icon";
import Slider from "react-slick";
import styles from "./CardsContainer.module.sass";
import ScrollParallax from "../ScrollParallax";
import StandardCardContainer from "../../models/standardCardContainer.model";
import { MutableRefObject, useState } from "react";
import CardModal from "../cardModal/CardModal";

declare interface CardsContainerProps {
  contents: StandardCardContainer[]
  modals: StandardCardContainer[]
  scrollToRef: MutableRefObject<null>
}

const SlickArrow = ({ currentSlide, slideCount, children, ...props }: any) => (
  <button {...props}>{children}</button>
);

const CardsContainer = ({ contents, modals, scrollToRef }: CardsContainerProps) => {  
  const [visibleModal, setVisibleModal] = useState(false);
  console.log(modals);
  const settings = {
    infinite: false,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 3,
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
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn("section", styles.section)}>
      <div className={styles.anchor} ref={scrollToRef}></div>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <Slider className="programs-slider" {...settings}>
            {contents.map((content: any, index: number) => (
              <>
                <ScrollParallax className={styles.slide} key={index}>
                  <div className={cn("programs-item", styles.item)}>
                    <div className={styles.icon}>
                      <img src={content.icon.url} alt={content.icon.description} />
                    </div>
                    <div className={styles.subtitle}>{content.title}</div>
                    <div className={styles.content}>{content.text}</div>
                    <div 
                      className={cn("button-stroke", styles.button, styles.button_card)}
                      onClick={() => setVisibleModal(true)}
                      >
                      {content.leftCtaText}
                    </div>
                  </div>
                </ScrollParallax>
                <CardModal
                  visible={visibleModal}
                  item={modals[index]}
                  onClose={() => setVisibleModal(false)}
                />
              </>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
