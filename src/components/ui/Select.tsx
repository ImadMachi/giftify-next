import { cn } from "@/utils/cn";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	children: React.ReactNode;
}

export default function Select({ className, children, ...props }: SelectProps) {
	return (
		<select
			className={cn(
				"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none appearance-none active:outline-none block w-full p-3.5",
				className
			)}
			{...props}
		>
			{children}
		</select>
	);
}
