import styles from './sidebar.module.css'
import SideButtons from './SideButtons'
import homeIcon from '../assets/icons/home.svg';
import shortsIcon from '../assets/icons/shorts.svg';
import Division from './Division';
import useData from '../store/useData';

function Sidebar() {
  // array of object with channel image link and channel name , obtained from backend , hardcoded just to imitate 
  const subscriptions = useData(state=>state.subscriptions);

  const you_section = useData(state=>state.you_section)

  const more = useData(state=>state.more)

  const explore = useData(state=>state.explore)
  return (
    <aside className={styles.sidebar}>

      {/* 1st section of sidebar (home and shorts) */}
      <SideButtons img={homeIcon} contentname="Home" />
      <SideButtons img={shortsIcon} contentname="Shorts" />

      <Division />

      {/* subsctiption section */}
      <SideButtons img={null} contentname="Subscription" />

      {
        subscriptions.map(sub => < SideButtons
          key={sub.channelName}
          img={sub.img} contentname={sub.channelName}
        />)
      }


      <Division />

      {/* You section */}
      <SideButtons img={null} contentname="You" />

      {
        you_section.map(you_element => < SideButtons
          key={you_element.contentName}
          img={you_element.img} contentname={you_element.contentName}
        />)
      }

      <Division />
      {/* More from youtube section */}

      <SideButtons img={null} contentname="More from youtube" />

      {
        more.map(you_element => < SideButtons
          key={you_element.contentName}
          img={you_element.img} contentname={you_element.contentName}
        />)
      }

      {/* explore */}
      <Division />
      <SideButtons img={null} contentname="Explore" />
      {
        explore.map(you_element => < SideButtons
          key={you_element.contentName}
          img={you_element.img} contentname={you_element.contentName}
        />)
      }

      <Division />
      {/* report */}
      <SideButtons img="/images/report.svg" contentname="Report History" />
      <Division />

{/* copyright */}

<div className={styles.copyright}>
  <div>About Press Copyright Contact us Creators Advertise Developers</div>
  <div>Terms PrivacyPolicy & Safety How YouTube works Test new features</div>
  <div className={styles.llc}>© 2026 Google LLC</div>

</div>
    </aside>
  )
}

export default Sidebar