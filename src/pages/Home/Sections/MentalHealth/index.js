import classNames from 'classnames/bind';
import Slider from 'react-slick';

import styles from './mentalHealth.module.scss';
import NextArrow from '~/conponents/arrows/nextBtn';
import PrevArrow from '~/conponents/arrows/prevBtn';

const cx = classNames.bind(styles);

function MentalHealth() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <NextArrow customizeFromRemote />,
        prevArrow: <PrevArrow customizeFromRemote />,
    };
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <h2 className={cx('header')}>Sức khỏe tinh thần</h2>

                <div className={cx('slide-wrap')}>
                    <Slider {...settings}>
                        <div className={cx('slide-wrapper')}>
                            <div className={cx('slide-content')}>
                                <div className={cx('img1')}></div>
                                <div className={cx('title')}>Bài test sức khỏe</div>
                            </div>
                        </div>

                        <div className={cx('slide-wrapper')}>
                            <div className={cx('slide-content')}>
                                <div className={cx('img2')}></div>
                                <div className={cx('title')}>Sức khỏe tâm thần từ xa</div>
                            </div>
                        </div>

                        <div className={cx('slide-wrapper')}>
                            <div className={cx('slide-content')}>
                                <div className={cx('img3')}></div>
                                <div className={cx('title')}>Bác sĩ Da liễu từ xa</div>
                            </div>
                        </div>

                        <div className={cx('slide-wrapper')}>
                            <div className={cx('slide-content')}>
                                <div className={cx('img4')}></div>
                                <div className={cx('title')}>Bác sĩ Cơ-Xương-Khớp từ xa</div>
                            </div>
                        </div>

                        <div className={cx('slide-wrapper')}>
                            <div className={cx('slide-content')}>
                                <div className={cx('img5')}></div>
                                <div className={cx('title')}>Bác sĩ Cơ-Xương-Khớp từ xa</div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default MentalHealth;
