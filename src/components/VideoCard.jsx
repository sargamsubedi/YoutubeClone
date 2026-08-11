import styles from './videocard.module.css'
import calculateViews from '../utils/calculateViews'
import calculateUploadDate from '../utils/calculateUploadDate'
function VideoCard({ videoDetails }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.thumbnail}>

                <img className={styles.img} src={videoDetails.thumbnail} width="300px" alt="" />

            </div>
            <div className={styles.videoInfoContainer}>
                <div className={styles.channelProfile}>
                    {/* channel image here */}
                </div>
                <div className={styles.videoData}>
                    <div className={styles.title}> {videoDetails.title}</div>
                    <div className={styles.channelName}>{videoDetails.channel}</div>
                    <div className={styles.viewsTime}>  {calculateViews(videoDetails.views)} views . {calculateUploadDate(videoDetails.uploadedAt)} ago</div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;