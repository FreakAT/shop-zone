"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
	children: React.ReactNode;
	classname?: string;
} & ComponentProps<"button">;

const FormSubmitButton = ({
	children,
	classname,
	...props
}: FormSubmitButtonProps) => {
	const { pending } = useFormStatus();

	return (
		<button
			{...props}
			className={`btn btn-primary ${classname}`}
			type="submit"
			disabled={pending}
		>
			{pending && <span className="loading loading-spinner" />}
			{children}
		</button>
	);
};

export default FormSubmitButton;
