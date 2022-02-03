import React from 'react';
import { Link } from 'react-router-dom';
import shoes from '../shoes.json';
function product() {
    return (

        <div >
            <h1>Welcome to Product Page</h1>
            <div className="main">
                {Object.keys(shoes).map((keyName) => {
                    const shoe = shoes[keyName];
                    return (
                        <Link to={`/product/${keyName}`} className="link">
                            <h2>{shoe.title}</h2>
                        
                            <img src={shoe.img} height={200} width={240} />
                        </Link>

                    );

                })}
            </div>

        </div>
    );
}

export default product;