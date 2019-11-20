import Item1 from "../../store/bolognaise.jpg";
import Item2 from "../../store/carbonara.jpg";
import Item3 from "../../store/chickparm.jpg";
import Item4 from "../../store/chickensoup.jpg";
import Item5 from "../../store/passionberry.jpg";
import Item6 from "../../store/tiramisu.jpg";
import Item7 from "../../store/20cake.jpg";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "../actions/action-types/Cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "Cavatelli Bolognese",
      desc:
        "It consists of spaghetti served with a sauce made from tomatoes, minced beef, garlic, wine and herbs.",
      price: 28,
      img: Item1
    },
    {
      id: 2,
      title: "Spaghetti Carbonara",
      desc:
        "A rich tangle of pasta with a robust cream sauce of eggs and italian pancetta, finished table side in a wheel of aged parmigiano",
      price: 27,
      img: Item2
    },
    {
      id: 3,
      title: "Chicken Parmigiano",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 28,
      img: Item3
    },
    {
      id: 4,
      title: "Chiken soup",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 15,
      img: Item4
    },
    {
      id: 5,
      title: "Passionberry cake",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 14,
      img: Item5
    },
    {
      id: 6,
      title: "Tiramisu",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 12.99,
      img: Item6
    },
    {
      id: 7,
      title: "Twenty Layer Peanut Butter Chocolate Cake",
      desc: "Devils Food Cake, Peanut Butter Mascarpone",
      price: 13,
      img: Item7
    }
  ],
  addedItems: [],
  total: 0,
  totalItems: 0
};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
        totalItems: state.totalItems + 1
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
        totalItems: state.totalItems + 1
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    let newTotalItems = state.totalItems - itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
      totalItems: newTotalItems
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
      totalItems: state.totalItems + 1
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
        totalItems: state.totalItems - 1
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
        totalItems: state.totalItems - 1
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6
    };
  } else {
    return state;
  }
};

export default cartReducer;
