import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';

import styles from './itemMenu.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ItemMenu({ titleMenu, titleItemMenu, borderRight }) {
    const userClassName = cx('users', {
        'right-border': borderRight,
    });

    return (
        <div className={userClassName}>
            <span>
                <FormattedMessage id={titleMenu} />
            </span>
            <div className={cx('menu-users')}>
                <ul className={cx('menu-list')}>
                    {titleItemMenu &&
                        titleItemMenu.map((item, index) => {
                            return (
                                <li key={index} className={cx('menu-item')}>
                                    <Link to="/manageUsers/user">
                                        <FormattedMessage id={item} />
                                    </Link>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}

export default ItemMenu;
