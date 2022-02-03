import React from 'react';
import { useParams } from 'react-router';
import shoes from '../shoes.json';
function ProductItems() {
    let {id} = useParams();
    const shoe = shoes[id];
    if (!shoe) {
        return <h1>Sorry Product Not Found</h1>
    }
    return (
        <div>
            <h1>Product Items page</h1>
            <div className="product">
                <h2>{shoe.title}</h2>
                <img src={shoe.img} />
            </div>
        </div>

    );
}

export default ProductItems;