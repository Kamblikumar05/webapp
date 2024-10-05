 
import useBgMovieVideo from "../uittls/useBgMovieVideo";

const BackGroundVideo = ({ moviesData }) => {
    const { id } = moviesData 

    useBgMovieVideo(id);
    return ( < >
        <iframe className="absolute w-full aspect-video     "
        src = {"https://www.youtube.com/embed/LtNYaH61dXY?si=XXZQdidLT6qNVT5a" + "controls=0&autoplay=1&mute=1&enablejsapi=1&showinfo=0&autohide=1" +  "?modestbranding=1&;showinfo=1&;autohide=1&;rel=0;"}
        title = "YouTube video player">
        </iframe></ > 
    )


};
export default BackGroundVideo;