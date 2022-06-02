import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styles from './button.module.sass'
import Icon from '../icon/Icon';

declare interface ButtonProps {
    link: string | undefined
    text: string | undefined
    showIcon?: boolean
    size?: 'default' | 'small' | 'tiny'
}

const Button: FC<ButtonProps> = ({ link, text, size = 'default', showIcon = true } : ButtonProps) => {
    return (
        <div className={cn(styles.container, styles[size])}>
            <Link href={`/${link}`}>
            <a className={cn('button', styles.button)}>
                {text}
                {showIcon && (
                    <Icon name='arrow-right' size={20} />
                )}
            </a>                
            </Link>
        </div>
    )
}

export default Button