import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { getMediumCaseStudies, searchMediumCaseStudy, getHeader, getFooter } from '../../src/services/fetch'
import Entry from '../../src/models/generic/entry.model'
import MediumCaseStudy from '../../src/models/entities/mediumCaseStudy.model'
import Layout from '../../src/components/layout/Layout'
import CaseStudiesHero from '../../src/components/caseStudies/hero/Hero'
import CardsContainer from '../../src/components/cardsContainer/CardsContainer'
import TextSlider from '../../src/components/textSlider/TextSlider'
import Banner from '../../src/components/banner/Banner'
import SmallCaseInfo from '../../src/components/caseStudies/info/Info'
import CaseCard from '../../src/components/caseStudies/caseCard/CaseCard'
import CaseVideoExplainer from '../../src/components/caseStudies/videoExplainer/VideoExplainer'
import LayoutModel from '../../src/models/generic/layout.model'
import RelatedCases from '../../src/components/caseStudies/relatedCases/RelatedCases'

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
    const footer = await getFooter()
    return {
        props: {
            pageContent: mediumCaseStudy || {},
            header,
            footer
        },
    }
}

declare interface MediumCaseStudyProps extends LayoutModel {
    pageContent: MediumCaseStudy
}


const MediumCase: NextPage<MediumCaseStudyProps> = ({ pageContent, header, footer } : MediumCaseStudyProps) => {
    if(!pageContent) {
        return <h1>Case study is in construction</h1>
    }

    return (
        <Layout header={header} seoContent={pageContent.seo} footer={footer}>
            <div className='container-fluid'>
                <CaseStudiesHero data={pageContent.hero} templateDesign={pageContent.templateDesign}/>
                <CardsContainer contents={pageContent.cards} scrollToRef={null} smallSpaccing={true}/>
                <Banner images={pageContent.banner} page={pageContent.slug}/>
                <SmallCaseInfo data={pageContent.caseStudyInfo} />
                <TextSlider contents={[pageContent.testimonial]} page='case_studies' />
                <CaseCard contents={pageContent.cardInfo}/>
                <CaseVideoExplainer contents={pageContent.caseExplanation} />
                <RelatedCases cases={pageContent.relatedCases} nextCase={pageContent.nextCase}/>
            </div>
        </Layout>
    )
}

export default MediumCase