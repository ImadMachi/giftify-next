import { FC, ReactNode } from "react";

interface IconBoxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const IconBox: FC<IconBoxProps> = ({ children, ...props }) => {
	return (
		<button
			className="inline-block rounded-full p-2.5 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
			{...props}
		>
			{children}
		</button>
	);
};

export default IconBox;
