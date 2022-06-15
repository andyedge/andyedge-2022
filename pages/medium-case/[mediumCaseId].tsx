import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { getMediumCaseStudies, searchMediumCaseStudy, getHeader } from '../../src/services/fetch'
import Header from '../../src/models/entities/header.model'
import Entry from '../../src/models/generic/entry.model'
import MediumCaseStudy from '../../src/models/entities/mediumCaseStudy.model'
import Layout from '../../src/components/layout/Layout'
import SmallCaseHero from '../../src/components/caseStudies/hero/Hero'
import CardsContainer from '../../src/components/cardsContainer/CardsContainer'
import TextSlider from '../../src/components/textSlider/TextSlider'
import Banner from '../../src/components/banner/Banner'
import SmallCaseInfo from '../../src/components/caseStudies/info/Info'
import PortfolioContainer from '../../src/components/portfolioContainer/PortfolioContainer'
import CardBullets from '../../src/components/cardBullets/CardBullets'
import CaseCard from '../../src/components/caseStudies/caseCard/CaseCard'

export const getStaticPaths: GetStaticPaths = async () => {
    const mediumCaseStudies: Entry = await getMediumCaseStudies()
    const paths = mediumCaseStudies?.items.map((value) => ({ params: { mediumCaseId: value.fields.slug } }))
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.mediumCaseId
    const [mediumCaseStudy]: MediumCaseStudy[] = await searchMediumCaseStudy(slug as string)
    const header = await getHeader()
    return {
        props: {
            pageContent: mediumCaseStudy || {},
            header
        },
    }
}

declare interface MediumCaseStudyProps {
    pageContent: MediumCaseStudy
    header: Header
}


const MediumCase: NextPage<MediumCaseStudyProps> = ({ pageContent, header } : MediumCaseStudyProps) => {
    if(!pageContent) {
        return <h1>Case study is in construction</h1>
    }

    return (
        <Layout header={header}>
            <div className='container-fluid'>
                <SmallCaseHero data={pageContent.hero} />
                <CardsContainer contents={pageContent.cards} scrollToRef={null} smallSpaccing={true}/>
                <Banner src={pageContent.banner} />
                <SmallCaseInfo data={pageContent.caseStudyInfo} />
                <TextSlider contents={[pageContent.testimonial]} />
                <CaseCard contents={pageContent.cardInfo}/>
                <PortfolioContainer />
            </div>
        </Layout>
    )
}

export default MediumCase