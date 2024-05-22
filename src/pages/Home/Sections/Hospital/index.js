import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import styles from './hospital.module.scss';
import NextArrow from '~/conponents/arrows/nextBtn';
import PrevArrow from '~/conponents/arrows/prevBtn';

const cx = classNames.bind(styles);

function Hospital() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: '100px',
        nextArrow: <NextArrow customizeArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('content-header')}>
                        <h2>Cơ sở y tế</h2>
                        <a href="/">Xem thêm</a>
                    </div>
                    <Slider {...settings}>
                        <div className={cx('img-wrapper')}>
                            <div className={cx('content-img')}>
                                <div className={cx('img1')}></div>
                                <span>Bệnh viện Hữu nghị Việt Đức</span>
                            </div>
                        </div>
                        <div className={cx('img-wrapper')}>
                            <div className={cx('content-img')}>
                                <div className={cx('img2')}></div>
                                <span>Bệnh viện chợ rẫy</span>
                            </div>
                        </div>
                        <div className={cx('img-wrapper')}>
                            <div className={cx('content-img')}>
                                <div className={cx('img3')}></div>
                                <span>Doctor Check - Tầm Soát Bệnh Để Sống Thọ Hơn</span>
                            </div>
                        </div>
                        <div className={cx('img-wrapper')}>
                            <div className={cx('content-img')}>
                                <div className={cx('img4')}></div>
                                <span>Phòng khám Bệnh viện Đại học Y Dược 1</span>
                            </div>
                        </div>
                        <div className={cx('img-wrapper')}>
                            <div className={cx('content-img')}>
                                <div className={cx('img5')}></div>
                                <span>Bệnh viện Ung bướu Hưng Việt</span>
                            </div>
                        </div>
                        <div className={cx('img-wrapper')}>
                            <div className={cx('content-img')}>
                                <div className={cx('img6')}></div>
                                <span>Hệ thống y tế MEDLATEC</span>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Hospital;
