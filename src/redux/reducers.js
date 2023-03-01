import foodMenu from "../data/foodMenu";

const initialState = {
  cart: [],
  loggedUser: {},
  foodMenu: foodMenu,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
    	const addedCart = state.cart.filter(item=> item.id !== action.item.id);
       const newCart = [...addedCart, action.item];
      return { ...state, cart: newCart };

    case "INCREASE_QUANTITY":
    	const increasedFoodMenu = [...state.foodMenu] ;
      const increasedItem = increasedFoodMenu.find(item => item.id === action.item.id);
      increasedItem.quantity = action.item.quantity + 1;
      return {...state, foodMenu: increasedFoodMenu};

    case "DECREASE_QUANTITY":
      const decreasedFoodMenu = [...state.foodMenu] ;
      const decreasedItem = decreasedFoodMenu.find(item => item.id === action.item.id);
      if (decreasedItem.quantity > 0) {
      decreasedItem.quantity = action.item.quantity - 1;
      }
      return {...state, foodMenu: decreasedFoodMenu};

    case "ADD_LOGGED_USER":
      const newUser = {
        name: action.user.displayName,
        email: action.user.email,
      };
      return {...state, loggedUser: newUser };
      
    case "REMOVE_LOGGED_USER":
    	return {...state, loggedUser: {} };

    default:
      return state;
  }
};
