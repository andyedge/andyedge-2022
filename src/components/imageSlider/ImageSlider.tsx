import cn from "classnames";
import Slider from "react-slick";
import CustomImage from "../image/Image";
import styles from "./ImageSlider.module.sass";
import ImageType from "../../models/generic/image.model";

declare interface ImageSliderProps {
  contents: ImageType[],
  section?: string
}


const ImageSlider = ({ contents, section = 'cases' }: ImageSliderProps) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  };

  return (
    <Slider className="workout-slider" {...settings}>
      {contents.map((image: ImageType, index: number) => (
        <div className={styles.slide} key={index}>
          <div className={cn("workout-item", styles.item)}>
            <div className={styles[section]}>
              <CustomImage src={{image}}/>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default ImageSlider;