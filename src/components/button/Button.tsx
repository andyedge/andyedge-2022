import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import CustomImage from '../image/Image'
import styles from './button.module.sass'
import LinkType from '../../models/generic/link.model';

declare interface ButtonProps {
  link: LinkType
  func?: () => void
  size?: 'default' | 'small' | 'tiny'
}

const Button: FC<ButtonProps> = ({ link, func, size = 'default' }: ButtonProps) => {
  const iconExists = link.icon && link.icon?.url !== '' ? true : false;
  const isWhiteButton = link.buttonColor === 'White' ? 'button-stroke': '';

  switch (link.action) {
    case 'Redirect':
      return (
        <button className={cn('button-default', isWhiteButton, styles[size])}>
          <Link href={`/${link.url}`}>
            <a className={cn(styles.button, iconExists ? styles.button_a : '')}>
              {link.text}
            </a>
          </Link>
          {
            link.icon && link.icon?.url !== '' ?
              <div className={cn(styles.icon_wrapper)}>
                <CustomImage
                  src={link.icon}
                />
              </div>
              :
              null
          }
        </button>
      )
    case 'External':
      return (
        <button className={cn('button-default', isWhiteButton, styles[size])}>
          <a className={cn(styles.button, iconExists ? styles.button_a : '')} href={link.url} target='_blank' rel='noopener noreferrer'>
            {link.text}
          </a>
            {
              link.icon && link.icon?.url !== '' ?
                <div className={cn(styles.icon_wrapper)}>
                  <CustomImage
                    src={link.icon}
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
          className={cn('button-default', isWhiteButton, styles[size], styles.button, iconExists ? styles.button_a : '')}
          onClick={func}>
          {link.text}
          {
            link.icon && link.icon?.url !== '' ?
              <div className={cn(styles.icon_wrapper)}>
                <CustomImage
                  src={link.icon}
                />
              </div>
              :
              null
          }
        </button>
      )
    default:
      return null
  }
}

export default Button