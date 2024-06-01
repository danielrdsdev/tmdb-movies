type InfoCardProps = {
	info_title: string
	info_content: string | number
}

export const InfoCard = ({ info_title, info_content }: InfoCardProps) => {
	return (
		<div className="space-y-1">
			<h3 className="font-medium text-sm">{info_title}</h3>
			<p className="text-sm">{info_content}</p>
		</div>
	)
}
