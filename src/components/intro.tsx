import { Close } from "@mui/icons-material"

const Intro = () => {
	return (
		<div className="bg-white rounded-lg text-black overflow-hidden">
			<div className="w-full bg-[#F5CFE9] text-[#BA268B] flex flex-row-reverse"><Close fontSize="medium" className="m-2" /></div>
			<div className="p-10">
				<h1 className="peachi-medium">
					¡Hola! Soy <span className="text-[#D300DE] peachi-bold">Valentina 🎀</span>
				</h1>
				<p className="neulisalt-light">Diseñadora UX, ilustradora & desarrolladora front-end.</p>
			</div>
		</div>
	)
}

export default Intro