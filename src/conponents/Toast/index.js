import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

import styles from './toast.module.scss';
import { useEffect, useState, useRef } from 'react';

const cx = classNames.bind(styles);

function Toast({ getHandleShowToastFc }) {
    const [showToast, setShowToast] = useState([]);

    const toastDOM = useRef();

    const handleShowToast = (data) => {
        setShowToast((prev) => [...prev, data]);
    };

    useEffect(() => {
        const toastElement = toastDOM.current;

        setTimeout(() => {
            if (toastElement.children.length > 0) {
                toastElement.removeChild(toastElement.children[0]);
            }
        }, 4000);
    }, [showToast]);

    useEffect(() => {
        getHandleShowToastFc.current = handleShowToast;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getHandleShowToastFc.current]);

    return (
        <div ref={toastDOM} className={cx('toast-wraper')}>
            {showToast &&
                showToast.length > 0 &&
                showToast.map((item, index) => {
                    return (
                        <div
                            className={cx('wrapper', {
                                error: item.type === 'error',
                                warning: item.type === 'warning',
                            })}
                            key={index}
                        >
                            <div>
                                <FontAwesomeIcon
                                    className={cx('icon', {
                                        error: item.type === 'error',
                                        warning: item.type === 'warning',
                                    })}
                                    icon={
                                        item.icon === 'check'
                                            ? faCircleCheck
                                            : item.icon === 'error'
                                            ? faCircleExclamation
                                            : faTriangleExclamation
                                    }
                                />
                            </div>
                            <div className={cx('message')}>
                                <div className={cx('header')}>{item.header}</div>
                                <div className={cx('title')}>{item.message}</div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Toast;
