import styles from './navbar.module.css'
import sidebarIcon from '../assets/icons/sidebar.svg';
import youtubeIcon from '../assets/icons/youtube.svg';
import searchIcon from '../assets/icons/search.svg';
import notificationIcon from '../assets/icons/notification.svg';


function Navbar() {

    return (
        <nav>

            <div className={styles.container}>
                <div>
                    <img
                        className={styles.sidebarIcon}
                        src={sidebarIcon}
                        alt="Menu" />
                </div>
                <div>
                    <img
                        className={styles.youtubeIcon}
                        src={youtubeIcon}
                        alt="Menu" />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.searchContainer}>


                    <div className={styles.search}>
                        <div className={styles.searchInput}>
                            <input type="text" placeholder='Search' />
                        </div>
                        <div className={styles.searchButton}>
                            <img
                                className={styles.searchIcon}
                                src={searchIcon}
                                alt="Menu" />
                        </div>
                    </div>

                    <div className={styles.voiceSearch}>VO</div>

                </div>
            </div>
            <div className={styles.container}>


                <div className={styles.create}>+ Create</div>
                <div className={styles.notification}>

                    <img
                        className={styles.notificationIcon}
                        src={notificationIcon}
                        alt="Menu" />
                </div>
                <div className={styles.account}>S</div>
            </div>
        </nav>
    )
}
export default Navbar