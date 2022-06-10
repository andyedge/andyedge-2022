import client from './contentful'
import { adaptEcamppage, adaptWhatpage, adaptWhypage, adaptHeaderData,  } from './adapters'
import { adaptEcamppage, adaptWhatpage, adaptWhypage, adaptHeaderData, adaptBomou, adaptSmallCaseStudies } from './adapters'

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

export const getSmallCaseStudies = async () => await client.getEntries({
    content_type: 'smallCaseStudies'
})

export const searchSmallCaseStudy = async (slug: string) => {
    const matchedSmallCaseStudy = await client.getEntries({
        content_type: 'smallCaseStudies',
        'fields.slug': slug,
        include: NESTING_LEVEL
    })
    return adaptSmallCaseStudies(matchedSmallCaseStudy)
}

export const getBomou = async () => adaptBomou(await client.getEntries({ 
    content_type: 'bomou',
    include: NESTING_LEVEL
}))
