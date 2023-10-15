interface LabelProps extends React.HTMLProps<HTMLLabelElement> {
	children: React.ReactNode;
}

export default function Label({ children }: LabelProps) {
	return <label className="text-gray-500">{children}</label>;
}
