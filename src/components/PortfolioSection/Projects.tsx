import ProjectThumbnail from "./ProjectThumbnail";
import WedplanImg from "../../assets/img/thumbnail/wedplan.png"
import ArchivoVisualImg from "../../assets/img/thumbnail/archivo-visual.png"
import IllustrationImg from "../../assets/img/thumbnail/ilustracion.png"

function Projects() {
  return (
    <section className="projects-catalog">
      <ProjectThumbnail
        yearLabel="2023"
        heading="Wedplan" 
        subheading="Planea tu boda más fácil y más rápido"
        description="Prototipo de aplicación móvil, hecho con la misión de volver la organización de una boda más fácil. Desde hacer tu perfil con tus preferencias, cantidad de invitados y presupuesto, hasta reservar y contactar proveedores."
        image={WedplanImg}
        link="/portfolio/wedplan"
        buttonLabel="Ver más &#128269;"
        UXLabel
      />
      <ProjectThumbnail
        yearLabel="2019"
        heading="Archivo visual" 
        subheading="Repositorio de imágenes históricas de Santiago"
        description="Biblioteca online que recopila imágenes de Santiago desde los años 1600, proyecto del cual participé como desarrolladora front-end usando Ruby on Rails."
        image={ArchivoVisualImg}
        link="http://www.archivovisual.cl/"
        buttonLabel="Ir al sitio &#128279;"
        targetBlank
        reverse
        frontEndLabel
      />
      <ProjectThumbnail
        yearLabel="2017"
        heading="Pori"
        subheading="Ilustradora"
        description="He ilustrado bajo el seudónimo Pori en Instagram desde el año 2017 en adelante. Esta es una selección de logos ilustrados, comisiones y trabajos personales que me gustan mucho."
        image={IllustrationImg}
        link="/portfolio/pori"
        buttonLabel="Ver más &#128269;"
        other
      />
    </section>
  )
}
export default Projects;