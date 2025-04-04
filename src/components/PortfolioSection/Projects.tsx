import Project from "./ProjectThumbnail";
import WedplanImg from "../../assets/img/thumbnail/wedplan.png"
import ArchivoVisualImg from "../../assets/img/thumbnail/archivo-visual.png"

function Projects() {
  return (
    <div className="projects-catalog">
      <Project
        yearLabel="2023"
        heading="Wedplan" 
        subheading="Planea tu boda más fácil y más rápido"
        description="Prototipo de aplicación móvil, hecho con la misión de volver la organización de una boda más fácil. Desde hacer tu perfil con tus preferencias, cantidad de invitados y presupuesto, hasta reservar y contactar proveedores."
        image={WedplanImg}
        link="/portfolio/wedplan"
        UXLabel
        />
      <Project
        yearLabel="2019"
        heading="Archivo visual" 
        subheading="Repositorio de imágenes históricas de Santiago"
        description="Biblioteca online que recopila imágenes de Santiago desde los años 1600, proyecto del cual participé como desarrolladora front-end usando Ruby on Rails."
        image={ArchivoVisualImg}
        link="/portfolio/wedplan"
        reverse
        frontEndLabel
        />
    </div>
  )
}
export default Projects;