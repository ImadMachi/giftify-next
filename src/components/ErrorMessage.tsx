import React from "react";

interface Props {
	children: React.ReactNode;
}

const ErrorMessage: React.FC<Props> = ({ children }) => {
	return <p className="text-red-500">{children}</p>;
};

export default ErrorMessage;
