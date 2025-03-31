import Video from "../../assets/video/TimelapseFast.mp4";

function MainVideo() {
  return (
    <video className="main-video" autoPlay loop muted>
      <source src={Video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default MainVideo;