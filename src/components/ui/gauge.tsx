export const Gauge = ({
	value,
	size = 'small',
	showValue = true
}: {
	value: number
	size: 'small' | 'medium' | 'large'
	showValue: boolean
}) => {
	const circumference = 332 //2 * Math.PI * 53; // 2 * pi * radius
	const valueInCircumference = (value / 100) * circumference
	const strokeDasharray = `${circumference} ${circumference}`
	const initialOffset = circumference
	const strokeDashoffset = initialOffset - valueInCircumference

	const sizes = {
		small: {
			width: '32',
			height: '32',
			textSize: 'text-xs'
		},
		medium: {
			width: '64',
			height: '64',
			textSize: 'text-lg'
		},
		large: {
			width: '128',
			height: '128',
			textSize: 'text-3xl'
		}
	}

	const getColor = (value: number): string => {
		if (value <= 30) {
			return 'text-[#E2162A]'
		}
		if (value <= 70) {
			return 'text-[#FFAE00]'
		}
		return 'text-[hsla(131,41%,46%,1)]'
	}

	const colorClass = getColor(value)

	return (
		<div className="flex flex-col items-center justify-center relative">
			<svg
				fill="none"
				shapeRendering="crispEdges"
				height={sizes[size].height}
				width={sizes[size].width}
				viewBox="0 0 120 120"
				strokeWidth="2"
				className="transform -rotate-90"
			>
				<title>Gauge svg</title>
				<circle
					className="text-foreground"
					strokeWidth="12"
					stroke="currentColor"
					fill="currentColor"
					shapeRendering="geometricPrecision"
					r="53"
					cx="60"
					cy="60"
				/>
				<circle
					className={`animate-gauge_fill ${colorClass}`}
					strokeWidth="12"
					strokeDasharray={strokeDasharray}
					strokeDashoffset={initialOffset}
					shapeRendering="geometricPrecision"
					strokeLinecap="round"
					stroke="currentColor"
					fill="transparent"
					r="53"
					cx="60"
					cy="60"
					style={{
						strokeDashoffset: strokeDashoffset,
						transition: 'stroke-dasharray 1s ease 0s,stroke 1s ease 0s'
					}}
				/>
			</svg>
			{showValue ? (
				<div className="absolute opacity-0 animate-gauge_fadeIn">
					<p
						className={`text-foreground-secondary font-semibold tracking-tight ${sizes[size].textSize}`}
					>
						{value}
					</p>
				</div>
			) : null}
		</div>
	)
}
