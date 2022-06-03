import client from './contentful'
import { adaptEcamppage, adaptWhatpage, adaptWhypage, adaptHeaderData } from './adapters'

const NESTING_LEVEL = 5

export const getWhatpage = async () => adaptWhatpage(await client.getEntries({ 
    content_type: 'whatPage',
    include: NESTING_LEVEL
}))

export const getWhypage = async () => adaptWhypage(await client.getEntries({ 
    content_type: 'whyPage',
    include: NESTING_LEVEL
}))

export const getEcamp = async () => adaptEcamppage(await client.getEntries({ 
    content_type: 'ecamp',
    include: NESTING_LEVEL
}))

export const getHeader = async () => adaptHeaderData(await client.getEntries({ 
    content_type: 'header',
    include: NESTING_LEVEL
}))