import Whypage from "../src/models/whypage.model";
import { getWhypage } from "../src/services/fetch";
import Platform from "../src/components/platform/Platform";
import ImageTextComp from "../src/components/imageText/ImageTextComp";
import WhyMainSection from "../src/components/whyMainSection/WhyMainSection";
import PortfolioContainer from "../src/components/portfolioContainer/PortfolioContainer";
import WhySecondSection from "../src/components/whySecondSection/WhySecondSection";

export const getStaticProps = async () => {  
  const res = await getWhypage();

  return {
    props: {
      pageContent: res
    }
  }
}

declare interface WhyPageProps {
  pageContent: Whypage
}

const Why = ({pageContent}: WhyPageProps) => {

  return (
    <>
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
    </>
  );
}

export default Why;

