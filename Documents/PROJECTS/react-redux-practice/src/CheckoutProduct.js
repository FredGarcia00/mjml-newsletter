import React from 'react'
import { DeleteBasket } from './features/counter/BasketSlice'
import { useDispatch } from 'react-redux'
import './CheckoutProduct.css'

function CheckoutProduct({id, title, price, rating, img}) {
    const dispatch = useDispatch();

    const deleteItemBasket = () => {
        dispatch(DeleteBasket({
            id
        }))
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__img" src={img} alt=""/>
            
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                    <div className="checkoutProduct__rating">
                        {
                            Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                        }
                    </div>
                    <button onClick={deleteItemBasket}>Remove from cart</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
