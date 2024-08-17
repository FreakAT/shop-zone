import FormSubmitButton from "@/components/formsubmitbutton";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Add Product - ShopZone",
};

async function addProduct(formData: FormData) {
	"use server";
	const name = formData.get("name")?.toString();
	const description = formData.get("description")?.toString();
	const imageUrl = formData.get("imageUrl")?.toString();
	const price = Number(formData.get("price") || 0);

	if (!name || !description || !imageUrl || !price) {
		throw Error("Missing required fields.");
	}

	await prisma.product.create({
		data: { name, description, imageUrl, price },
	});

	redirect("/");
}

const AddProductPage = () => {
	return (
		<div>
			<h1 className="mb-3 text-lg font-bold">Add Product</h1>
			<form action={addProduct}>
				<input
					required
					name="name"
					placeholder="Product Name"
					className="input input-bordered w-full mb-3"
				/>
				<textarea
					required
					name="description"
					placeholder="Description"
					className="textarea-bordered textarea mb-3 w-full"
				/>
				<input
					required
					name="imageUrl"
					placeholder="Image URL"
					type="url"
					className="input input-bordered w-full mb-3"
				/>
				<input
					required
					name="price"
					placeholder="Price"
					type="number"
					className="input input-bordered w-full mb-3"
				/>
				<FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
			</form>
		</div>
	);
};

export default AddProductPage;
