import ProjectCover from "../../components/Project/ProjectCover"
import Window from "../../components/Window/Window"
import PhoneImg from "../../assets/img/wedplan-phone.png"
import PhoneImg2 from "../../assets/img/wedplan-phone2.png"
import { useState } from "react";


function Wedplan() {
  const [prototype, setPrototype] = useState("high-fi");
  const handlePrototypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPrototype(event.target.value);
  };

  return (
    <>
      <ProjectCover heading="Wedplan" wedplan/>
      <section className="project-section">
        <div className="main-section">
          <Window 
            body={<>
            <p className="summary">
            Wedplan es una app para parejas pronto a casarse, que buscan las mejores opciones de proveedores dentro de su presupuesto.
            </p>
            <br />
            <p className="summary-subtitle">
              <i className="ri-pencil-ruler-2-line"></i> Herramientas
            </p>
            <p className="padding-left">
              Figma
            </p>
            <br/>
            <p className="summary-subtitle">
              <i className="ri-time-line"></i> Duración del proyecto
            </p>
            <p className="padding-left">
              Octubre 2023 - Diciembre 2023
            </p>
            </>}
          />
          <div className="phones">
            <img className="phone-img down" src={PhoneImg2} />
            <img className="phone-img up" src={PhoneImg} />
          </div>
        </div>
        <div className="main-section row">
          <h2 className="fuchsia">Resumen del proyecto</h2>
          <div className="overview">
            <div className="overview-section">
              <p className="overview-title">
                <i className="ri-error-warning-line"></i>
                El problema
              </p>
              <p>
                Los usuarios tienen problemas encontrando proveedores de calidad que se ajusten a su presupuesto.
              </p>
            </div>
            <div className="overview-section">
              <p className="overview-title">
                <i className="ri-sparkling-2-line"></i>
                El objetivo
              </p>
              <p>
                Encontrar la forma de volver más fácil y rápido el proceso de búsqueda de proveedores, considerando las preferencias de los usuarios y su presupuesto.
              </p>
            </div>
            <div className="overview-section">
              <p className="overview-title">
                <i className="ri-user-5-line"></i>
                Mi rol
              </p>
              <p className="nowrap">
                Diseñadora UX/UI
              </p>
            </div>
            <div className="overview-section">
              <p className="overview-title">
                <i className="ri-file-list-3-line"></i>
                Responsabilidades
              </p>
              <p>
                Investigación de usuarios, creación de wireframes, prototipado (low y high fidelity)
              </p>
            </div>
          </div>
        </div>
        <div className="main-section row">
          <h2 className="fuchsia">Prototipo</h2>
          <select className="select-prototype" onChange={handlePrototypeChange} value={prototype}>
            <option value="mid-fi">Mid-fi</option>
            <option value="high-fi">High-fi</option>
          </select>
          { prototype === "high-fi" ?
            <iframe
              className="figma-embed"
              src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjVBpO7EoQ1etJBpFiUVS5P%2FWedplan---Plan-your-wedding-easier-%2526-faster%3Fpage-id%3D65%253A2%26type%3Ddesign%26node-id%3D184-1408%26viewport%3D53%252C-1490%252C0.5%26t%3DyhiGRztGTIha35TS-1%26scaling%3Dscale-down%26starting-point-node-id%3D184%253A367%26mode%3Ddesign"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups"
            ></iframe>  
            :
            <iframe
            className="figma-embed"
            src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjVBpO7EoQ1etJBpFiUVS5P%2FWedplan---Plan-your-wedding-easier-%2526-faster%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2%26viewport%3D254%252C-12%252C0.3%26t%3DZf2OxCOSEpToOnvQ-1%26scaling%3Dscale-down%26starting-point-node-id%3D112%253A727%26mode%3Ddesign"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups"
            ></iframe>
          }
        </div>
      </section>
    </>
  )
}

export default Wedplan;