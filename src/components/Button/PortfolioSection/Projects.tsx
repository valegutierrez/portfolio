import Project from "./Project";

function Projects() {
  return (
    <div className="projects-catalog">
      <Project />
      <Project reverse/>
      <Project />
      <Project reverse/>
    </div>
  )
}
export default Projects;