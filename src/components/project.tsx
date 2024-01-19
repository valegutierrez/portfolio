import { Close } from "@mui/icons-material"

const Project = () => {
	return (
		<div className="bg-white rounded-lg text-black overflow-hidden">
			<div className="w-full bg-[#F5CFE9] text-[#BA268B] flex flex-row-reverse"><Close fontSize="medium" className="m-2" /></div>
			<div className="p-10">
				<h2 className="peachi-medium text-[#D300DE]">
					Acerca de mí 👩🏻‍💻
				</h2>
				<p className="neulisalt-light">
					Trabajo creando desde el año 2017 de manera freelance, pero he sido creativa desde mucho antes.
					<br />
					Me gusta mucho aprender cosas nuevas, por eso estudié ilustración, luego tomé un bootcamp de programación y una certificación de Google para Diseño UX.
					<br />
					<span className="neulisalt-medium">¡Y ahora estoy haciendo un curso en modalidad vespertina de Diseño UX/UI!</span>
				</p>
			</div>
		</div>
	)
}

export default Project