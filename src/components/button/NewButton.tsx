import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Icon from '../icon/Icon';
import styles from './button.module.sass'
import LinkType from '../../models/generic/link.model';

declare interface ButtonProps {
  link: LinkType
  func?: () => {}
  size?: 'default' | 'small' | 'tiny'
}

const NewButton: FC<ButtonProps> = ({ link, func, size = 'default' }: ButtonProps) => {

  switch (link.action) {
    case 'Redirect':
      return (
        <div className={cn(styles.container, styles[size])}>
          <Link href={`/${link.url}`}>
            <a className={cn('button', styles.button)}>
              {link.text}
              <Icon name='arrow-right' size={20} />
            </a>
          </Link>
        </div>
      )
    case 'External':
      return (
        <div className={cn(styles.container, styles[size])}>
          <a className={cn('button', styles.button)} href={link.url}>
            {link.text}
            <Icon name='arrow-right' size={20} />
          </a>
        </div>
      )
    case 'Function':
      return (
        <div
          className={cn(styles[size], 'button', styles.button)}
          style={{ cursor: 'pointer' }}
          onClick={func}>
          {link.text}
          <Icon name='arrow-right' size={20} />
        </div>
      )
    default:
      return null
  }
}

export default NewButton