import React from 'react'
import Slider from './Slider'
import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <Slider />
            <div className="home__row">
            <Product
            id="112"
            title="All-new Fire HD 8 Plus tablet, HD display, 32 GB, our best 8 tablet for portable entertainment, Slate"
            price={109.99}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/51554FcvCJL._AC_SX679_.jpg"
            />
            <Product
            id="19999121212"
            title="1080P Webcam with Microphone, Plug and Play, for Windows Mac OS, for Video Streaming, Conference, Gaming, Online Classes"
            price={34.99}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/71zEiQWAUoL._AC_SX679_.jpg"
            />
        </div>
        <div className="home__row">
        <Product
            id="1212133"
            title="$10 PlayStation Store Gift Card [Digital Code]"
            price={9.99}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/71cCI9QPwYL._SY606_.jpg"
            />
             <Product
            id="17212"
            title=" Backpack Gift for Men Women with Lock and USB Charging Port"
            price={14.44}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/81Z4r9tKDzL._AC_SY879_.jpg"
            />
             <Product
            id="100012"
            title="Coyote Light HME-CL-CL1G Predator CL1"
            price={109.99}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/51YuQ4j32nL._AC_SX679_.jpg"
            />
        </div>
        <div className="home__row">
        <Product
            id="121399212"
            title="Sony X900H 65 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model"
            price={1198.00}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/612U-Yeox0L._AC_SX679_.jpg"
            />
        </div>
        </div>
    )
}

export default Home
