import React from 'react'
import {productos} from '../../productos/productos';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
const [listaProductos,setListaProductos] = useState([])


  useEffect(() => {
    const listar = () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000)
        });
    };
    listar()
    .then((resp) => {
         setListaProductos(resp);
    })
}, [])
  return (
          <ItemList productos={listaProductos}/> 
  );
}

export default ItemListContainer