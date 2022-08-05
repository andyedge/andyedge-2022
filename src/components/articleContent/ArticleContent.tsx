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
        <div>
            <CustomImage
                src={contents.standardContainer1.logoC.image}
                srcDark={contents.standardContainer1.logoC.darkImage}
            />
        </div>
        <section className={styles.first_section} ref={scrollToRef}>
            <div>
                <div className={styles.info}>
                    <h3>{contents.standardContainer1.title}</h3>
                    <p>{contents.standardContainer1.subtitle}</p>
                </div>
                <div className={styles.inline_images}>
                    <CustomImage
                        src={contents.standardContainer1.logoC.image}
                        srcDark={contents.standardContainer1.logoC.darkImage}
                    />
                </div>
            </div>
            <div>
                <div className={styles.info}>
                    <h3>{contents.standardContainer2.title}</h3>
                    <p>{contents.standardContainer2.subtitle}</p>
                </div>
                <div className={styles.inline_images}>
                    <CustomImage
                        src={contents.standardContainer2.logoC.image}
                        srcDark={contents.standardContainer2.logoC.darkImage}
                    />
                </div>
            </div>
        </section>
        <section className={styles.carousel}>
            {contents.mediaCarousel.length ? (
                <div>
                    <CustomImage src={contents.mediaCarousel[0]} />
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
                            src={contents.pageImage1.image}
                            srcDark={contents.pageImage1.darkImage}
                        />
                    </div>
                    :
                    null
            }
            {
                contents.pageImage3.image.url !== '' ?
                    <div>
                        <CustomImage
                            src={contents.pageImage3.image}
                            srcDark={contents.pageImage3.darkImage}
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