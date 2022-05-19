import { getWhypage } from "../src/services/fetch";
import Platform from "../src/components/platform/Platform";
import PortfolioItem from "../src/components/portfolioItem/PortfolioItem";
import WhyMainSection from "../src/components/whyMainSection/WhyMainSection";
import PortfolioContainer from "../src/components/portfolioContainer/portfolioContainer";

export const getStaticProps = async () => {  
  const res = await getWhypage();

  return {
    props: {
      pageContent: res
    }
  }
}

const Why = ({pageContent}: any) => {

  return (
    <>
      <WhyMainSection
        contents={pageContent.standardContainers}
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

