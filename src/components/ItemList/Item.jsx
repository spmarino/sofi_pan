const Item = ({producto}) => {
    const  {title, image, price, stock, initial} = producto
    return (
        <>
            <a href="#" className="col-6 col-md-2 my-3 item">
                <img src={producto.image} alt="" className="img-fluid"/>
                <h2 className="mt-2">{producto.title}</h2>
                <p>${producto.price}</p>
            </a>
        </>
    );
};

export default Item;