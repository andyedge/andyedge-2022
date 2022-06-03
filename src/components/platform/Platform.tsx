import cn from "classnames";
import Icon from "../icon/Icon";
import CustomImage from "../image/Image";
import styles from "./Platform.module.sass";
import ScrollParallax from "../ScrollParallax";


const Platform = ({title1, stepsContainer}: any) => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("h2", styles.title)}> {title1} </h2>
        <div className={styles.list}>
          {stepsContainer.map((step: any, index: number) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.preview}
              >
                <CustomImage src={step.image}/>
              </div>
              <div className={styles.details}>
                <div
                  className={cn("status-stroke-black", styles.status)}
                >
                  {step.preTitle}
                </div>
                <div className={styles.subtitle}>{step.title}</div>
                <div className={styles.description}>{step.text}</div>
                <a
                  href="/#"
                  className={cn("button-small", styles.button)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Discover</span>
                  <Icon name="arrow-right" size={10} />
                </a>
              </div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;
