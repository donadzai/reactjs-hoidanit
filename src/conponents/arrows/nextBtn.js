import classNames from 'classnames/bind';

import styles from './arrow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function NextArrow(props) {
    const { className, onClick } = props;
    const customizeBtn = cx(className, 'customize-btn-next', {
        'position-customize': props.customizeArrow,
        'position-customize-from-remote': props.customizeFromRemote,
        'disappear-next': props.disableNext,
    });
    return (
        <div className={cx(customizeBtn)} onClick={onClick}>
            <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
        </div>
    );
}

export default NextArrow;
