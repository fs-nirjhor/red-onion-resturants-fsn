import foodMenu from "../data/foodMenu";

const initialState = {
  cart: [],
  menu: foodMenu,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_QUANTITY":
      const newItem = { ...action.item, serial: state.cart.length + 1 };
      const newCart = [...state.cart, newItem];
      return { cart: newCart };
    case "DECREASE_QUANTITY":
      const remainingCart = state.cart.filter(
        (item) => item.serial !== action.item.serial
      );
      return { cart: remainingCart };
    default:
      return state;
  }
};
