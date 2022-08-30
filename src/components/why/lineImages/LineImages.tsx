import cn from 'classnames';
import styles from './LineImages.module.sass';
import ImageTextComp from '../../imageText/ImageTextComp';
import StandardContainer from '../../../models/generic/standardContainer.model';

declare interface LineImagesProps {
  contents: StandardContainer[]
}

const LineImages = ({ contents }: LineImagesProps) => {
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

export default LineImages;