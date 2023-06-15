import {
  type PropsWithChildren,
  type ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import {
  CheckoutCartTypes,
  type CheckoutActionTypes,
  type ICheckoutCartContext,
} from "~/types/item.interface";

export const CartContext = createContext<ICheckoutCartContext[]>([]);
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

const cartReducer = (
  cart: ICheckoutCartContext[],
  action: CheckoutActionTypes
): ICheckoutCartContext[] => {
  console.log("Workgin", action);
  switch (action.type) {
    case CheckoutCartTypes.ADDED: {
      return [
        ...cart,
        {
          id: action.id,
          item: action.item,
          price: action.price,
          quantity: action.quantity,
        },
      ];
    }
    case CheckoutCartTypes.REMOVED: {
      return cart.filter((i) => i.id !== action.id);
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

const initialCart: ICheckoutCartContext[] = [];
