
export const addToCart = (item) => {
	return {type: "ADD_TO_CART", item};
};

export const removeFromCart = (item) => {
	return {type: "REMOVE_FROM_CART", item};
};

export const increaseQuantity = (item) => {
	return {type: "INCREASE_QUANTITY", item};
};

export const decreaseQuantity = (item) => {
	return {type: "DECREASE_QUANTITY", item};
};

