import cn from "classnames";
import Icon from "../icon/Icon";
import { useState } from 'react';
import Slider from "react-slick";
import { MutableRefObject } from "react";
import CustomImage from '../image/Image';
import CardModal from "../cardModal/CardModal";
import ScrollParallax from "../ScrollParallax";
import styles from "./CardsContainer.module.sass";
import StandardCardContainer from "../../models/generic/standardCardContainer.model";
import { useIsMobile } from '../../helpers/hooks';

declare interface CardsContainerProps {
  contents: StandardCardContainer[]
  scrollToRef: MutableRefObject<null> | null
  modals?: StandardCardContainer[]
  smallSpaccing?: boolean
}

const SlickArrow = ({ currentSlide, slideCount, children, ...props }: any) => (
  <button {...props}>{children}</button>
);

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
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
}

const CardsContainer = ({ contents, scrollToRef, modals, smallSpaccing }: CardsContainerProps) => {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const isVisible = modalIndex !== null;
  const isMobile = useIsMobile();
  return (
    <div className={cn("section", styles.section, smallSpaccing && styles.small_spacing)}>
      <div className={styles.anchor} ref={scrollToRef}></div>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          {isVisible && modals && (
            <CardModal
              visible={isVisible}
              modals={modals}
              modalIndex={modalIndex !== null ? modalIndex : 0}
              onClose={() => setModalIndex(null)}
            />
          )}
          <ScrollParallax initiallyVisible={isMobile}>
            <Slider className="programs-slider" {...settings}>
              {contents.map((content: StandardCardContainer, index: number) => (
                <div className={styles.slide} key={index}>
                  <div className={cn("programs-item", styles.item)}>
                    <div>
                      <div className={styles.icon}>
                        <CustomImage src={{ image: content.icon }} />
                      </div>
                      <h5 className={styles.subtitle}>{content.title}</h5>
                      <p className={styles.content}>{content.text}</p>
                    </div>
                    {content.leftCtaText && (
                      <button
                        className={cn("button-default", "button-stroke", styles.button, styles.button_card)}
                        onClick={() => setModalIndex(index)}
                      >
                        {content.leftCtaText}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
