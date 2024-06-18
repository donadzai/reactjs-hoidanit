/* eslint-disable react-hooks/exhaustive-deps */
import { faCircleInfo, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './tables.module.scss';
import { deleteUser, getAllUsers } from '~/services/User';

const cx = classNames.bind(styles);

function TableUsers({ refreshTable, handleShowToast }) {
    const [users, setAllUsers] = useState([]);

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
                                    <button className={cx('btn')}>
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
                                    <button className={cx('btn')}>
                                        <FontAwesomeIcon className={cx('info')} icon={faCircleInfo} />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}

export default TableUsers;
