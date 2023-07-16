export interface ButtonProps {
	onClick?: () => void
	disabled?: boolean
	hidden?: boolean
	children?: React.ReactNode
}

function Button({ onClick, disabled = false, hidden = false, children }: ButtonProps) {
	return (
		<>
			{!hidden && <button className='button' onClick={onClick} disabled={disabled}>
				{children && children}
			</button>}
		</>
	);
}

export default Button;