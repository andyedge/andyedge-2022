import { getWhypage } from "../src/services/fetch";
import Platform from "../src/components/platform/Platform";
import PortfolioItem from "../src/components/portfolioItem/PortfolioItem";

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
    <Platform
      title1={pageContent.title1}
      stepsContainer={pageContent.stepsContainer}
    />
  );
}

export default Why;

