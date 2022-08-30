import cn from 'classnames';
import Button from '../button/Button';
import CustomImage from '../image/Image';
import styles from './CardBullets.module.sass';
import StandardContainer from '../../models/generic/standardContainer.model';

declare interface CardProps {
    contents: StandardContainer
    style: string
    hasCardStyle?: boolean
}

const Card = ({ contents, style, hasCardStyle = true } : CardProps ) => (
    <div className={cn(styles.wrap, hasCardStyle && styles.card, style)}>
        {contents.preTitle && <h6>{contents.preTitle}</h6>}
        <h2 className={cn('h2', styles.title)}> {contents.title} </h2>
        <p className={styles.info}>
            {contents.subtitle}
        </p>
        <div className={styles.list}>
            {contents.bulletsContainer?.map((bullet: any, index: number) => (
                <div className={styles.item} key={index}>
                    <div className={styles.icon}>
                        <CustomImage src={{image: bullet.image}} />
                    </div>
                    <div className={styles.details}>
                        <h5 className={styles.subtitle}>{bullet.title}</h5>
                        <p className={styles.content}>{bullet.text}</p>
                    </div>
                </div>
            ))}
        </div>
        {contents.primaryButtonCta && (
            <Button
              link={contents.primaryButtonCta}
            />
          )}
    </div>
)

export default Card