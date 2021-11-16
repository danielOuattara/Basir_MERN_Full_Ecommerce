
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Product(props) {
    const { product }  = props;
    return (
            <div className="card">
                <Link to={`/product/${product._id}`}>
                    {/* <a href={`/product/${product._id}`}> */}
                        {/* image size: 630 x 830  */}
                        <img 
                        className="medium" 
                        src={product.image} 
                        alt={product.name}/>
                    {/* </a> */}
                </Link>
                <div className="card-body">
                    <Link to={`/product/${product._id}`}>
                    {/* <a href={`/product/${product._id}`}> */}
                        <h2>{product.name}</h2>
                    {/* </a> */}
                    </Link>
                    <Rating rating={product.rating} numReviews={product.numReviews}/>
                    <div className="price">{product.price} €</div>
                </div>
            </div>
    )
}
