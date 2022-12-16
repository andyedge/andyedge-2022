import cn from "classnames";
import Icon from "../icon/Icon";
import Button from "../button/Button";
import CustomImage from "../image/Image";
import { useEffect, useState } from "react";
import styles from "./Solution.module.sass";
import Solution from "../../models/generic/solution.model";

declare interface solutionImagesType {
  url: string
  description: string
  style: any
}

const Solution = ({ data }: { data: Solution }) => {
  const {
    solutionTitle,
    solutionText,
    solutionSubtitle,
    solutionSteps,
    solutionImages,
    solutionBackgroundImage,
    solutionCta
  } = data;
  const [solutionImagesState, setSolutionImagesState] = useState<solutionImagesType[]>([]);

  useEffect(() => {
    const solutionImgs: solutionImagesType[] = [];

    solutionImages.map((image: any, index: number) => {
      const imageForState: solutionImagesType = {
        url: image.url,
        description: image.description,
        style: index === 0 ? { opacity: 1 } : { opacity: 0 }
      }
      solutionImgs.push(imageForState);
    });

    setSolutionImagesState(solutionImgs);
  }, []);

  const showImage = (index: number) => {
    const solutionImgs = solutionImagesState.map((image: any, imageIndex: number) => {
      imageIndex === index ?
        image.style = { opacity: 1 }
        :
        image.style = { opacity: 0 }

      return image
    });
    setSolutionImagesState(solutionImgs);
  }

  return (
    <div className={cn("section-bg", styles.container)}>
      {solutionBackgroundImage && (
        <div className={styles.bg_div}>
          <CustomImage src={{image: solutionBackgroundImage}} />
        </div>
      )}
      <div className={cn("container")}>
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
                    onClick={() => { showImage(index) }}
                  >
                    <div className={styles.link}>
                      <div className={styles.icon}>
                        <img src={step.image.url} alt={step.image.description} />
                      </div>
                      <div className={styles.subtitle}>{step.title}</div>
                      <div className={styles.arrow}>
                        <Icon name="arrow-right-empty" size={14} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.preview}>
                {
                  solutionImagesState.map((image: any, index: number) => (
                    <div className={styles.solution_images} style={image.style} key={'imgstate_' + index}>
                      <CustomImage src={{image}} props={{ style: { borderRadius: '16px' } }} />
                    </div>
                  ))
                }
              </div>
              <Button link={solutionCta}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
