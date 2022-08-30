import LineImages from './lineImages/LineImages'
import Whypage from '../../models/entities/whypage.model'
import Platform from '../platform/Platform'
import WhyBanner from './whyBanner/WhyBanner'
import WhyPortfolio from './whyPortfolio/WhyPortfolio'

declare interface WhyProps {
    pageContent: Whypage
}

const WhyComponent = ({ pageContent } : WhyProps) => (
    <>
        <div className='container-fluid'>
            <LineImages contents={pageContent.standardContainers} />
            <WhyBanner content={pageContent.standardContainer1}/>
        </div>
        <div className='container-fluid'>
            <Platform
                title1={pageContent.title1}
                stepsContainer={pageContent.stepsContainer}
            />
            <WhyPortfolio pageContent={pageContent}/>
        </div>
    </>
)

export default WhyComponent