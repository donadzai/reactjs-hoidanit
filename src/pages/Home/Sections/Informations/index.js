import classNames from 'classnames/bind';
import logo1 from '~/assets/images/information/logo1.png';
import logo2 from '~/assets/images/information/logo2.png';
import logo3 from '~/assets/images/information/logo3.png';
import logo4 from '~/assets/images/information/logo4.png';
import logo5 from '~/assets/images/information/logo5.png';
import logo6 from '~/assets/images/information/logo6.png';
import logo7 from '~/assets/images/information/logo7.png';
import logo8 from '~/assets/images/information/logo8.png';

import styles from './infortion.module.scss';

const cx = classNames.bind(styles);

function Information() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <h2 className={cx('header')}>Truyền thông nói về BookingCare</h2>
                <div className={cx('content')}>
                    <div className={cx('video')}>
                        <iframe
                            width={'100%'}
                            height={'100%'}
                            src="https://www.youtube.com/embed/FyDQljKtWnI"
                            title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className={cx('logo')}>
                        <div className={cx('logo-left')}>
                            <div className={cx('child')}>
                                <img className={cx('logo-img')} src={logo1} alt="img1"></img>
                            </div>

                            <div className={cx('child')}>
                                <img className={cx('logo-img')} src={logo2} alt="img1"></img>
                            </div>

                            <div className={cx('child')}>
                                <img className={cx('logo-img')} src={logo3} alt="img1"></img>
                            </div>

                            <div className={cx('child')}>
                                <img className={cx('logo-img')} src={logo4} alt="img1"></img>
                            </div>
                        </div>

                        <div className={cx('logo-right')}>
                            <div className={cx('child')}>
                                <img className={cx('logo-img')} src={logo5} alt="img1"></img>
                            </div>

                            <div className={cx('child')}>
                                <img className={cx('logo-img')} src={logo6} alt="img1"></img>
                            </div>

                            <div className={cx('child')}>
                                <img className={cx('logo-img')} src={logo7} alt="img1"></img>
                            </div>

                            <div className={cx('child')}>
                                <img className={cx('logo-img')} src={logo8} alt="img1"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;
