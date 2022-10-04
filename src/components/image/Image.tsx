import Image, { ImageProps } from 'next/image'
import useDarkMode from '@fisch0920/use-dark-mode'
import ImageModel from '../../models/generic/image.model'
import imageLoader from '../../helpers/imageLoader'

declare interface CustomImageProps {
  src: {
    image: ImageModel,
    darkImage?: ImageModel
  }
  props?: {
    className?: string
    style?: Object
    priority?: boolean
    customAttr?: Object
    layout?: ImageProps['layout']
  }
}

const CustomImage = ({ src, props } : CustomImageProps) => {
  const darkMode = useDarkMode(false)

  if(!src || (!src.image && !src.darkImage)) {
    return null
  }

  const showDarkImage = () => darkMode.value && src.darkImage && src.darkImage.url !== ''

  const layout = props?.layout || 'fill'
  const source = showDarkImage() ? src.darkImage : src.image
  
  if(!source?.url.length) {
    return null
  }

  return (
    <Image
      className={props?.className}
      src={source?.url}
      alt={source?.description}
      layout={layout}
      style={props?.style}
      priority={props?.priority}
      loader={imageLoader}
      unoptimized={true}
     {...props?.customAttr && props.customAttr}
    />
  )
}

export default CustomImage;