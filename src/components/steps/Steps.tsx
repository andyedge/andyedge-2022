import React, { FC } from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import ScrollParallax from "../ScrollParallax";
import Image from 'next/image';

declare interface StepsProps {
  stepsTitle: string
  stepsText: string,
  stepsArray: any[],
  scrollToRef: any
}

const Steps: FC<StepsProps> = ({ stepsTitle, stepsText, stepsArray, scrollToRef } : StepsProps) => (
  <div className={cn("section", styles.section)} ref={scrollToRef}>
    <div className={cn("container", styles.container)}>
      <div className={styles.head}>
        <h2 className={cn("h2", styles.title)}> {stepsTitle} </h2>
        <p className={styles.info}>
          {stepsText}
        </p>
      </div>
      <div className={styles.list}>
        {stepsArray.map((step: any, index: any) => (            
          <ScrollParallax className={styles.item} key={index}>
            <div
              className={styles.preview}
            >
              <Image 
                src={'https:' + step.image.url} 
                alt={step.image.description}
                layout='fill'
              />
            </div>
            <h6 className={styles.number}> {step.preTitle} </h6>
            <h4 className={styles.subtitle}> {step.title} </h4>
            <p className={styles.content}> {step.text} </p>
          </ScrollParallax>
        ))}
      </div>
    </div>
  </div>
)

export default Steps;
