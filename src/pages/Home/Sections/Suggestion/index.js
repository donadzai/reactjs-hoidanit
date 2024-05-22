import classNames from 'classnames/bind';

import styles from './suggestion.module.scss';

const cx = classNames.bind(styles);

function Suggestion() {
    return (
        <div className="container">
            <h2 className={cx('header')}>Gợi ý của BookingCare</h2>
            <div className={cx('wrapper-content')}>
                <div className={cx('child-wrapper')}>
                    <div className={cx('child-img1')}></div>
                    <div className={cx('child-title')}>Được quan tâm</div>
                </div>

                <div className={cx('child-wrapper')}>
                    <div className={cx('child-img2')}></div>
                    <div className={cx('child-title')}>Y tế nổi bật</div>
                </div>
            </div>
        </div>
    );
}

export default Suggestion;
