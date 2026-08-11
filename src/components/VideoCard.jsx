import styles from './videocard.module.css'

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
                    <div className={styles.viewsTime}> {videoDetails.views}views .{videoDetails.uploadedAt}</div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;