import video from "../../../shared/videos/1.mp4"





const VideoPlayer = ({setActive}) => {

    return (
        <div className="video-wrapper">
            <video onPause={() => setActive(false)} autoPlay src={video}></video>
        </div>
    )
};

export default VideoPlayer;
