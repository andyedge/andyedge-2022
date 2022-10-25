import cn from "classnames";
import RichText from "../RichText";
import Button from "../button/Button";
import styles from "./Hero404.module.sass";
import CustomImage from '../image/Image';
import StandardContainer from "../../models/generic/standardContainer.model";

declare interface HeroProps {
  contents: StandardContainer
}

const Hero404 = ({ contents }: HeroProps) => {
  return (
    <div className={styles.hero}>
      {contents.backgroundImage.image.url && (
        <CustomImage src={contents.backgroundImage} props={{className: styles.background_image, priority: true}} />
      )}
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h1 className={cn("stage", styles.stage)}>
            {contents.preTitle}
          </h1>
          <h2 className={cn("h1", styles.title)}>
            {contents.title}
            {contents.strikeThroughTitle && (
              <>
                <br />
                <span className={styles.strike_through}> {contents.strikeThroughTitle}</span>
                {` ${contents.complementTitle}`}
              </>
            )}
          </h2>
          <p className={styles.text}>
            {contents.subtitle}
          </p>
          {contents.text && (
            <div className={styles.paragraph}>
              <RichText richText={contents.text} />
            </div>
          )}
          {contents.primaryButtonCta && (
            <Button
              link={contents.primaryButtonCta}
              size={'small'}
            />
          )}
        </div>
        <div className={styles.gallery}>
          {contents?.imagesContainer?.length ? (
            <div className={styles.gallery_img}>
              <CustomImage src={contents.imagesContainer[0]} props={{priority: true}}/>
            </div>
          ) : null }
        </div>
      </div>
    </div>
  );
};

export default Hero404;
