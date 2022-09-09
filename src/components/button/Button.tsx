import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import CustomImage from '../image/Image'
import styles from './button.module.sass'
import LinkType from '../../models/generic/link.model'
import EmbedContent from './embedContent/EmbedContent'

declare interface ButtonProps {
  link: LinkType
  func?: () => void
  size?: 'big' | 'default' | 'small' | 'tiny' | 'auto'
  scroll?: boolean
}

const Button: FC<ButtonProps> = ({ link, func, size = 'default', scroll = true } : ButtonProps) => {
  if(!link) {
    return null
  }
  
  const iconExists = link.icon && link.icon?.url !== '' ? true : false;
  const whiteButtonClass = link.buttonColor === 'White' ? 'button-stroke' : 'button-default';

  switch (link.action) {
    case 'Redirect':
      return (
        <Link href={`/${link.url}`} scroll={scroll}>
          <button className={cn(whiteButtonClass, styles[size])}>
            <a className={cn(styles.button, iconExists ? styles.button_a : '')}>
              {link.text}
            </a>
          {link.icon && link.icon?.url !== '' ?
            <div className={cn(styles.icon_wrapper)}>
              <CustomImage src={{image: link.icon}} />
            </div>
            :
            null
          }
          </button>
        </Link>
      )
    case 'External':
      return (
        <button className={cn(whiteButtonClass, styles.button, styles[size])}
          onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}>
          {link.text}
          {
            link.icon && link.icon?.url !== '' ?
              <div className={cn(styles.icon_wrapper)}>
                <CustomImage
                  src={{image: link.icon}}
                />
              </div>
              :
              null
          }
        </button>
      )
    case 'Function':
      return (
        <button
          className={cn(whiteButtonClass, styles[size], styles.button, iconExists ? styles.button_a : '')}
          onClick={func}>
          {link.text}
          {
            link.icon && link.icon?.url !== '' ?
              <div className={cn(styles.icon_wrapper)}>
                <CustomImage
                  src={{image: link.icon}}
                />
              </div>
              :
              null
          }
        </button>
      )
    case 'Embed':
      return (
        <EmbedContent props={{
          whiteButtonClass,
          iconExists,
          link,
          size
        }} />
      )
    default:
      return null
  }
}

export default Button