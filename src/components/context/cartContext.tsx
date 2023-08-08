import {
  createContext,
  useContext,
  useReducer,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import {
  CheckoutCartTypes,
  type Item,
  type CheckoutActionTypes,
  type ICheckoutCartContext,
} from "~/types/item.interface";

export const CartContext = createContext<ICheckoutCartContext>({
  item: [],
  showCart: false,
  total: 0,
  quantity: 0,
});
export const CartDispatchContext = createContext<
  React.Dispatch<CheckoutActionTypes>
>(() => {
  return;
});

export const CartProvider: React.FC<{
  children: PropsWithChildren<ReactNode>;
}> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

const incrementItemQauntity = (
  Cart: Item[],
  quantity: number,
  id: string,
  action: Item
) => {
  const index = Cart.findIndex((item) => {
    return item.id === id;
  });
  const foundItem = Cart[index];
  if (foundItem !== undefined) {
    return [
      ...Cart.slice(0, index),
      {
        ...foundItem,
        quantity: (foundItem.quantity ?? 0) + quantity,
      },
      ...Cart.slice(index + 1),
    ];
  } else {
    return [...Cart, { ...action, quantity: quantity }];
  }
};

const cartReducer = (
  cart: ICheckoutCartContext,
  action: CheckoutActionTypes
): ICheckoutCartContext => {
  switch (action.type) {
    case CheckoutCartTypes.ADDED: {
      // const clonedItems = [...cart.item];
      // const updateItem = clonedItems.find((val) => {
      //   if (val.id === action.item.id && val.quantity) {
      //     console.log(
      //       "Count",
      //       val.quantity,
      //       action.quantity,
      //       val.quantity + action.quantity
      //     );
      //     val.quantity = val.quantity + action.quantity;
      //     return val;
      //   } else {
      //     return { ...action.item, quantity: action.quantity };
      //   }
      // });
      // console.log("UpdateItem", updateItem?.quantity);
      // if (updateItem) {
      //   return {};
      // }

      return {
        item: incrementItemQauntity(
          cart.item,
          action.quantity,
          action.item.id,
          action.item
        ),
        total: cart.total + action.price,
        quantity: action.quantity + cart.quantity,
        showCart: true,
      };
    }
    case CheckoutCartTypes.REMOVED: {
      const temp = cart;
      temp.item = cart.item.filter((i) => i.id !== action.id);
      return temp;
    }
    default: {
      throw Error("Unknown action: ", action);
    }
  }
};

export const useCart = () => {
  return useContext(CartContext);
};

export const useCartDispatch = () => {
  return useContext(CartDispatchContext);
};

const initialCart: ICheckoutCartContext = {
  quantity: 0,
  item: [],
  total: 0,
  showCart: false,
};
