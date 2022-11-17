import Image from 'next/image'
import Button from '../components/button/Button'
import imageLoader from '../helpers/imageLoader'
import LinkType from '../models/generic/link.model'
import { adaptImage } from '../services/adapters/generic/image.adapter'
import { BLOCKS, Document, MARKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

declare interface ReactChildrenElement {
    children: JSX.Element
}

declare interface RichTextProps {
    richText?: Document
}

const Text = ({ children }: ReactChildrenElement) => <p>{children}</p>
const Bold = ({ children }: ReactChildrenElement) => <strong>{children}</strong>

const options = {
    renderMark: {
        [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            return (
                <div className='article-image'>
                    <Image 
                        alt={node.data.target.fields.description}
                        src={node.data.target.fields.file.url}
                        layout={'fill'}
                        objectFit={'contain'}
                        loader={imageLoader}
                        unoptimized
                    />
                </div>
            )
        },
        [INLINES.ENTRY_HYPERLINK]: (node: any) => {
            const icon = adaptImage(node.data.target.fields.icon)

            const linkObject: LinkType = {
                preText: '',
                text: node.data.target.fields.text,
                url: node.data.target.fields.url,
                action: node.data.target.fields.action,
                icon: icon,
                sectionId: '',
                buttonColor: 'White'
            }

            return (
                <Button link={linkObject} />
            )
        }
    }
}

const RichText = ({ richText }: RichTextProps) => {
    const richTextElement = documentToReactComponents(richText as Document, options)
    return (<>{richTextElement}</>)
}

export default RichText