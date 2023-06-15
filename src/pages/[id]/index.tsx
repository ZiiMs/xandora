import { type NextPage } from "next";
import React, { useEffect, useState } from "react";
import productData from "../../data/products.json";
import { useRouter } from "next/router";
import Image from "next/image";
import PlusIcon from "~/components/icons/plus";
import MinusIcon from "~/components/icons/minus";
import { useCartDispatch } from "~/components/context/cartContext";
import { CheckoutCartTypes } from "~/types/item.interface";

const Tshirt: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const [item, setItem] = useState(() => {
    return productData.find((val) => {
      return val.id === id;
    });
  });
  const [quantity, setQuantity] = useState(0);

  const dispatch = useCartDispatch();

  useEffect(() => {
    setItem(() => {
      return productData.find((val) => {
        return val.id === router.query.id;
      });
    });
  }, [router.query.id]);

  if (item === undefined) {
    return <div>Data not found! {productData.length}</div>;
  }
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <Image
        src={item.image}
        alt={item.label}
        width={600}
        height={600}
        className="h-96 w-96"
      />
      <div className="flex h-full rounded bg-black-100/25 p-4">
        <div className="flex flex-row items-center justify-center">
          <div className="flex h-full w-full flex-col justify-between p-4">
            <span className="self-center text-3xl font-bold text-black-800">
              {item.label}
            </span>
            <span className="text-lg">{item.description}</span>
            <div className="flex w-full flex-row items-center justify-between">
              <div className="flex h-full w-full items-center justify-center gap-2">
                <span className="text-xl font-bold">Quantity</span>
                <div className="flex h-full w-full flex-row items-center justify-center">
                  <button
                    className="rounded-l bg-red-700 p-4 hover:bg-red-700/90"
                    onClick={(e) => {
                      e.preventDefault();
                      const valNumber = quantity - 1;
                      if (valNumber < 0) {
                        return;
                      }
                      setQuantity(valNumber);
                    }}
                  >
                    <MinusIcon />
                  </button>
                  <span className="bg-red-700 p-4">{quantity}</span>
                  <button
                    className="rounded-r bg-red-700 p-4 hover:bg-red-700/90"
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    <PlusIcon />
                  </button>
                </div>
              </div>
              <span className="pl-4 text-xl font-bold">{item.price}</span>
            </div>
            <div>
              <button
                className="w-full items-center justify-center rounded bg-red-700 py-4 text-xl font-bold hover:bg-red-700/90"
                onClick={() => {
                  dispatch({
                    type: CheckoutCartTypes.ADDED,
                    item: item,
                    price: item.price,
                    id: item.id,
                    quantity: quantity,
                  });
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tshirt;
