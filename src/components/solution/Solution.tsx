import cn from "classnames";
import Icon from "../icon/Icon";
import Link from "next/link";
import styles from "./Solution.module.sass";
import ScrollParallax from "../ScrollParallax";
import ImageType from "../../models/image.model";

const items = [
  {
    title: "Program Videos",
    url: "/class01",
    color: "#45B26B",
    images: "/images/content/lightning.svg",
    alt: "lightning",
  },
  {
    title: "Premium Class",
    url: "/class02",
    color: "#9757D7",
    images: "/images/content/lightning.svg",
    alt: "lightning",
  },
  {
    title: "Exclusive Trainers",
    url: "/class02",
    color: "#3772FF",
    images: "/images/content/lightning.svg",
    alt: "lightning",
  },
];

const Solution = ({ solutionTitle, solutionText, solutionSubtitle, solutionSteps, solutionImages }: any) => {

  return (
    <div className={cn("section-bg", styles.book)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.card}>
          <h2 className={styles.title}>
            {solutionTitle}
          </h2>
          <p className={styles.paragraph}>
            {solutionText}
          </p>
          <div className={styles.wrap}>
            <div className={styles.col}>
              <div className={cn("stage-small", styles.stage)}>
                {solutionSubtitle}
              </div>
              <div className={styles.list}>
                {solutionSteps.map((step: any, index: number) => (
                  <div 
                    className={styles.item} 
                    key={index}
                    onClick={() => {console.log('Hola')}}
                  >
                    <div className={styles.link}>
                      <div
                        className={styles.icon}
                      >
                        <img src={step.image.url} alt={step.image.description} />
                      </div>
                      <div className={styles.subtitle}>{step.title}</div>
                      <div className={styles.arrow}>
                        <Icon name="arrow-right-empty" size="14" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.preview}>
                {
                  solutionImages.map((image: ImageType) => (
                    <img
                      src={image.url}
                      alt={image.description}
                    />
                  ))
                }
              </div>
              <Link href="/">
                <a className={cn("button", styles.button)}>
                  Pearson case study
                  <Icon name="arrow-right" size="20" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
