import cn from "classnames";
import Icon from "../icon/Icon";
import Slider from 'react-slick';
import styles from "./TextSlider.module.sass";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }: any) => (
  <button {...props}>{children}</button>
);

const TextSlider = ({ contents, className }: any) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
  };

  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <Slider className="review-slider" {...settings}>
            {contents.map((content: any, index: number) => (
              <div className={styles.slide} key={index}>
                <div className={cn("review-item", styles.item)}>
                  <div className={styles.logo}>
                    <img src={content.image.url} alt={content.image.description} />
                  </div>
                  <div className={styles.title}>{content.text}</div>
                  <div className={styles.author}>{content.smallText1}</div>
                  <div className={styles.position}>{content.smallText2}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
