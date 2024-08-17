export function formatPrice(price: number) {
	return price.toLocaleString("en-us", {
		style: "currency",
		currency: "INR",
	});
}
