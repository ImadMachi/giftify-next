export interface SelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}

export default function SelectOption({ children, ...props }: SelectOptionProps) {
	return (
		<option {...props} className="p-3 bg-gray-100">
			{children}
		</option>
	);
}
