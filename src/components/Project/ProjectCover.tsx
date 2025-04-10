import ReturnButton from "../Button/ReturnButton";
import { ProjectProps } from "../../types";

function ProjectCover(props: ProjectProps) {
  const { wedplan, pori, heading } = props;
  return (
    <section className={`project-cover ${wedplan ? "wedplan-img" : ""} ${pori ? "illustration-img" : ""}`}>
      <div className="project-cover-content">
        <ReturnButton />
        <h1>{heading}</h1>
      </div>
    </section>
  )
}
export default ProjectCover;