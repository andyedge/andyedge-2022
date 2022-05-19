import cn from "classnames";
import ImageTextComp from "../imageText/ImageTextComp";
import styles from './WhyMainSection.module.sass';

const WhyMainSection = ({ contents }: any) => {
  return (
    <div>
      {
        contents.map((content: any, index: number) => (
          <ImageTextComp
            content={content}
            isFirst={index === 0 ? true : false}
            key={index}
          />
        ))
      }
    </div>
  )
}

export default WhyMainSection;