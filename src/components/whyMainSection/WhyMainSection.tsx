import cn from "classnames";
import styles from './WhyMainSection.module.sass';
import ImageTextComp from "../imageText/ImageTextComp";

const WhyMainSection = ({ contents }: any) => {
  return (
    <div className={cn(styles.main_div)}>
      {
        contents.map((content: any, index: number) => (
            <ImageTextComp
              content={content}
              isFirst={index === 0 ? true : false}
              isLast={index === contents.length - 1 ? true : false}
              key={index}
            />
        ))
      }
    </div>
  )
}

export default WhyMainSection;