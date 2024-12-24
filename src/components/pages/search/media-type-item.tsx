type MediaTypeItemProps = {
	children: React.ReactNode
	mediaType: string
}

export const MediaTypeItem = ({ children, mediaType }: MediaTypeItemProps) => {
	return (
		<div className="flex justify-between items-center px-4 py-2">
			<span className="text-muted-foreground text-sm">{mediaType}</span>
			<span className="flex justify-center items-center bg-muted rounded-full font-bold text-sm size-8">
				{children}
			</span>
		</div>
	)
}
