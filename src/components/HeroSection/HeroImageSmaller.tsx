import HeroImg from "../../assets/img/hero-img2.jpg";

function HeroImageSmaller() {
  return (
    <img
      src={HeroImg}
      alt="A photo of me and one of my dogs."
      className="hero-image smaller"
    />
  );
}
export default HeroImageSmaller;