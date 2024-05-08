import styles from './loader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Loader() {
    return (
        <div className={cx('overlay')}>
            <div className={cx('loader')}></div>;
        </div>
    );
}

export default Loader;
