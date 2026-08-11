import VideoCard from "./VideoCard";
import styles from "./videos.module.css";

function Videos() {

    //just for imitation 
    const videos = [
        {
            id: "dQw4w9WgXcQ",
            title: "Never Gonna Give You Up",
            channel: "Rick Astley",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            duration: "3:32",
            views: 1500000000,
            uploadedAt: "2025-01-15",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            id: "M7lc1UVf-VE",
            title: "YouTube Player API Demo",
            channel: "YouTube Developers",
            thumbnail: "https://img.youtube.com/vi/M7lc1UVf-VE/maxresdefault.jpg",
            duration: "2:15",
            views: 8500000,
            uploadedAt: "2024-08-20",
            url: "https://www.youtube.com/watch?v=M7lc1UVf-VE"
        },
        {
            id: "9bZkp7q19f0",
            title: "Gangnam Style",
            channel: "officialpsy",
            thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
            duration: "4:13",
            views: 5200000000,
            uploadedAt: "2024-06-10",
            url: "https://www.youtube.com/watch?v=9bZkp7q19f0"
        }
    ];


    return (
        <div className={styles.videos}>
            {
                videos.map(vid => <VideoCard key={vid.id} videoDetails={vid} />)
            }
        </div>
    )
}
export default Videos;