import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Icon from '../icon/Icon';
import CustomImage from '../image/Image'
import styles from './button.module.sass'
import LinkType from '../../models/generic/link.model';

declare interface ButtonProps {
  link: LinkType
  func?: () => void
  size?: 'default' | 'small' | 'tiny'
}

const Button: FC<ButtonProps> = ({ link, func, size = 'default' }: ButtonProps) => {

  switch (link.action) {
    case 'Redirect':
      return (
        <button className={cn(styles.container, styles[size])}>
          <Link href={`/${link.url}`}>
            <a className={cn('button', styles.button)}>
              {link.text}
            </a>
          </Link>
          {
            link.icon && link.icon?.url !== '' ?
              <div>
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
        <button className={cn(styles.container, styles[size])}>
          <a className={cn('button', styles.button)} href={link.url}>
            {link.text}
            {
              link.icon?.url !== '' ?
                <Icon name='arrow-right' size={20} />
                :
                null
            }
          </a>
        </button>
      )
    case 'Function':
      return (
        <button
          className={cn(styles[size], 'button', styles.button)}
          onClick={func}>
          {link.text}
          {
            link.icon?.url !== '' ?
              <Icon name='arrow-right' size={20} />
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