import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styles from './button.module.sass'
import Icon from '../icon/Icon';

declare interface ButtonProps {
    link: string
    text: string
}

const Button: FC<ButtonProps> = ({ link, text } : ButtonProps) => {
    return (
        <div className={styles.container}>
            <Link href={`/${link}`}>
            <a className={cn('button', styles.button)}>
                {text}
                <Icon name='arrow-right' size='20' />
            </a>                
            </Link>
        </div>
    )
}

export default Button