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
}

export interface ICheckoutCartContext {
  id: string;
  item: Item;
  price: number;
  quantity: number;
}

export enum CheckoutCartTypes {
  ADDED = "added",
  REMOVED = "removed",
}
export type AddCheckoutAction = {
  type: typeof CheckoutCartTypes.ADDED;
  id: string;
  item: Item;
  price: number;
  quantity: number;
};

export type RemoveCheckoutAction = {
  type: typeof CheckoutCartTypes.REMOVED;
  id: string;
};

export type CheckoutActionTypes = AddCheckoutAction | RemoveCheckoutAction;
