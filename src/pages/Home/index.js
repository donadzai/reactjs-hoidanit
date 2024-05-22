import classNames from 'classnames/bind';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUser } from '~/redux/getUser/actions';
import { deleteUser } from '~/redux/deleteUser/actions';
import styles from './home.module.scss';
import Banner from './Banner';
import ModelForm from '~/conponents/model';
import Loader from '~/conponents/loader';
import SpecialtySlider from './Sections/SpecialtySlider/specialty';
import Hospital from './Sections/Hospital';
import ForYou from './Sections/ForYou';
import ServiceSection from './Sections/ServiceSection';
import DoctorList from './Sections/DoctorList';
import RemoteExamination from './Sections/RemoteExamination';
import Suggestion from './Sections/Suggestion';
import MentalHealth from './Sections/MentalHealth';
import Answerd from './Sections/Answerd';
import HandBook from './Sections/Handbook';
import LiveHealthy from './Sections/LiveHealthy';
import Information from './Sections/Informations';

const cx = classNames.bind(styles);

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const listUser = useSelector((state) => state.getUser.listUser);
    const isStarting = useSelector((state) => state.getUser.isStarting);
    const isError = useSelector((state) => state.getUser.isError);

    const isRequestCreate = useSelector((state) => state.createNewUser.isReaquestCreate);
    const isErrorCreate = useSelector((state) => state.createNewUser.isErrorCreate);

    const isRequestEdit = useSelector((state) => state.editUserFromReducer.isRequestEdit);
    const isErrorEdit = useSelector((state) => state.editUserFromReducer.isErrorEdit);

    const isRequestDelete = useSelector((state) => state.deleteUserReducer.isRequestDelete);
    const isErrorDelete = useSelector((state) => state.deleteUserReducer.isErrorDelete);

    const isLogin = useSelector((state) => state.login.isLogin);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [id, setId] = useState('');

    const childFunc = useRef(null);

    useEffect(() => {
        dispatch(getUser());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFillInfo = (id) => {
        const userNeedEdit = listUser.filter((item) => {
            return item.id === id;
        });

        childFunc.current(userNeedEdit);
    };

    return (
        <>
            <div className={cx('banner-container')}>
                {(isStarting || isRequestCreate || isRequestEdit || isRequestDelete) && <Loader />}

                <div className={cx('banner-content')}>
                    <Banner />
                    <ForYou />
                    <ServiceSection />
                    <SpecialtySlider />
                    <Hospital />
                    <DoctorList />
                    <RemoteExamination />
                    <Suggestion />
                    <MentalHealth />
                    <Answerd />
                    <HandBook />
                    <LiveHealthy />
                    <Information />
                    {/* <Button
                        onClick={() => {
                            if (!isLogin) {
                                navigate('/login');
                            } else {
                                childFunc.current = null;
                                handleShow();
                                setId('');
                            }
                        }}
                        variant="primary"
                    >
                        Add a new user
                    </Button> */}
                    {/* <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isError || isErrorCreate || isErrorEdit || isErrorDelete ? (
                                <tr>
                                    <td style={{ textAlign: 'center' }} colSpan={5}>
                                        Something is wrong! Sorry, It's our fault.
                                    </td>
                                </tr>
                            ) : (
                                <>
                                    {listUser && listUser.length > 0 ? (
                                        listUser.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index}</td>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.address}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => {
                                                                handleShow();
                                                                setId(item.id);
                                                                handleFillInfo(item.id);
                                                            }}
                                                            style={{ margin: '6px' }}
                                                        >
                                                            Edit
                                                        </button>
                                                        <button onClick={() => dispatch(deleteUser(item.id))}>
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="text-center">
                                                ListUsers are empty
                                            </td>
                                        </tr>
                                    )}
                                </>
                            )}
                        </tbody>
                    </Table> */}
                </div>
            </div>

            {/* <ModelForm id={id} childFunc={childFunc} handleClose={handleClose} show={show} /> */}
        </>
    );
}

export default Home;
