import client from './contentful'
import {
    adaptEcamppage,
    adaptWhatpage,
    adaptWhypage,
    adaptHeaderData,
    adaptMegaMenu,
    adaptFooterData,
    adaptBomou,
    adaptSmallCaseStudies,
    adaptMediumCaseStudies,
    adaptPearson,
    adaptArticles,
    adaptPortfolio
} from './adapters'
import Entry from '../models/generic/entry.model'

const NESTING_LEVEL = 5

export const getHeader = async () => {
    const megaMenu = adaptMegaMenu(await client.getEntries({ 
        content_type: 'megaMenu',
        include: NESTING_LEVEL
    }))

    const header = await client.getEntries({ 
        content_type: 'header',
        include: NESTING_LEVEL
    })
    
    return adaptHeaderData({data: header, megaMenu})
}

export const getFooter = async () => adaptFooterData(await client.getEntries({ 
    content_type: 'footer',
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

export const getArticles = async () => await client.getEntries({
    content_type: 'articlePage'
})

export const searchArticles = async (slug: string) => {
    const matchedArticle = await client.getEntries({
        content_type: 'articlePage',
        'fields.slug': slug,
        include: NESTING_LEVEL
    })
    return adaptArticles(matchedArticle)
}

export const getPortfolio = async () => {
    const caseStudies = await Promise.all([
        client.getEntries({ content_type: 'pearson', include: NESTING_LEVEL }),
        client.getEntries({ content_type: 'bomou', include: NESTING_LEVEL }),
        client.getEntries({ content_type: 'ecamp', include: NESTING_LEVEL }),
        client.getEntries({ content_type: 'smallCaseStudies', include: NESTING_LEVEL }),
        client.getEntries({ content_type: 'mediumCaseStudies', include: NESTING_LEVEL }),
    ]).then((result) => result.map((caseStudyGruop: Entry) => caseStudyGruop.items))

    const totalCases = [caseStudies[0], caseStudies[1], ...caseStudies[2], ...caseStudies[3], ...caseStudies[4]]

    const portfolio = await client.getEntries({ 
        content_type: 'portfolio',
        include: NESTING_LEVEL
    })

    const categories = await client.getEntries({ 
        content_type: 'categories',
        include: NESTING_LEVEL
    })
    
    return adaptPortfolio({data: portfolio, caseStudies: totalCases, categories})
}