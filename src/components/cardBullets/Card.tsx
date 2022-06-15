import cn from 'classnames'

import CustomImage from '../image/Image'
import styles from './CardBullets.module.sass'
import Button from '../button/Button'
import StandardContainer from '../../models/generic/standardContainer.model';

declare interface CardProps {
    contents: StandardContainer
    wrapStyle: Object
}

const Card = ({ contents, wrapStyle } : CardProps ) => (
    <div className={styles.wrap} style={wrapStyle}>
        <h2 className={cn('h2', styles.title)}> {contents.title} </h2>
        <p className={styles.info}>
            {contents.subtitle}
        </p>
        <div className={styles.list}>
            {contents.bulletsContainer?.map((bullet: any, index: number) => (
                <div className={styles.item} key={index}>
                    <div className={styles.icon}>
                        <CustomImage src={bullet.image} />
                    </div>
                    <div className={styles.details}>
                        <h5 className={styles.subtitle}>{bullet.title}</h5>
                        <p className={styles.content}>{bullet.text}</p>
                    </div>
                </div>
            ))}
        </div>
        {contents.ctaText && <Button link={contents.ctaPageLink} text={contents.ctaText} />}
    </div>
)

export default Card