import cn from "classnames";
import styles from "./EcampImgSlider.module.sass";
import ImageSlider from "../imageSlider/ImageSlider";
import ImageType from "../../models/generic/image.model";

declare interface EcampImgSliderProps {
  sliderImages: ImageType[]
}

const EcampImgSlider = ({sliderImages}: EcampImgSliderProps) => (
  <div className={cn("container")}>
    <ImageSlider contents={sliderImages} section={'ecamp'}/>
  </div>
)

export default EcampImgSlider;