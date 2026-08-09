import styles from './sidebar.module.css'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h1 className={styles.side}>This is sidebar</h1>
    </aside>
  )
}

export default Sidebar