import classNames from 'classnames/bind';

import styles from './arrow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function PrevArrow(props) {
    const { className, onClick } = props;
    const customizeBtn = cx(className, 'customize-btn-prev', {
        'position-customize-from-remote': props.customizeFromRemote,
    });
    return (
        <div className={cx(customizeBtn)} onClick={onClick}>
            <FontAwesomeIcon className={cx('icon')} icon={faAngleLeft} />
        </div>
    );
}

export default PrevArrow;
