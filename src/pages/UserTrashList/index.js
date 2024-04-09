import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faList, faRotate, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './userTrashList.module.scss';
import { AXIOS } from '~/config/axios';

const cx = classNames.bind(styles);

function UserTrashList() {
    const [trashUsers, setTrashUsers] = useState([]);

    const handleRestoreUser = async (id) => {
        try {
            await AXIOS.put(`/user/restore/${id}`);
            getTrashUsers();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteUser = (id) => {
        AXIOS.delete(`/delete-user/destroy/${id}`).then(() => {
            getTrashUsers();
        });
    };

    function getTrashUsers() {
        AXIOS.get(`/user/trash`).then((res) => {
            const userList = res.data.data;
            const userTrashList = userList.filter((user, index) => {
                return user.softDelete !== null;
            });
            setTrashUsers(userTrashList);
        });
    }

    useEffect(() => {
        // function getTrashUsers() {
        //     AXIOS.get(`/user/trash`).then((res) => {
        //         const userList = res.data.data;
        //         const userTrashList = userList.filter((user, index) => {
        //             return user.softDelete !== null;
        //         });
        //         setTrashUsers(userTrashList);
        //     });
        // }
        getTrashUsers();
    }, []);
    return (
        <>
            <div className="container mt-5">
                <Link
                    className={cx('btn-trash', 'btn', 'btn-outline-secondary')}
                    to="/userList"
                    variant="outline-secondary"
                >
                    <span className={cx('trash-icon')}>Danh sach user</span>
                    <FontAwesomeIcon icon={faList} />
                </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Address</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trashUsers.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.address}</td>
                                    <td>
                                        <button onClick={() => handleRestoreUser(user.id)} className={cx('btn')}>
                                            <FontAwesomeIcon icon={faRotate} />
                                        </button>
                                        <button onClick={() => handleDeleteUser(user.id)} className={cx('btn')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserTrashList;
