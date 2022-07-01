import React from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./PortfolioItem.module.sass";

const PortfolioItem = ({ item, className }: any) => {
  
  return (
    <Link href={item.url}>
      <div className={cn(styles.item, className)}>
        <div className={styles.preview}>
          <img src={item.image} alt={item.status} />
        </div>
        <div
          className={cn(
            { "status-orange": item.category === "red" },
            { "status-green": item.category === "green" },
            { "status-pink": item.category === "pink" },
            { "status-black": item.category === "black" },
            styles.category
          )}
        >
          {item.categoryContent}
        </div>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.foot}>
          <div className={styles.user}>
            <div className={styles.avatar}>
              <img src={item.avatar} alt="Avatar" />
            </div>
            <div className={styles.author}>{item.author}</div>
          </div>
          <div className={styles.date}>{item.date}</div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
