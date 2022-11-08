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
        <section className={styles.article_body}>
            <RichText richText={contents.articleText} />
        </section>
    </div>
)

export default ArticleContent