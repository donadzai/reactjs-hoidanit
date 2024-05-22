import classNames from 'classnames/bind';

import styles from './answerd.module.scss';

const cx = classNames.bind(styles);

function Answerd() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <h2 className={cx('header')}>Bác sĩ hỏi đáp</h2>

                <div className={cx('slide-wrap')}>
                    <div className={cx('slide-wrapper')}>
                        <div className={cx('slide-content')}>
                            <div className={cx('img1')}></div>
                            <div className={cx('title')}>Hỏi bác sĩ miễn phí</div>
                        </div>
                    </div>

                    <div className={cx('slide-wrapper')}>
                        <div className={cx('slide-content')}>
                            <div className={cx('img2')}></div>
                            <div className={cx('title')}>Cẩm nang hỏi đáp</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Answerd;
