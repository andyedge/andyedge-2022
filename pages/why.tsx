import Whypage from "../src/models/whypage.model";
import { getWhypage, getHeader } from "../src/services/fetch";
import Platform from "../src/components/platform/Platform";
import ImageTextComp from "../src/components/imageText/ImageTextComp";
import WhyMainSection from "../src/components/whyMainSection/WhyMainSection";
import PortfolioContainer from "../src/components/portfolioContainer/PortfolioContainer";
import WhySecondSection from "../src/components/whySecondSection/WhySecondSection";
import Layout from '../src/components/layout/Layout';
import Header from '../src/models/header.model';

export const getStaticProps = async () => {  
  const whyPage = await getWhypage();
  const header = await getHeader();
  return {
    props: {
      pageContent: whyPage,
      header
    }
  }
}

declare interface WhyPageProps {
  pageContent: Whypage
  header: Header
}

const Why = ({ pageContent, header } : WhyPageProps) => {

  return (
    <Layout header={header}>
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

