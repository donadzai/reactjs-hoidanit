/* eslint-disable react-hooks/exhaustive-deps */
import { faCircleInfo, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';

import styles from './tables.module.scss';
import { deleteUser, getAllUsers } from '~/services/User';
import ModelForm from '~/conponents/model';

const cx = classNames.bind(styles);

function TableUsers({ refreshTable, handleShowToast }) {
    const [users, setAllUsers] = useState([]);
    const [viewInfo, setViewInfo] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    const [idUser, setIdUser] = useState();

    const takeFcFromChildToParent = useRef();

    const handleViewInfoUser = (id) => {
        const userInfo = users.filter((user) => {
            return user.id === id;
        });
        setUserInfo(userInfo);
        setViewInfo(true);
    };

    const handleEditUser = async (id) => {
        setIdUser(id);
        await takeFcFromChildToParent.current.handleGetInfoUser(id);
        takeFcFromChildToParent.current.handleShowModel();
    };

    const allUsers = () => {
        getAllUsers().then((res) => {
            setAllUsers(res.data.data);
        });
    };

    useEffect(() => {
        allUsers();
        refreshTable.current = allUsers;
    }, []);

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Email</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.length > 0 &&
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                handleEditUser(user.id);
                                            }}
                                            className={cx('btn')}
                                        >
                                            <FontAwesomeIcon className={cx('pen')} icon={faPen} />
                                        </button>
                                        <button
                                            onClick={async () => {
                                                await deleteUser(user.id);
                                                handleShowToast({
                                                    type: 'success',
                                                    message: 'You deleted user successfully!',
                                                    header: 'Success!',
                                                    icon: 'check',
                                                });
                                                allUsers();
                                            }}
                                            className={cx('btn')}
                                        >
                                            <FontAwesomeIcon className={cx('trash')} icon={faTrash} />
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleViewInfoUser(user.id);
                                            }}
                                            className={cx('btn')}
                                        >
                                            <FontAwesomeIcon className={cx('info')} icon={faCircleInfo} />
                                        </button>

                                        {viewInfo && (
                                            <div
                                                onClick={() => {
                                                    setViewInfo(false);
                                                }}
                                                className={cx('info-wrapper')}
                                            >
                                                <ul className={cx('list-item')}>
                                                    <li className={cx('item')}>
                                                        <span>Email: </span>
                                                        <span>{userInfo[0].email}</span>
                                                    </li>

                                                    <li className={cx('item')}>
                                                        <span>First name: </span>
                                                        <span>{userInfo[0].firstName}</span>
                                                    </li>

                                                    <li className={cx('item')}>
                                                        <span>Last name: </span>
                                                        <span>{userInfo[0].lastName}</span>
                                                    </li>

                                                    <li className={cx('item')}>
                                                        <span>Phone number: </span>
                                                        <span>{userInfo[0].phonenumber}</span>
                                                    </li>

                                                    <li className={cx('item')}>
                                                        <span>Address: </span>
                                                        <span>{userInfo[0].address}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <ModelForm
                idUser={idUser}
                takeFcFromChildToParent={takeFcFromChildToParent}
                allUsers={allUsers}
                handleShowToast={handleShowToast}
            />
        </>
    );
}

export default TableUsers;
