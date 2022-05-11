import cn from "classnames";
import Link from "next/link";
import Icon from "../icon/Icon";
import Image from "../image/Image";
import styles from "./CardBullets.module.sass"
import ScrollParallax from "../ScrollParallax";


const CardBullets = ({ contents }: any) => {
  const bulletsContent = contents.bulletsContainer;

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              src={contents.logo.url}
              alt={contents.logo.description}
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              src={contents.image.url}
              alt={contents.image.description}
            />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}> {contents.title} </h2>
          <div className={styles.info}>
            {contents.subtitle}
          </div>
          <div className={styles.list}>
            {bulletsContent.map((content: any, index: number) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.icon}
                >
                  <img 
                    src={content.image.url}
                    alt={content.image.description}
                  />
                </div>
                <div className={styles.details}>
                  <div className={styles.subtitle}>{content.title}</div>
                  <div className={styles.content}>{content.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.btns}>
            <Link href={`/${contents.ctaPageLink}`}>
              <a className={cn("button", styles.button)}>
                {contents.ctaText}
                <Icon name="arrow-right" size="20" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBullets;
