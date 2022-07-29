import cn from "classnames";
import styles from './WhyMainSection.module.sass';
import ImageTextComp from "../imageText/ImageTextComp";
import StandardContainer from "../../models/generic/standardContainer.model";

declare interface WhyMainSectionProps {
  contents: StandardContainer[]
}

const WhyMainSection = ({ contents }: WhyMainSectionProps) => {
  return (
    <div className={cn(styles.main_div)}>
      {
        contents.map((content: StandardContainer, index: number) => (
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