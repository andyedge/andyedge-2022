import client from './contentful'
import {
    adaptEcamppage,
    adaptWhatpage,
    adaptWhypage,
    adaptHeaderData,
    adaptBomou,
    adaptSmallCaseStudies,
    adaptMediumCaseStudies,
    adaptPearson
} from './adapters'

const NESTING_LEVEL = 5

export const getHeader = async () => adaptHeaderData(await client.getEntries({ 
    content_type: 'header',
    include: NESTING_LEVEL
}))

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

export const getBomou = async () => adaptBomou(await client.getEntries({ 
    content_type: 'bomou',
    include: NESTING_LEVEL
}))

export const getPearson = async () => adaptPearson(await client.getEntries({ 
    content_type: 'pearson',
    include: NESTING_LEVEL
}))

export const getMediumCaseStudies = async () => await client.getEntries({
    content_type: 'mediumCaseStudies'
})

export const searchMediumCaseStudy = async (slug: string) => {
    const matchedMediumCaseStudy = await client.getEntries({
        content_type: 'mediumCaseStudies',
        'fields.slug': slug,
        include: NESTING_LEVEL
    })
    return adaptMediumCaseStudies(matchedMediumCaseStudy)
}

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