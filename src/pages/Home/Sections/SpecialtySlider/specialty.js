import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import styles from './specialty.module.scss';
import NextArrow from '~/conponents/arrows/nextBtn';
import PrevArrow from '~/conponents/arrows/prevBtn';

const cx = classNames.bind(styles);

function SpecialtySlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: '100px',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('content-header')}>
                        <h2>Chuyên khoa</h2>
                        <a href="/">Xem thêm</a>
                    </div>
                    <Slider {...settings}>
                        <div className={cx('img-wrapper')}>
                            <div className={cx('content-img')}>
                                <div className={cx('img1')}></div>
                                <span>Cơ xương khớp</span>
                            </div>
                        </div>
                        <div className={cx('img-wrapper')}>
                            <div className={cx('content-img')}>
                                <div className={cx('img2')}></div>
                                <span>Thần kinh</span>
                            </div>
                        </div>
                        <div className={cx('img-wrapper')}>
                            <div className={cx('content-img')}>
                                <div className={cx('img3')}></div>
                                <span>Tiêu hóa</span>
                            </div>
                        </div>
                        <div className={cx('img-wrapper')}>
                            <div className={cx('content-img')}>
                                <div className={cx('img4')}></div>
                                <span>Tim mạch</span>
                            </div>
                        </div>
                        <div className={cx('img-wrapper')}>
                            <div className={cx('content-img')}>
                                <div className={cx('img5')}></div>
                                <span>Tai mũi họng</span>
                            </div>
                        </div>
                        <div className={cx('img-wrapper')}>
                            <div className={cx('content-img')}>
                                <div className={cx('img6')}></div>
                                <span>Cột sống</span>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default SpecialtySlider;
