import Label from "../../Label/Label";
import Button from "../Button";

interface ProjectProps {
  reverse?: boolean;
}

function Project(props: ProjectProps) {
  const { reverse } = props;
  return (
    <div className="project">
      {reverse ?
      <>
        <div className="project-body">
          <div className="labels">
            <Label label="2023"/>
            <Label label="UX Design"/>
          </div>
          <h2><strong>Wedplan</strong> ― Planea tu boda más fácil y más rápido</h2>
          <p>Prototipo de aplicación móvil, hecho con la misión de volver la organización de una boda más fácil. Desde hacer tu perfil con tus preferencias, cantidad de invitados y presupuesto, hasta reservar y contactar proveedores.</p>
          <Button url="" label="Ver más &#128269;" smaller/>
        </div>
        <img src="https://assets-global.website-files.com/66208f735846aab05a15be59/662abc9b149417b6f9c8e1fe_thumbnail%20wedplan-p-500.png"/>
      </>
      :
      <>
        <img src="https://assets-global.website-files.com/66208f735846aab05a15be59/662abc9b149417b6f9c8e1fe_thumbnail%20wedplan-p-500.png"/>
        <div className="project-body">
          <div className="labels">
            <Label label="2023"/>
            <Label label="UX Design"/>
          </div>
          <h2><strong>Wedplan</strong> ― Planea tu boda más fácil y más rápido</h2>
          <p>Prototipo de aplicación móvil, hecho con la misión de volver la organización de una boda más fácil. Desde hacer tu perfil con tus preferencias, cantidad de invitados y presupuesto, hasta reservar y contactar proveedores.</p>
          <Button url="" label="Ver más &#128269;" smaller/>
        </div>
      </>}
    </div>
  )
}
export default Project;