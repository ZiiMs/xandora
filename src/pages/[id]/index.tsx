import { type NextPage } from "next";
import React, { useState } from "react";
import productData from "../../data/products.json";
import { useRouter } from "next/router";
import Image from "next/image";

const Tshirt: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const [item, setItem] = useState(() => {
    return productData.find((val) => {
      return val.id === id;
    });
  });

  if (item === undefined) {
    return null;
  }
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="flex rounded bg-black-100/25 p-4">
        <div className="flex flex-row items-center justify-center">
          <Image
            src={item.image}
            alt={item.label}
            width={600}
            height={600}
            className="h-96 w-96"
          />
          <div className="flex flex-col p-4">
            <span>{item.label}</span>
            <span>{item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tshirt;
