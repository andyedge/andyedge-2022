import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import ScrollParallax from "../ScrollParallax";
import Image from 'next/image';

const Steps = ({ stepsTitle, stepsText, stepsArray, scrollToRef }: any) => {

  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}> {stepsTitle} </h2>
          <div className={styles.info}>
            {stepsText}
          </div>
        </div>
        <div className={styles.list}>
          {stepsArray.map((step: any, index: any) => (            
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.preview}
              >
                <Image 
                  src={'https:' + step.fields.image.fields.file.url} 
                  alt={step.fields.image.fields.description}
                  layout='fill'
                />
              </div>
              <div className={styles.number}> {step.fields.preTitle} </div>
              <div className={styles.subtitle}> {step.fields.title} </div>
              <div className={styles.content}> {step.fields.stepText} </div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
