import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import styles from './user.module.scss';
import TableUsers from './TableUsers';
import { getAllRoles, getAllGenders, getAllPositions, checkInput, createANewUser } from '~/services/User';
import Toast from '~/conponents/Toast';

const cx = classNames.bind(styles);

function User() {
    const [role, setRole] = useState([]);
    const [gender, setGender] = useState([]);
    const [position, setPosition] = useState([]);
    const [url, setUrl] = useState('');
    const [fullScreen, setFullScream] = useState(false);

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const [phoneNumberInput, setPhoneNumberInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [genderInput, setGenderInput] = useState('');
    const [positionInput, setPositionInput] = useState('');
    const [roleInput, setRoleInput] = useState('');
    // const [avatarInput, setAvatarInput] = useState('');

    const refreshTable = useRef();
    const handleShowToast = useRef();
    const handleShowToastFc = handleShowToast.current;

    const isLang = useSelector((state) => state.changLang.isChangLang);

    const className = cx('fullScreen', {
        'can-see': fullScreen,
    });

    useEffect(() => {
        Promise.all([getAllRoles(), getAllGenders(), getAllPositions()]).then((values) => {
            setRole(values[0]);
            setGender(values[1]);
            setPosition(values[2]);
        });
    }, []);

    const deleteUrl = () => {
        window.URL.revokeObjectURL(url);
    };

    const handleCreate = async () => {
        const canCreate = checkInput(
            emailInput,
            passwordInput,
            firstNameInput,
            lastNameInput,
            phoneNumberInput,
            addressInput,
            genderInput,
            positionInput,
            roleInput,
            handleShowToastFc,
        );

        if (canCreate) {
            await createANewUser(
                emailInput,
                passwordInput,
                firstNameInput,
                lastNameInput,
                phoneNumberInput,
                addressInput,
                genderInput,
                positionInput,
                roleInput,
            );

            refreshTable.current();

            handleShowToast.current({
                type: 'success',
                message: 'You created user successfully!',
                header: 'Success!',
                icon: 'check',
            });

            setEmailInput('');
            setPasswordInput('');
            setFirstNameInput('');
            setLastNameInput('');
            setPhoneNumberInput('');
            setAddressInput('');
        }
    };

    return (
        <div className="container">
            <h2 className={cx('header')}>
                <FormattedMessage id="stydy_with" />
            </h2>

            <div className={cx('form-wrapper')}>
                <span>
                    <FormattedMessage id="add_new" />
                </span>
                <form>
                    <div className="row">
                        <div className="col-3">
                            <label className="form-label">
                                <FormattedMessage id="email_address" />
                            </label>
                            <input
                                onChange={(e) => {
                                    setEmailInput(e.target.value);
                                }}
                                value={emailInput}
                                type="email"
                                className="form-control"
                            />
                        </div>

                        <div className="col-3">
                            <label className="form-label">
                                <FormattedMessage id="password" />
                            </label>
                            <input
                                onChange={(e) => {
                                    setPasswordInput(e.target.value);
                                }}
                                value={passwordInput}
                                type="password"
                                className="form-control"
                            />
                        </div>

                        <div className="col-3">
                            <label className="form-label">
                                <FormattedMessage id="first_name" />
                            </label>
                            <input
                                onChange={(e) => {
                                    setFirstNameInput(e.target.value);
                                }}
                                value={firstNameInput}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="col-3">
                            <label className="form-label">
                                <FormattedMessage id="last_name" />
                            </label>
                            <input
                                onChange={(e) => {
                                    setLastNameInput(e.target.value);
                                }}
                                value={lastNameInput}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="col-3">
                            <label className="form-label">
                                <FormattedMessage id="phone_number" />
                            </label>
                            <input
                                onChange={(e) => {
                                    setPhoneNumberInput(e.target.value);
                                }}
                                value={phoneNumberInput}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="col-9">
                            <label className="form-label">
                                <FormattedMessage id="address" />
                            </label>
                            <input
                                onChange={(e) => {
                                    setAddressInput(e.target.value);
                                }}
                                value={addressInput}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="col-3">
                            <label className="form-label">
                                <FormattedMessage id="gender" />
                            </label>
                            <select
                                onChange={(e) => {
                                    setGenderInput(e.target.value);
                                }}
                                value={genderInput}
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option value="">Choose...</option>
                                {gender.length > 0 &&
                                    gender.map((item, index) => {
                                        return (
                                            <option key={index} value={item.valueVi}>
                                                {isLang ? item.valueEn : item.valueVi}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>

                        <div className="col-3">
                            <label className="form-label">
                                <FormattedMessage id="position" />
                            </label>
                            <select
                                onChange={(e) => {
                                    setPositionInput(e.target.value);
                                }}
                                value={positionInput}
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option value="">Choose...</option>
                                {position.length > 0 &&
                                    position.map((item, index) => {
                                        return (
                                            <>
                                                <option key={index} value={item.valueVi}>
                                                    {isLang ? item.valueEn : item.valueVi}
                                                </option>
                                            </>
                                        );
                                    })}
                            </select>
                        </div>

                        <div className="col-3">
                            <label className="form-label">
                                <FormattedMessage id="role" />
                            </label>
                            <select
                                onChange={(e) => {
                                    setRoleInput(e.target.value);
                                }}
                                value={roleInput}
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option value="">Choose...</option>
                                {role.length > 0 &&
                                    role.map((item, index) => {
                                        return (
                                            <option key={index} value={item.valueVi}>
                                                {isLang ? item.valueEn : item.valueVi}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>

                        <div className="col-3">
                            <label className="form-label">
                                <FormattedMessage id="avatar" />
                            </label>

                            <div className={cx('preview-img')}>
                                <label htmlFor="avatar" className={cx('upload-img')}>
                                    <span>
                                        <FormattedMessage id="upload" />
                                    </span>
                                    <FontAwesomeIcon icon={faUpload} />
                                </label>
                                <input
                                    type="file"
                                    id="avatar"
                                    onChange={(e) => {
                                        const data = e.target.files;
                                        if (data.length > 0) {
                                            deleteUrl();
                                            const url = URL.createObjectURL(data[0]);
                                            setUrl(url);
                                        }
                                    }}
                                    hidden
                                />
                            </div>

                            {url && (
                                <img
                                    onClick={() => {
                                        setFullScream(true);
                                    }}
                                    className={cx('view')}
                                    src={url || ''}
                                    alt="Ảnh của bạn"
                                />
                            )}
                            <div
                                onClick={() => {
                                    setFullScream(false);
                                }}
                                style={{ backgroundImage: `url(${url})` }}
                                className={className}
                            ></div>
                        </div>
                    </div>
                </form>
                <button
                    onClick={() => {
                        handleCreate();
                    }}
                    className="btn btn-primary"
                >
                    <FormattedMessage id="create" />
                </button>
            </div>

            <TableUsers refreshTable={refreshTable} handleShowToast={handleShowToast.current} />
            <Toast getHandleShowToastFc={handleShowToast} />
        </div>
    );
}

export default User;
