import HeroImg from "../../assets/img/hero-img.jpg";

function HeroImage() {
  return (
    <img
      src={HeroImg}
      alt="A photo of me, Valentina!"
      className="hero-image"
    />
  );
}
export default HeroImage;