import Window from "../../Window/Window";

function PortfolioHero() {
  return (
    <section className="lilac-section">
      <div className="main-section smaller">
        <Window
          heading={<span>Portafolio</span>}
          body={<>
          Aquí podrán encontrar trabajos desde Diseño UX/UI, diseño de sitios web, desarrollo front-end e ilustraciones.
          <br /><br />
          ☆*:.｡.⸜(*ˊ◡ˋ*)⸝.｡.:*☆ <strong>WORK IN PROGRESS</strong>
          </>}
        />
      </div>
    </section>
  )
}
export default PortfolioHero;