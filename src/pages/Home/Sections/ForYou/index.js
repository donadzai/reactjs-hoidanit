import classNames from 'classnames/bind';

import styles from './foryou.module.scss';

const cx = classNames.bind(styles);

function ForYou() {
    return (
        <div className="container">
            <h2 className={cx('header')}>Dành cho bạn</h2>
            <div className={cx('wrapper-content')}>
                <div className={cx('child-wrapper')}>
                    <div className={cx('child-img')}></div>
                    <div className={cx('child-title')}>Chuyên khoa</div>
                </div>
            </div>
        </div>
    );
}

export default ForYou;
