import Logo from '../assets/images/logovaleux.svg'

const Header = () => {
	return (
	<div className='grid grid-cols-10 h-20 place-items-center'>
		<div className='col-start-3 col-end-4'>
			<img className='h-7 w-auto' src={Logo} />
		</div>
		<div className='col-start-6 col-end-7'>
			<a href='' />
		</div>
		<div className='col-start-7 col-end-8'>
		</div>
		<div className='col-start-8 col-end-9'>
		</div>
	</div>
	)
}

export default Header