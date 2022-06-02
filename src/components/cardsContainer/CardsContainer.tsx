import cn from "classnames";
import Link from "next/link";
import Icon from "../icon/Icon";
import Slider from "react-slick";
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

const SlickArrow = ({ currentSlide, slideCount, children, ...props }: any) => (
  <button {...props}>{children}</button>
);

const CardsContainer = ({ contents, scrollToRef }: any) => {
  const settings = {
    infinite: false,
    speed: 500,
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
        breakpoint: 768,
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
    <div className={cn("section-pb", styles.section)}>
      <div className={styles.anchor} ref={scrollToRef}></div>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <Slider className="programs-slider" {...settings}>
            {contents.map((content: any, index: number) => (
              <ScrollParallax className={styles.slide} key={index}>
                <div className={cn("programs-item", styles.item)}>
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
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
