import cn from "classnames";
import Link from "next/link";
import Icon from "../icon/Icon";
import Slider from "react-slick";
import styles from "./CardsContainer.module.sass";
import ScrollParallax from "../ScrollParallax";
import StandardCardContainer from "../../models/standardCardContainer.model";
import { MutableRefObject } from "react";
import CustomImage from '../image/Image';
import CardModal from "../cardModal/CardModal";

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
    
const CardsContainer = ({ contents, modals, scrollToRef }: CardsContainerProps) => {  
  const [visibleModal, setVisibleModal] = useState<number | null> (null);

const CardsContainer = ({ contents, scrollToRef, smallSpaccing }: CardsContainerProps) => {

  return (
    <div className={cn("section", styles.section, smallSpaccing && styles.small_spacing)}>
      <div className={styles.anchor} ref={scrollToRef}></div>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          {!!visibleModal && (
            <CardModal
              visible={!!visibleModal}
              item={visibleModal && modals[visibleModal]}
              onClose={() => setVisibleModal(null)}
            />
          )}
          <Slider className="programs-slider" {...settings}>
            {contents.map((content: any, index: number) => (
              <ScrollParallax className={styles.slide} key={index}>
                <div className={cn("programs-item", styles.item)}>
                  <div>
                    <div className={styles.icon}>
                      <CustomImage src={content.icon} />
                    </div>
                    <h5 className={styles.subtitle}>{content.title}</h5>
                    <p className={styles.content}>{content.text}</p>
                  </div>
                  {content.leftCtaText && (
                    <Link href={`/${content.leftCtaLink}`}>
                      <div 
                        className={cn("button-stroke", styles.button, styles.button_card)}
                        onClick={() => setVisibleModal(index)}
                       >
                        {content.leftCtaText}
                      </div>
                    </Link>
                  )}
                </div>
              </ScrollParallax>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
