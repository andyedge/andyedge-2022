import RichText from '../RichText'
import { FC, MutableRefObject } from 'react'
import styles from './ArticleContent.module.sass'
import Article from '../../models/entities/article.model'

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