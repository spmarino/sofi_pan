import Item from "./Item";


const ItemList = ({productos}) => {
    return (
        <>
            <div className="row">
                {
                    productos.map((producto) => {
                        return (
                            <Item 
                                producto={producto}
                            />
                        )
                    })
                }
            </div>
        </>
    );
};

export default ItemList;