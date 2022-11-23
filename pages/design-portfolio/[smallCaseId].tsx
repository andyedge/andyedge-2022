import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { getSmallCaseStudies, searchSmallCaseStudy, getHeader, getFooter } from '../../src/services/fetch'
import Entry from '../../src/models/generic/entry.model'
import SmallCaseStudy from '../../src/models/entities/smallCaseStudy.model'
import Layout from '../../src/components/layout/Layout'
import CaseStudiesHero from '../../src/components/caseStudies/hero/Hero'
import CardsContainer from '../../src/components/cardsContainer/CardsContainer'
import TextSlider from '../../src/components/textSlider/TextSlider'
import Banner from '../../src/components/banner/Banner'
import SmallCaseInfo from '../../src/components/caseStudies/info/Info'
import LayoutModel from '../../src/models/generic/layout.model'
import RelatedCases from '../../src/components/caseStudies/relatedCases/RelatedCases'

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
    const footer = await getFooter()
    return {
        props: {
            pageContent: smallCaseStudy || {},
            header,
            footer
        },
    }
}

declare interface SmallCaseStudyProps extends LayoutModel {
    pageContent: SmallCaseStudy
}


const SmallCase: NextPage<SmallCaseStudyProps> = ({ pageContent, header, footer } : SmallCaseStudyProps) => {
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
                <TextSlider contents={pageContent.testimonial} page='case_studies'/>
                <RelatedCases cases={pageContent.relatedCases} />
            </div>
        </Layout>
    )
}

export default SmallCase