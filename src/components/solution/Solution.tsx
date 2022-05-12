import cn from "classnames";
import Icon from "../icon/Icon";
import styles from "./Solution.module.sass";
import ScrollParallax from "../ScrollParallax";

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

const Solution = () => {
  return (
    <div className={cn("section-bg", styles.book)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.card}>
          <h2 className={styles.title}>
            Explore fitness pro program
          </h2>
          <p className={styles.paragraph}>
            Establishing a coherent experience for your users will help you diminish their desire to jump onto another option.
          </p>
          <div className={styles.wrap}>
            <div className={styles.col}>              
              <div className={styles.list}>
                {items.map((x, index) => (
                  <div className={styles.item} key={index}>
                    <div className={styles.link}>
                      <div
                        className={styles.icon}
                        style={{ backgroundColor: x.color }}
                      >
                        <img src={x.images} alt={x.alt} />
                      </div>
                      <div className={styles.subtitle}>{x.title}</div>
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
                <img
                  srcSet="/images/content/bottle-2@2x.png 2x"
                  src="/images/content/bottle-2.png"
                  alt="Bottle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
