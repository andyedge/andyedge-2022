import { FC, MutableRefObject } from 'react'

import Article from '../../models/entities/article.model'
import CustomImage from '../image/Image'
import styles from './ArticleContent.module.sass'
import RichText from '../RichText'

declare interface ArticleProps {
    contents: Article
    scrollToRef: MutableRefObject<null> | null
}

const ArticleContent: FC<ArticleProps> = ({ contents, scrollToRef }: ArticleProps) => (
    <div className={'container'}>
        <section className={styles.first_section} ref={scrollToRef}>
            <div>
                <div className={styles.info}>
                    <h3>{contents.standardContainer1.title}</h3>
                    <p>{contents.standardContainer1.subtitle}</p>
                </div>
                <div className={styles.inline_images}>
                    {contents.standardContainer1?.logoC?.image.url ? 
                        <CustomImage
                            src={contents.standardContainer1.logoC}
                        />
                        :
                        null
                    }
                </div>
            </div>
            <div>
                <div className={styles.info}>
                    <h3>{contents.standardContainer2.title}</h3>
                    <p>{contents.standardContainer2.subtitle}</p>
                </div>
                <div className={styles.inline_images}>
                    {contents.standardContainer2?.logoC?.image.url ? 
                        <CustomImage
                            src={contents.standardContainer2.logoC}
                        />
                        :
                        null
                    }
                </div>
            </div>
        </section>
        <section className={styles.carousel}>
            {contents.mediaCarousel.length ? (
                <div>
                    <CustomImage src={{image: contents.mediaCarousel[0]}} />
                </div>
            )
                : null}
        </section>
        <section className={styles.article_body}>
            <RichText richText={contents.articleText} />
        </section>
        <section className={styles.images_section}>
            {
                contents.pageImage1.image.url !== '' ?
                    <div>
                        <CustomImage
                            src={contents.pageImage1}
                        />
                    </div>
                    :
                    null
            }
            {
                contents.pageImage3.image.url !== '' ?
                    <div>
                        <CustomImage
                            src={contents.pageImage3}
                            props={{ customAttr: { objectFit: 'contain' } }}
                        />
                    </div>
                    :
                    null
            }
        </section>
    </div>
)

export default ArticleContent