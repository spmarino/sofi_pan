import {React,} from 'react'
import ItemCount from '../ItemCount/ItemCount'


function ItemDetail({producto}) {
const {title, price, image, stock, initial} = producto


    return (
        <div>
            <h4>{title}</h4>
            <img src={image} alt={title}/>
            <p>Precio ${price}</p>
            <ItemCount stock={stock} initial={initial}/>
            
        </div>
    )
}

export default ItemDetail