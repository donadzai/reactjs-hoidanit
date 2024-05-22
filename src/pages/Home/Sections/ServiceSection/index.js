import classNames from 'classnames/bind';

import styles from './service.module.scss';

const cx = classNames.bind(styles);

function ServiceSection() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <h2 className={cx('header')}>Dịch vụ toàn diện</h2>
                <div className={cx('wrapper-content')}>
                    <div className={cx('content-right')}>
                        <div className={cx('child')}>
                            <div className={cx('img-wrapper')}>
                                <div className={cx('img1')}></div>
                            </div>
                            <div className={cx('title')}>Khám chuyên khoa</div>
                        </div>
                        <div className={cx('child')}>
                            <div className={cx('img-wrapper')}>
                                <div className={cx('img2')}></div>
                            </div>
                            <div className={cx('title')}>Khám tổng quát</div>
                        </div>
                        <div className={cx('child')}>
                            <div className={cx('img-wrapper')}>
                                <div className={cx('img3')}></div>
                            </div>
                            <div className={cx('title')}>Sức khỏe tinh thần</div>
                        </div>
                        <div className={cx('child')}>
                            <div className={cx('img-wrapper')}>
                                <div className={cx('img4')}></div>
                            </div>
                            <div className={cx('title')}>Gói Phẩu thuật</div>
                        </div>
                        <div className={cx('child')}>
                            <div className={cx('img-wrapper')}>
                                <div className={cx('img5')}></div>
                            </div>
                            <div className={cx('title')}>Bài Test Sức khỏe</div>
                        </div>
                    </div>
                    <div className={cx('content-left')}>
                        <div className={cx('child')}>
                            <div className={cx('img-wrapper')}>
                                <div className={cx('img6')}></div>
                            </div>
                            <div className={cx('title')}>Khám từ xa</div>
                        </div>
                        <div className={cx('child')}>
                            <div className={cx('img-wrapper')}>
                                <div className={cx('img7')}></div>
                            </div>
                            <div className={cx('title')}>Xét nghiệm y học</div>
                        </div>
                        <div className={cx('child')}>
                            <div className={cx('img-wrapper')}>
                                <div className={cx('img8')}></div>
                            </div>
                            <div className={cx('title')}>Khám nha khoa</div>
                        </div>
                        <div className={cx('child')}>
                            <div className={cx('img-wrapper')}>
                                <div className={cx('img9')}></div>
                            </div>
                            <div className={cx('title')}>Sống khỏe Tiểu đường</div>
                        </div>
                        <div className={cx('child')}>
                            <div className={cx('img-wrapper')}>
                                <div className={cx('img10')}></div>
                            </div>
                            <div className={cx('title')}>Y tế gần bạn</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;
