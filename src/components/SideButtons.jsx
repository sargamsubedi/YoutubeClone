import styles from './sidebuttons.module.css'
function SideButtons({img, contentname})
{
    return(
        <div className={styles.sidebutton}>
            {
            img && <img className={styles.img} src={img} alt={contentname} />
            }
            <div className={styles.content}>{contentname}</div>
        </div>
    )
}
export default SideButtons;