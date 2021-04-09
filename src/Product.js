import React from 'react';
import './Product.css';

const Product = ({ id }) => {
    if(id===0) {
        return (
            <h1>Empty</h1>
        )
    }
    let i=1;
    return (
        <div class="wrapper">
            <div class="container">
                <div className="imgcontainer">
                    <img class="img" id={i++} src="https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Library-Sites-SkechersSharedLibrary/default/dwdcaa39ce/images/Landing/men/SKX44314-2020-New-Site-Q2-Content-Grid_M_Athletic-Sneakers_232032-BLOR.jpg?sw=356" alt="img" />
                </div>
                <div className="details">
                    <h4>Reebok Shoes {id}</h4>
                    <h5>Price: Rs. 2000</h5>
                </div>
            </div>
        </div>
    )
}

export default Product;