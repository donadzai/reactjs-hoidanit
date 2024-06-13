import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { changeVietnameseLang, changeEnglishLang } from '~/redux/translate/actions';
import { logout } from '~/redux/authentication/actions';
import styles from './manageHeader.module.scss';
import ItemMenu from '../ItemMenuHeaderManager';

const cx = classNames.bind(styles);

function ManageHeader() {
    const isLang = useSelector((state) => state.changLang.isChangLang);
    const inFo = useSelector((state) => state.login.userInfo);
    const isLogin = useSelector((state) => state.login.isLogin);

    const titleMenuUser = ['user_management', 'doctor_management'];
    const titleMenuClinic = ['clinic_management'];
    const titleMenuSpecialty = ['specialty_management'];
    const titleMenuHandbook = ['handbook_management'];

    const dispatch = useDispatch();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu')}>
                <ItemMenu titleMenu="user" titleItemMenu={titleMenuUser} />
                <ItemMenu titleMenu="clinic" titleItemMenu={titleMenuClinic} />
                <ItemMenu titleMenu="specialty" titleItemMenu={titleMenuSpecialty} />
                <ItemMenu titleMenu="handbook" titleItemMenu={titleMenuHandbook} borderRight />
            </div>
            <div className={cx('options')}>
                <div className={cx('languages')}>
                    <span
                        style={!isLang ? { color: 'white' } : {}}
                        onClick={() => {
                            dispatch(changeVietnameseLang());
                        }}
                    >
                        VN
                    </span>
                    <span
                        style={isLang ? { color: 'white' } : {}}
                        onClick={() => {
                            dispatch(changeEnglishLang());
                        }}
                    >
                        EN
                    </span>
                </div>
                <div className={cx('info')}>
                    {isLogin && `${inFo.user.lastName} ${inFo.user.firstName}`}
                    <div className={cx('choices')}>
                        <ul className={cx('list-choices')}>
                            <li className={cx('choice')}>
                                <FormattedMessage id="view_profile" />
                            </li>

                            <li
                                onClick={() => {
                                    dispatch(logout());
                                }}
                                className={cx('choice')}
                            >
                                <FormattedMessage id="logout" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {isLogin || <Navigate to="/login" replace={true} />}
        </div>
    );
}

export default ManageHeader;
