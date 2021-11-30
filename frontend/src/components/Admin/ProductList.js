import React from "react";
import Products from "./Products";

export default function ProductList({ items = [], onRemoveItem = (f) => f
}) {
  if (!items.length) return <div>No hay productos</div>;
  return (items.map((item, index) => (
    <Products
    key={index}
      {...item}
      onRemove={onRemoveItem}
    />
  )));
}
