import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './user.module.scss';
import { AXIOS } from '~/config/axios';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function User() {
    const [role, setRole] = useState([]);
    const [gender, setGender] = useState([]);
    const [position, setPosition] = useState([]);
    const [url, setUrl] = useState('');
    const [fullScreen, setFullScream] = useState(false);

    const isLang = useSelector((state) => state.changLang.isChangLang);

    const className = cx('fullScreen', {
        'can-see': fullScreen,
    });

    const getAllRoles = async () => {
        const allRoles = await AXIOS.get('/allcodes/role');
        return allRoles.data.data.data;
    };

    const getAllGenders = async () => {
        const allGenders = await AXIOS.get('/allcodes/gender');
        return allGenders.data.data.data;
    };

    const getAllPositions = async () => {
        const allPositions = await AXIOS.get('/allcodes/position');
        return allPositions.data.data.data;
    };

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
                            <input type="email" className="form-control" />
                        </div>

                        <div className="col-3">
                            <label className="form-label">
                                <FormattedMessage id="password" />
                            </label>
                            <input type="password" className="form-control" />
                        </div>

                        <div className="col-3">
                            <label className="form-label">
                                <FormattedMessage id="first_name" />
                            </label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-3">
                            <label className="form-label">
                                <FormattedMessage id="last_name" />
                            </label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-3">
                            <label className="form-label">
                                <FormattedMessage id="phone_number" />
                            </label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-9">
                            <label className="form-label">
                                <FormattedMessage id="address" />
                            </label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-3">
                            <label className="form-label">
                                <FormattedMessage id="gender" />
                            </label>
                            <select className="form-select" aria-label="Default select example">
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
                            <select className="form-select" aria-label="Default select example">
                                {position.length > 0 &&
                                    position.map((item, index) => {
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
                                <FormattedMessage id="role" />
                            </label>
                            <select className="form-select" aria-label="Default select example">
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
                <button className="btn btn-primary">
                    <FormattedMessage id="create" />
                </button>
            </div>
        </div>
    );
}

export default User;
