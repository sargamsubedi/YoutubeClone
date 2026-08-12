import useData from "../store/useData";
import VideoCard from "./VideoCard";
import styles from "./videos.module.css";

function Videos() {

    //just for imitation 
    const videos = useData(state=>state.videos)


    return (
        <div className={styles.videos}>
            {
                videos.map(vid => <VideoCard key={vid.id} videoDetails={vid} />)
            }
        </div>
    )
}
export default Videos;