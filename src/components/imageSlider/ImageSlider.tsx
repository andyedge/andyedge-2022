import cn from "classnames";
import Slider from "react-slick";
import CustomImage from "../image/Image";
import styles from "./ImageSlider.module.sass";
import ImageType from "../../models/generic/image.model";

declare interface ImageSliderProps {
  contents: ImageType[]
}


const ImageSlider = ({ contents }: ImageSliderProps) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  };

  return (//Add border-radius to slick-list, add parameters to assign slider classes
    <Slider className="workout-slider" {...settings}>
      {contents.map((image: ImageType, index: number) => (
        <div className={styles.slide} key={index}>
          <div className={cn("workout-item", styles.item)}>
            <div className={styles.preview}>
              <CustomImage src={image}/>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default ImageSlider;