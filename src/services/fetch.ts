import client from './contentful'
import { adaptEcamppage, adaptWhatpage, adaptWhypage } from './responseAdapter'

export const getWhatpage = async () => adaptWhatpage(await client.getEntries({ 
    content_type: 'whatPage',
    include: 10
}))

export const getWhypage = async () => adaptWhypage(await client.getEntries({ 
    content_type: 'whyPage',
    include: 10
}))

export const getEcamp = async () => adaptEcamppage(await client.getEntries({ 
    content_type: 'ecamp',
    include: 10
}))