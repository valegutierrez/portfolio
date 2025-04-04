import Label from "../Label/Label";
import Button from "../Button/Button";
import { ProjectThumbnailProps } from "../../types";

function Project(props: ProjectThumbnailProps) {
  const { reverse, yearLabel, heading, subheading, description, image, link, UXLabel, frontEndLabel, other } = props;
  return (
    <div className={`project ${reverse ? "reverse" : ""}`}>
      <>
        <img src={image}/>
        <div className="project-body">
          <div className="labels">
            <Label label={yearLabel}/>
            {UXLabel ? <Label label="UX Design"/> : ""}
            {frontEndLabel ? <Label label="Front-end development"/> : ""}
            {other ? <Label label="Other"/> : ""}
          </div>
          <h2><strong>{heading}</strong> ― {subheading}</h2>
          <p>{description}</p>
          <Button url={link} label="Ver más &#128269;" smaller/>
        </div>
      </>
    </div>
  )
}
export default Project;