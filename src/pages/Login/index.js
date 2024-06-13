import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import styles from './Login.module.scss';
import { loginUser } from '~/redux/authentication/actions';

const cx = classNames.bind(styles);

function Login() {
    const [eyeIcon, setEyeIcon] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isClickLogin, setisClickLogin] = useState(false);

    const res = useSelector((state) => state.login.loginError);
    const isLogin = useSelector((state) => state.login.isLogin);

    const dispatch = useDispatch();

    const handleEyeIcon = () => {
        setEyeIcon(!eyeIcon);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

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
                    {isLogin || (isClickLogin && <p style={{ color: 'red' }}>{res}</p>)}
                    <button
                        onClick={() => {
                            setisClickLogin(true);
                            dispatch(loginUser(email, password));
                        }}
                        type="button"
                        className={cx('btn btn-primary', 'btnCustomize')}
                    >
                        LOGIN
                    </button>
                </form>
            </div>

            {isLogin && <Navigate to="/manageUsers" replace={true} />}
        </div>
    );
}

export default Login;
