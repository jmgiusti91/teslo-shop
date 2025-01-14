import type { Size } from "@/interfaces";
import React from "react";

interface Props {
  selectedSize: Size;
  availableSizes: Size[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Available Sizes</h3>
      <div className="flex ">
        {availableSizes.map((size) => (
          <button
            key={size}
            className={`mx-2 hover:underline text-lg ${
              size === selectedSize ? "underline" : ""
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
