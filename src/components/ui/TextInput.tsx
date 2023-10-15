import { cn } from "@/utils/cn";
import React, { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput: React.FC<TextInputProps> = ({ className, ...props }) => {
	return (
		<input
			type="text"
			{...props}
			className={cn("border border-gray-300 rounded-sm p-3 focus:outline-none", className)}
		/>
	);
};

export default TextInput;
