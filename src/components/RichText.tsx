import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Text = ({children}: any) => <p>{children}</p>;
const Bold = ({children}: any) => <strong>{children}</strong>

const options = {
    renderMark: {
        [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>
    }
}

const RichText = ({richText}: any) => {
    const richTextElement = documentToReactComponents(richText, options);

    return (
        <>
            {richTextElement}
        </>
    )    
}

export default RichText;