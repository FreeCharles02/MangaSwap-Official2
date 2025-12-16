import styles from "./calltoaction.module.css"

const CallToAction = () => {
    return(
        <div className={`row ${styles.callToAction}`}>
            <div className={`col-lg-3`}>
            <h3>
                Big Manga Enthusiast? Get Updates! 
            </h3>
            <p>
                Get community and new posts at a certain price point or just stay tuned to new features and here on MangaSwap.com
                
            </p>
            <input className="form-control" placeholder="yourname@email.com"/>
            <button type="submit" className={`btn ${styles.subscribeButton}`}>
                Subscribe
            </button>
            </div>
             
        </div>
    )
}

export default CallToAction;