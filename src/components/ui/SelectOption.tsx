export interface SelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}

export default function SelectOption({ children, ...props }: SelectOptionProps) {
	return <option {...props}>{children}</option>;
}
