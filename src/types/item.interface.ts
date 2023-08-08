export interface Item {
  id: string;
  label: string;
  tags: {
    STYLE: string[];
    COLOR: string[];
    SIZE: string[];
  };
  image: string;
  description: string;
  price: number;
  quantity?: number;
}

export interface ICheckoutCartContext {
  item: Item[];
  total: number;
  quantity: number;
  showCart: boolean;
}

export enum CheckoutCartTypes {
  ADDED = "added",
  REMOVED = "removed",
}
export type AddCheckoutAction = {
  type: typeof CheckoutCartTypes.ADDED;
  item: Item;
  price: number;
  quantity: number;
};

export type RemoveCheckoutAction = {
  type: typeof CheckoutCartTypes.REMOVED;
  id: string;
};

// export type CountCheckoutAction = {
//   type: typeof CheckoutCartTypes.COUNT;
// };

export type CheckoutActionTypes = AddCheckoutAction | RemoveCheckoutAction;
