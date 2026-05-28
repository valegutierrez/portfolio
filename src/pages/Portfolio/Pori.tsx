import ProjectCover from "../../components/Project/ProjectCover"
import Window from "../../components/Window/Window"
import Carousel from "../../components/Carousel/Carousel";
import Img1 from "../../assets/img/pori/dandadan.png";
import Img2 from "../../assets/img/pori/san-valentin.jpeg";

function Pori() {
  const slides = [
    Img1,
    Img2,
  ]

  return (
    <>
      <ProjectCover heading="Pori" pori/>
      <section className="project-section">
        <div className="main-section">
          <Window 
            body={<>
            <p className="summary">
            Pori es mi seudónimo artístico y el espacio donde doy vida a mis ideas a través del dibujo. Esta galería es una recopilación de mi evolución artística, que incluye desde encargos personalizados (comisiones) y diseño de personajes, hasta fanarts y proyectos personales.
            </p>
            <br />
            <p className="summary-subtitle">
              <i className="ri-pencil-ruler-2-line"></i> Herramientas
            </p>
            <p className="padding-left">
              Procreate, Adobe Photoshop, Adobe Illustrator
            </p>
            <br/>
            <p className="summary-subtitle">
              <i className="ri-time-line"></i> Trayectoria
            </p>
            <p className="padding-left">
              Desde 2017
            </p>
            </>}
          />
        </div>
        <div className="main-section row">
          <h2 className="fuchsia">Galería</h2>
          <Carousel slides={slides} />
        </div>
      </section>
    </>
  )
}

export default Pori;