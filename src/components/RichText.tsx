import { BLOCKS, Document, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

declare interface ReactChildrenElement {
    children: JSX.Element
}

declare interface RichTextProps {
    richText?: Document
}

const Text = ({ children } : ReactChildrenElement) => <p>{children}</p>
const Bold = ({ children } : ReactChildrenElement) => <strong>{children}</strong>

const options = {
    renderMark: {
        [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => <img alt={node.data.target.fields.description} src={node.data.target.fields.file.url}/>
    }
}

const RichText = ({ richText } : RichTextProps) => {
    const richTextElement = documentToReactComponents(richText as Document, options)
    return (<>{richTextElement}</>)
}

export default RichText