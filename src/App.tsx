import { useState } from 'react'
import './App.css'

import "./assets/fonts/NeulisAlt-Light.otf"
import "./assets/fonts/Peachi-Bold.otf"
import "./assets/fonts/Peachi-Medium.otf"

import Intro from './components/intro'
import HeadingCard from './components/headingcard'
import { Grid } from '@mui/material'

function App() {
	const [count, setCount] = useState(0)

	const textInCards = [
		{"title": "Acerca de mí 👩🏻‍💻", "description": "Trabajo creando desde el año 2017 de manera freelance, pero he sido creativa desde mucho antes. Me gusta mucho aprender cosas nuevas, por eso estudié ilustración, luego tomé un bootcamp de programación y una certificación de Google para Diseño UX. ¡Y ahora estoy haciendo un curso en modalidad vespertina de Diseño UX/UI!"},
		{"title": "Portafolio", "description": "Aquí podrán encontrar trabajos desde Diseño UX y de sitios web, a desarrollo front-end e ilustraciones. ☆*:.｡.⸜(*ˊ◡ˋ*)⸝.｡.:*☆"},
		{"title": "Contacto", "description": "Si te interesa trabajar conmigo ¡No dudes en contactarme! Estoy disponible para comunicarme via email, y además dejo mis otros canales donde me puedes encontrar. ¡Gracias por tomarte el tiempo de ver este sitio!"}
	]

	return (
		<Grid>
			<Intro />
			{ textInCards.map(text => <HeadingCard {...text} />) }
		</Grid>
	)
}

export default App
