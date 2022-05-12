import cn from "classnames";
import Icon from "../icon/Icon";
import Link from "next/link";
import styles from "./Solution.module.sass";
import Image from "next/image";
import { useEffect, useState } from "react";

interface solutionImagesType {
  url: string
  description: string
  style: any
}

const Solution = ({ solutionTitle, solutionText, solutionSubtitle, solutionSteps, solutionImages }: any) => {
  const [solutionImagesState, setSolutionImagesState] = useState<solutionImagesType[]>([]);

  useEffect(() => {
    const solutionImgs: solutionImagesType[] = [];
    
    solutionImages.map((image: any, index: number) => {
      const imageForState: solutionImagesType = {
        url: image.url,
        description: image.description,
        style: {opacity: 0}
      }
      solutionImgs.push(imageForState);
    });

    setSolutionImagesState(solutionImgs);
  }, []);

  const showImage = (index: number) => {
    const solutionImgs = JSON.parse(JSON.stringify(solutionImagesState));
    const imgOpacity = solutionImgs[index].style.opacity;
    solutionImgs[index].style = imgOpacity === 1 ? {opacity: 0} : {opacity: 1};
    setSolutionImagesState(solutionImgs);
  }

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
                    onClick={() => {showImage(index)}}
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
                  solutionImagesState.map((image: any) => (
                    <img
                      style={image.style}
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
