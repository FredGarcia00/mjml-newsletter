import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { selectBasket } from './features/counter/BasketSlice';
import { getBasketTotal } from './features/counter/BasketSlice';
import './SubTotal.css';


function SubTotal() {
    const {basket} = useSelector(selectBasket);

    return (
        <div className="subtotal">
               {/* price, */}
               <CurrencyFormat 
                renderText={(value) => (
                    <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/>
                        This order contains a gift
                    </small>
                    </>
                  )}
           
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
              />
            <button>proceed to checkout</button>
            
        </div>
    )
}

export default SubTotal
