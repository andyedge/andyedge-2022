import Layout from '../src/components/layout/Layout';
import Platform from "../src/components/platform/Platform";
import Whypage from "../src/models/entities/whypage.model";
import LayoutModel from '../src/models/generic/layout.model';
import { getWhypage, getHeader, getFooter } from "../src/services/fetch";
import WhyMainSection from "../src/components/whyMainSection/WhyMainSection";
import WhySecondSection from "../src/components/whySecondSection/WhySecondSection";
import PortfolioContainer from "../src/components/portfolioContainer/PortfolioContainer";

export const getStaticProps = async () => {  
  const whyPage = await getWhypage();
  const header = await getHeader();
  const footer = await getFooter();
  return {
    props: {
      pageContent: whyPage,
      header,
      footer
    }
  }
}

declare interface WhyPageProps extends LayoutModel {
  pageContent: Whypage
}

const Why = ({ pageContent, header, footer } : WhyPageProps) => {

  return (
    <Layout header={header} seoContent={pageContent.seo} footer={footer}>
      <div className="container-fluid">
        <WhyMainSection
          contents={pageContent.standardContainers}
        />
        <WhySecondSection
          content={pageContent.standardContainer1}
        />
        <Platform
          title1={pageContent.title1}
          stepsContainer={pageContent.stepsContainer}
        />
        <PortfolioContainer />
      </div>
    </Layout>    
  );
}

export default Why;

