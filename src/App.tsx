import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'

import "./assets/fonts/NeulisAlt-Light.otf"
import "./assets/fonts/Peachi-Bold.otf"
import "./assets/fonts/Peachi-Medium.otf"


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<h1 className='text-black'>hola, ahora en: <Outlet/></h1>}>
					<Route index element={<h2>indice</h2>}/>
					<Route path="poto" element={<h2>poto</h2>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
