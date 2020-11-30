import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './Slider.css'

function Slider() {
    const intervalTime = 2000;
    let slideInterval;
    let sliderArr = [
        'https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_3000x1200._CB451871227_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YzExNTRjZmUt/YzExNTRjZmUt-YTg5MGViMGEt-w3000._CB416900846_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/NWIxMGIwNWIt/NWIxMGIwNWIt-NDAzMzAyZTgt-w3000._CB417320037_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4._CB403243042_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/kindle/education/merch/gw/GW_Hero_Holiday_Light_Math_D2x._CB404344480_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/NWIxMGIwNWIt/NWIxMGIwNWIt-NjE4MWNhNDQt-w3000._CB417433465_.jpg'
    ];
    const [ x, setX ] = useState(0)
    
    const leftArrowHandler = () => {
         x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
    }
    const rightArrowHandler = () => {
        (x === -100 * ( sliderArr.length - 1 )) ? setX(0) : setX(x - 100);
    }

    const autoPlay= () => {
        (x === -100 * ( sliderArr.length - 1 )) ? setX(0) : setX(x - 100);
    }

    useEffect(() => {
        slideInterval = setTimeout(autoPlay, 5000);
    })
    
     
    return (
        <div className="slider">
            {
                sliderArr.map((item, index) => {
                    return (
                        <div className="slider">
                            <img key={index} 
                            className="slider__item" 
                            src={item}
                            style={{transform: `translate(${x}%)`}}/>
                        </div>
                    )
                })
            }
            <ArrowBackIosIcon 
            fontSize="large" 
            id="slider__leftArrow"
            // onClick={leftArrowHandler}
            />
            <ArrowForwardIosIcon 
            fontSize="large" 
            id="slider__rightArrow"
            // onClick={rightArrowHandler}
            />
        </div>
    )
}

export default Slider
