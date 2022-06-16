import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "../../productos/productos";

function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);

  const id = 2;

  useEffect(() => {
    const getItem = new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });

    getItem.then((res) => {
      setProducto(res.find((product) => product.id === id));
    });
  }, []);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer;
