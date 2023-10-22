import { cn } from "@/utils/cn";
import { register } from "module";
import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	register?: UseFormRegisterReturn;
}

const TextInput: React.FC<TextInputProps> = ({ className, name, register = {}, ...props }) => {
	return (
		<input
			type="text"
			{...props}
			{...register}
			className={cn("border border-gray-300 rounded-sm p-3 focus:outline-none", className)}
		/>
	);
};

export default TextInput;
