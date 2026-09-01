import styles from './navbar.module.css'
import sidebarIcon from '../assets/icons/sidebar.svg';
import youtubeIcon from '../assets/icons/youtube.svg';
import searchIcon from '../assets/icons/search.svg';
import notificationIcon from '../assets/icons/notification.svg';
import plus from '../assets/icons/plus.svg';
import microphone from '../assets/icons/microphone.svg';


function Navbar({ setCollapse }) {

    return (
        <nav>

            <div className={styles.container}>
                <div onClick={() => setCollapse(prev => !prev)}>
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

                    <img src={microphone} alt="microphone"  className={styles.voiceSearch}/>

                </div>
            </div>
            <div className={styles.container}>


                <div className={styles.create}>
                        <img src={plus} alt="plus" className={styles.plusIcon} /> 
                   
                         <p>Create</p>
                </div>
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