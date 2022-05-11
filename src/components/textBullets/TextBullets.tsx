import cn from "classnames";
import Link from "next/link";
import styles from "./TextBullets.module.sass";
import ScrollParallax from "../ScrollParallax";
import RichText from "../RichText";
import Icon from "../icon/Icon";

const items = [
  "Fitness Pro Cloud",
  "Syncs with Google Fit",
  "Syncs with Apple Health",
  "Track your progress easily",
  "Intuitive and clean design",
];

const TextBullets = ({ contents }: any) => {
  const bulletsContent = contents.bulletsContainer;

  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <img />
          </div>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img />
          </ScrollParallax>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>
            {contents.title}
          </h2>
          <div className={styles.info}>
            <RichText
              richText={contents.text}
            />
          </div>
          <ul className={styles.list}>
            {bulletsContent.map((content: any, index: number) => (
              <li className={styles.item} key={index}>
                {content.title}
              </li>
            ))}
          </ul>
          {contents.ctaText !== null && (contents.ctaPageLink !== null || contents.ctaVideoLink !== null) ?
            <div className={styles.btns}>
              <Link href={`/${contents.ctaPageLink}`}>
                <a className={cn("button", styles.button)}>
                  {contents.ctaText}
                  <Icon name="arrow-right" size="20" />
                </a>                
              </Link>
            </div>
            :
            null
          }
        </div>
      </div>
    </div>
  );
};

export default TextBullets;
