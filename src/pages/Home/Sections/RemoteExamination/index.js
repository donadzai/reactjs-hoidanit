import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

import styles from './remoteExamination.module.scss';
import NextArrow from '~/conponents/arrows/nextBtn';
import PrevArrow from '~/conponents/arrows/prevBtn';

const cx = classNames.bind(styles);

function RemoteExamination() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow customizeFromRemote />,
        prevArrow: <PrevArrow customizeFromRemote />,
    };

    return (
        <div className="container">
            <div className={cx('header')}>
                <h2>Khám từ xa</h2>
                <a href="/" className={cx('btn')}>
                    Xem thêm
                </a>
            </div>
            <div className={cx('slide')}>
                <Slider {...settings}>
                    <div className={cx('slide-wrapper')}>
                        <div className={cx('slide-content')}>
                            <div className={cx('img1')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faVideo} />
                            </div>
                            <div className={cx('title')}>Tư vấn, trị liệu Tâm lý từ xa</div>
                        </div>
                    </div>

                    <div className={cx('slide-wrapper')}>
                        <div className={cx('slide-content')}>
                            <div className={cx('img2')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faVideo} />
                            </div>
                            <div className={cx('title')}>Sức khỏe tâm thần từ xa</div>
                        </div>
                    </div>

                    <div className={cx('slide-wrapper')}>
                        <div className={cx('slide-content')}>
                            <div className={cx('img3')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faVideo} />
                            </div>
                            <div className={cx('title')}>Bác sĩ Da liễu từ xa</div>
                        </div>
                    </div>

                    <div className={cx('slide-wrapper')}>
                        <div className={cx('slide-content')}>
                            <div className={cx('img4')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faVideo} />
                            </div>
                            <div className={cx('title')}>Bác sĩ Cơ-Xương-Khớp từ xa</div>
                        </div>
                    </div>

                    <div className={cx('slide-wrapper')}>
                        <div className={cx('slide-content')}>
                            <div className={cx('img5')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faVideo} />
                            </div>
                            <div className={cx('title')}>Bác sĩ Tiêu hóa từ xa</div>
                        </div>
                    </div>

                    <div className={cx('slide-wrapper')}>
                        <div className={cx('slide-content')}>
                            <div className={cx('img6')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faVideo} />
                            </div>
                            <div className={cx('title')}>Bác sĩ Nội khoa từ xa</div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default RemoteExamination;
