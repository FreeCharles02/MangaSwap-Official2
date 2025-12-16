import Image from "next/image";
import styles from "./topbanner.module.css";

const TopBanner = () => {
  return (
    <div className={`row ${styles.topBanner}`}>
      <div className="col-lg-5">
        <Image alt="" src="/MangaImages/manga2.jpg" width={765} height={500} />
      </div>

      <div className="col-lg-4">
        <div className={styles.topImage}>
          <div className={styles.backgroundsideImages}>
            <a href="#">
              Hottest Books
            </a>
          </div>
        </div>
        <div className={styles.secondImage}></div>
        <div className={styles.thirdImage}></div>
      </div>
    </div>
  );
};

export default TopBanner;
