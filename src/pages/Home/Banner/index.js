import classNames from 'classnames/bind';

import styles from './banner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBedPulse,
    faHeadSideVirus,
    faHospital,
    faMagnifyingGlass,
    faMicroscope,
    faMobile,
    faTooth,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('banner-container')}>
            <div className={cx('banner-content')}>
                <div className={cx('content-up')}>
                    <div className={cx('content-header')}>NỀN TẢNG Y TẾ</div>
                    <div className={cx('content-sub')}>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
                    <div className={cx('search')}>
                        <span>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                        <input type="text" placeholder="Nhập từ khóa tại đây..." />
                    </div>
                </div>

                <div className={cx('content-down')}>
                    <div className={cx('child')}>
                        <span>
                            <FontAwesomeIcon icon={faHospital} />
                        </span>
                        <div>Khám chuyên khoa</div>
                    </div>
                    <div className={cx('child')}>
                        <span>
                            <FontAwesomeIcon icon={faMobile} />
                        </span>
                        <div>Khám từ xa</div>
                    </div>
                    <div className={cx('child')}>
                        <span>
                            <FontAwesomeIcon icon={faBedPulse} />
                        </span>
                        <div>Khám tổng quát</div>
                    </div>
                    <div className={cx('child')}>
                        <span>
                            <FontAwesomeIcon icon={faMicroscope} />
                        </span>
                        <div>Xét nghiệm y học</div>
                    </div>
                    <div className={cx('child')}>
                        <span>
                            <FontAwesomeIcon icon={faHeadSideVirus} />
                        </span>
                        <div>Sức khỏe tinh thần</div>
                    </div>
                    <div className={cx('child')}>
                        <span>
                            <FontAwesomeIcon icon={faTooth} />
                        </span>
                        <div>Khám nha khoa</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
