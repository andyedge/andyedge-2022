import Image from 'next/image'
// import useDarkMode from '@fisch0920/use-dark-mode'
import ImageModel from '../../models/generic/image.model'

declare interface CustomImageProps {
  src: ImageModel
  props?: {
    className?: string
    style?: Object
    priority?: boolean
  }
}

const CustomImage = ({ src, props } : CustomImageProps) => {
  // const darkMode = useDarkMode(false);
  return (
    <Image
      className={props?.className}
      src={'https:' + src.url}
      alt={src.description}
      layout={'fill'}
      style={props?.style}
      priority={props?.priority}
    />
  )
}

export default CustomImage;