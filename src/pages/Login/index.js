import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

import styles from './Login.module.scss';
import { userLogin } from '~/services';

const cx = classNames.bind(styles);

function Login() {
    const [eyeIcon, setEyeIcon] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const handleEyeIcon = () => {
        setEyeIcon(!eyeIcon);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        const userInfo = await userLogin(email, password);
        console.log(userInfo);
        setUserData(userInfo.data);
    };

    console.log(userData.errCode);
    return (
        <div className={cx('bg')}>
            <div className={cx('wrapper')}>
                <h1 className={cx('heading')}>LOGIN</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className={cx('form-control', 'inputForm')}
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(event) => handleEmail(event)}
                        ></input>
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type={eyeIcon ? 'password' : 'text'}
                            className={cx('form-control', 'inputForm')}
                            id="password"
                            placeholder="Enter your PassWord"
                            value={password}
                            onChange={(event) => handlePassword(event)}
                        ></input>
                        <FontAwesomeIcon
                            className={cx('eyeIcon')}
                            onClick={() => handleEyeIcon()}
                            icon={eyeIcon ? faEyeSlash : faEye}
                        />
                    </div>
                    <p>{userData.errCode ? `${userData.message}` : ''}</p>
                    <button
                        onClick={() => {
                            handleLogin();
                        }}
                        type="button"
                        className={cx('btn btn-primary', 'btnCustomize')}
                    >
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
