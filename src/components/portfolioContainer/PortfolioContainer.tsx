import cn from "classnames";
import ScrollParallax from "../ScrollParallax";
import styles from "./PortfolioContainer.module.sass";
import PortfolioItem from "../portfolioItem/PortfolioItem";


const items = [
  {
    url: "/why",
    title: "Unite your team through a design thinking workshop",
    avatar: "/images/avatar-5.png",
    author: "Porter Daniel",
    date: "Feb 03, 2021",
    image: "/images/lifestyle-photo-1.png",
    image2x: "/images/lifestyle-photo-1@2x.png",
    category: "red",
    categoryContent: "LOGO DESIGN",
  },
  {
    url: "/why",
    title: "FinTech startup quoting insurance using artificial intelligence.",
    avatar: "/images/avatar-2.png",
    author: "Clemens Reilly",
    date: "Feb 03, 2021",
    image: "/images/lifestyle-photo-2.png",
    image2x: "/images/lifestyle-photo-2@2x.png",
    category: "green",
    categoryContent: "IDENTITY DESIGN",
  },
  {
    url: "/why",
    title: "FinTech startup quoting insurance using artificial intelligence.",
    avatar: "/images/avatar-3.png",
    author: "Lorine Parker",
    date: "Feb 03, 2021",
    image: "/images/lifestyle-photo-3.png",
    image2x: "/images/lifestyle-photo-3@2x.png",
    category: "pink",
    categoryContent: "UX DESIGN",
  },
];

const PortfolioContainer = () => {

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn(styles.title)}>How does it look?</h2>
        <div className={styles.info}>
          See how a user-inspired strategy works in practice.
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.box} key={index}>
              <PortfolioItem item={x} className={styles.item} />
            </ScrollParallax>
          ))}
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke button-small", styles.button)}>
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContainer;
