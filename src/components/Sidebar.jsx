import styles from './sidebar.module.css'
import SideButtons from './SideButtons'
import homeIcon from '../assets/icons/home.svg';
import shortsIcon from '../assets/icons/shorts.svg';
import Division from './Division';

function Sidebar() {
  // array of object with channel image link and channel name , obtained from backend , hardcoded just to imitate 
  const subscriptions = [{ img: "https://imgs.search.brave.com/_Hf9l4vUroQq5Gks-sFPdFBeNhJzsf_IU5SQ8_ZJjf4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/cGhvdG9ncmFwaHkv/cmVpbWFnaW5lLndl/YnA", channelName: "sargam" }]

  const you_section = [
    { img: '/images/channel.svg', contentName: "Your Channel" },
    { img: '/images/history.svg', contentName: "History" },
    { img: '/images/playlist.svg', contentName: "Playlist" },
    { img: '/images/watch_later.svg', contentName: "Watch Later" },
    { img: '/images/like.svg', contentName: "Liked Videos" },
    { img: '/images/your_video.svg', contentName: "Your Videos" },
    { img: '/images/downloads.svg', contentName: "Downloads" },
    { img: '/images/courses.svg', contentName: "Courses" },
    { img: '/images/clips.svg', contentName: "Clip" },
  ];

  const more = [
    { img: "/favicon.svg.webp", contentName: "Try premium for $0" },
    { img: "/favicon.svg.webp", contentName: "Youtube Music" },
    { img: "/favicon.svg.webp", contentName: "Youtube Kids" }
  ]
  const explore = [
    { img: '/images/music.svg', contentName: "Music" },
    { img: '/images/gaming.svg', contentName: "Gaming" },
    { img: '/images/sports.svg', contentName: "Sports" },
    { img: '/images/membership.svg', contentName: "Membership" }
  ]
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