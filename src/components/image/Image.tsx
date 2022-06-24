import Image, { ImageProps } from 'next/image'
// import useDarkMode from '@fisch0920/use-dark-mode'
import ImageModel from '../../models/generic/image.model'

declare interface CustomImageProps {
  src: ImageModel
  props?: {
    className?: string
    style?: Object
    priority?: boolean
    customAttr?: Object
    layout?: ImageProps['layout']
  }
}

const CustomImage = ({ src, props } : CustomImageProps) => {
  // const darkMode = useDarkMode(false);
  const layout = props?.layout || 'fill'
  return (
    <Image
      className={props?.className}
      src={'https:' + src.url}
      alt={src.description}
      layout={layout}
      style={props?.style}
      priority={props?.priority}
     {...props?.customAttr && props.customAttr}
    />
  )
}

export default CustomImage;