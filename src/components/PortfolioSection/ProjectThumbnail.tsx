import Label from "../Label/Label";
import Button from "../Button/Button";
import { ProjectThumbnailProps } from "../../types";

function ProjectThumbnail(props: ProjectThumbnailProps) {
  const { reverse, yearLabel, heading, subheading, description, image, link, targetBlank, buttonLabel, UXLabel, frontEndLabel, other } = props;
  return (
    <div className={`project ${reverse ? "reverse" : ""}`}>
      <>
        <img src={image}/>
        <div className="project-body">
          <div className="labels">
            <Label label={yearLabel}/>
            {UXLabel ? <Label label="UX Design" secondary/> : ""}
            {frontEndLabel ? <Label label="Front-end development" secondary/> : ""}
            {other ? <Label label="Other" secondary/> : ""}
          </div>
          <h2><strong>{heading}</strong> ― {subheading}</h2>
          <p>{description}</p>
          <Button url={link} label={buttonLabel} targetBlank={targetBlank}/>
        </div>
      </>
    </div>
  )
}
export default ProjectThumbnail;