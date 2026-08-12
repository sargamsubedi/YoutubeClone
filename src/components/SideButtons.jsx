import styles from './sidebuttons.module.css'
function SideButtons({ img, contentname, collapse }) {
    return (
        <div className={`${styles.sidebutton} ${collapse ? styles.collapse : ""}`}>
            <div>
                {
                    img && <img className={styles.img} src={img} alt={contentname} />
                }
            </div>
            {
                contentname && <div className={`${collapse ? styles.reduce : styles.content}`}>
                    {contentname}</div>
            }
        </div>
    )
}
export default SideButtons;