import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { useState } from 'react';

import styles from './banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    const [index, setIndex] = useState(0);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        arrows: false,
        beforeChange: (prev, next) => {
            setIndex(next);
        },
        customPaging: (i) => {
            return (
                <div style={i === index ? { opacity: 1, transform: `scale(1.5)` } : null} className={cx('dot')}></div>
            );
        },
    };
    return (
        <div className={cx('banner-container')}>
            <div className={cx('banner-background-top')}></div>
            <div className={cx('banner-background-bottom')}></div>
            <div className="container">
                <div className={cx('banner-slider')}>
                    <Slider {...settings}>
                        <div className={cx('slider1')}></div>
                        <div className={cx('slider2')}></div>
                        <div className={cx('slider3')}></div>
                        <div className={cx('slider4')}></div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Banner;
