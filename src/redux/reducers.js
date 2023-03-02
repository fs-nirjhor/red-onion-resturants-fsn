import foodMenu from "../data/foodMenu";

const initialState = {
  foodMenu: foodMenu,
  cart: [],
  loggedUser: {},
  pricing: { subtotal: 0, tax: 0, delivery: 0, total: 0 },
  deliveryInfo: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
    	// Manage pricing 
    	const subtotal = state.cart.reduce(
        (currentSubtotal, item) => item.price * item.quantity + currentSubtotal,
        0
      );
      const tax = subtotal * 0.1;
      const delivery = subtotal >= 19.99 ? 0 : subtotal === 0 ? 0 : 2;
      const total = subtotal + tax + delivery;
      const newPricing = {
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        delivery: delivery.toFixed(2),
        total: total.toFixed(2),
      };
    	//Manage Cart
      const newCart = [...state.cart];
      const addedItem = newCart.find(item => item.id === action.item.id);
      if (addedItem) {
      addedItem.quantity = action.item.quantity;
      return { ...state, cart: newCart, pricing: newPricing };
      } else {
      	return {...state, cart: [...state.cart,action.item], pricing: newPricing};
      }
      
    case 'REMOVE_FROM_CART':
    	const refreshedCart = state.cart.filter(item => item.id !== action.item.id);
    	return {...state, cart: refreshedCart};
    	
    case "INCREASE_QUANTITY":
      const increasedFoodMenu = [...state.foodMenu];
      const increasedItem = increasedFoodMenu.find(
        (item) => item.id === action.item.id
      );
      increasedItem.quantity = action.item.quantity + 1;
      return { ...state, foodMenu: increasedFoodMenu };

    case "DECREASE_QUANTITY":
      const decreasedFoodMenu = [...state.foodMenu];
      const decreasedItem = decreasedFoodMenu.find(
        (item) => item.id === action.item.id
      );
      if (decreasedItem.quantity > 0) {
        decreasedItem.quantity = action.item.quantity - 1;
      }
      return { ...state, foodMenu: decreasedFoodMenu };

    case "ADD_LOGGED_USER":
      const newUser = {
        name: action.user.displayName,
        email: action.user.email,
      };
      return { ...state, loggedUser: newUser };

    case "REMOVE_LOGGED_USER":
      return { ...state, loggedUser: {} };
      
    case 'ADD_DELIVERY_INFO':
    	return {...state, deliveryInfo: action.info };

    default:
      return state;
  }
};
