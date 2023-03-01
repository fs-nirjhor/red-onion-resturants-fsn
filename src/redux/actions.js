
export const addToCart = (item) => {
	return {type: "ADD_TO_CART", item};
};

export const increaseQuantity = (item) => {
	return {type: "INCREASE_QUANTITY", item};
};

export const decreaseQuantity = (item) => {
	return {type: "DECREASE_QUANTITY", item};
};

export const addLoggedUser = (user) => {
	return {type: "ADD_LOGGED_USER", user};
};

export const removeLoggedUser = () => {
	return {type: "REMOVE_LOGGED_USER"};
};

