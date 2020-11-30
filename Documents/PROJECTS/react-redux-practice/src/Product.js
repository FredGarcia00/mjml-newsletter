import React from 'react';
import './Product.css';
import { useDispatch } from 'react-redux'
import { AddtoBasket } from './features/counter/BasketSlice'

function Product({id, title, img, rating, price}) {

const dispatch = useDispatch();

const addItemBasket = () => {
    //Adds item to basket 
    dispatch(AddtoBasket({
               id, title, img, rating, price
           
    }))
}

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {
                            Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                        }
                    </div>
            </div>
            <img src={img} alt=""/>
            <button onClick={addItemBasket}>Add to cart</button>
        </div>
    )
}

export default Product

