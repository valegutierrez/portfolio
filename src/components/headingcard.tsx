import { Close } from "@mui/icons-material"

interface HeadingCardProps {
	title: string;
	description: string
}

const HeadingCard = ({title, description}: HeadingCardProps) => {
	return (
		<div className="bg-white rounded-lg text-black overflow-hidden">
			<div className="w-full bg-[#F5CFE9] text-[#BA268B] flex flex-row-reverse"><Close fontSize="medium" className="m-2" /></div>
			<div className="p-10">
				<h1 className="peachi-medium text-[#D300DE]">
					{title}
				</h1>
				<p className="neulisalt-light">
					{description}
				</p>
			</div>
		</div>
	)
}

export default HeadingCard