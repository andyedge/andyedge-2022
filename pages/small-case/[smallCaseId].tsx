import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { getSmallCaseStudies, searchSmallCaseStudy, getHeader } from '../../src/services/fetch'
import Header from '../../src/models/header.model'
import Entry from '../../src/models/entry.model'
import SmallCaseStudy from '../../src/models/smallCaseStudy.model'
import Layout from '../../src/components/layout/Layout'
import SmallCaseHero from '../../src/components/smallCaseStudy/hero/Hero'
import CardsContainer from '../../src/components/cardsContainer/CardsContainer'
import TextSlider from '../../src/components/textSlider/TextSlider'
import Banner from '../../src/components/banner/Banner'
import SmallCaseInfo from '../../src/components/smallCaseStudy/info/Info'
import PortfolioContainer from '../../src/components/portfolioContainer/PortfolioContainer'

export const getStaticPaths: GetStaticPaths = async () => {
    const smallCaseStudies: Entry = await getSmallCaseStudies()
    const paths = smallCaseStudies?.items.map((value) => ({ params: { smallCaseId: value.fields.slug } }))
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.smallCaseId
    const [smallCaseStudy]: SmallCaseStudy[] = await searchSmallCaseStudy(slug as string)
    const header = await getHeader()
    return {
        props: {
            pageContent: smallCaseStudy || {},
            header
        },
    }
}

declare interface SmallCaseStudyProps {
    pageContent: SmallCaseStudy
    header: Header
}


const SmallCase: NextPage<SmallCaseStudyProps> = ({ pageContent, header }: SmallCaseStudyProps) => {
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
                <TextSlider contents={[pageContent.textSlider]} />
                <PortfolioContainer />
            </div>
        </Layout>
    )
}

export default SmallCase