import classNames from 'classnames/bind';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '~/redux/getUser/actions';
import styles from './home.module.scss';
import Banner from './Banner';

const cx = classNames.bind(styles);

function Home() {
    const dispatch = useDispatch();

    const listUser = useSelector((state) => state.getUser.listUser);

    useEffect(() => {
        dispatch(getUser());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('banner-container')}>
            <div className={cx('banner-content')}>
                <Banner />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser &&
                            listUser.length > 0 &&
                            listUser.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Home;
