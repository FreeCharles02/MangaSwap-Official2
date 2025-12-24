import Image from "next/image";
import styles from "./topbanner.module.css";

const TopBanner = () => {
  return (
    <div className={`row ${styles.topBanner}`}>
      <div className={`col-lg-5 ${styles.heroBannerDiv}`}>
       <div className={styles.heroBanner}>
        <div className={styles.backgroundsideImages}>
        <h4>
          <a href="#">
            Find a New Series
            </a>          
        </h4> 
       </div>
       </div>
      </div>

      <div className={`col-lg-4 ${styles.imageTower}`}>
        <div className={styles.topImage}>
          <div className={styles.backgroundsideImages}>
            <h4>
            <a href="#">
              Hottest Books
            </a>
            </h4>
          </div>
        </div>
        <div className={styles.secondImage}>
          <div className={styles.backgroundsideImages}>
            <h4>
          <a href="#">
            Shonen News
          </a>
          </h4>
          </div>
        </div>
        <div className={styles.thirdImage}>
          <div className={styles.backgroundsideImages}>
            <h4>
          <a href="#">
            Top of the Charts
          </a>
          </h4>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
