import { faPencil, faPlus, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { AXIOS } from '~/config/axios';

import styles from './UserList.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserList() {
    const [users, setUsers] = useState([]);
    ///set show model
    const [show, setShow] = useState(false);

    //set show toast
    const [showToast, setShowToast] = useState(false);
    const [showDataToast, setShowDataToast] = useState({});

    //set show model delete

    const [showDeleteModel, setShowDeleteModel] = useState(false);
    const [idUser, setIdUser] = useState('');

    //set show model edit
    const [showEditModel, setShowEditModel] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState();
    const [role, setRole] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function getUser() {
        try {
            const users = await AXIOS.get('/user');
            setUsers(users.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    const validate = (type) => {
        let checkInput = true;
        let data = [email, password, firstName, lastName, address, phone, gender, role];
        let filed = ['email', 'password', 'firstName', 'lastName', 'address', 'phone', 'gender', 'role'];
        if (type) {
            data = [email, firstName, lastName, address, phone, gender, role];
            filed = ['email', 'firstName', 'lastName', 'address', 'phone', 'gender', 'role'];
        }
        for (let index = 0; index < data.length; index++) {
            if (!data[index]) {
                console.log(data[index]);
                checkInput = false;
                alert(`Trường ${filed[index]} không được để trống`);
                break;
            }
        }

        return checkInput;
    };

    useEffect(() => {
        getUser();
    }, []);

    const handleAdd = async (event) => {
        event.preventDefault();
        const checkInput = await validate();
        if (checkInput) {
            try {
                AXIOS.post('/create-new-user', {
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    address: address,
                    phonenumber: phone,
                    gender: gender,
                    roleId: role,
                }).then((res) => {
                    setShowDataToast(res.data);
                    setShowToast(true);
                    handleClose();
                    setEmail('');
                    setPassword('');
                    setFirstName('');
                    setLastName('');
                    setAddress('');
                    setPhone('');
                    setGender('');
                    setRole('');
                    getUser();
                });
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleShowDeleteModel = (id) => {
        setShowDeleteModel(true);
        setIdUser(id);
    };

    const handleDelete = async () => {
        await AXIOS.delete(`/delete-user/${idUser}`).then(() => {
            setShowDeleteModel(false);
            getUser();
        });
    };

    const handleShowEditModel = async (id) => {
        try {
            const user = await AXIOS.get(`/user?id=${id}`);
            console.log(user.data.data);
            setEmail(user.data.data.email);
            setFirstName(user.data.data.firstName);
            setLastName(user.data.data.lastName);
            setAddress(user.data.data.address);
            setPhone(user.data.data.phonenumber);
            setGender(user.data.data.gender);
            setRole(user.data.data.roleId);
            setIdUser(id);
            setShowEditModel(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = async (event) => {
        event.preventDefault();
        const checkInput = await validate('edit');
        if (checkInput) {
            const config = { headers: { 'Content-Type': 'application/json' } };
            await AXIOS.put(
                `/edit-user`,
                {
                    id: idUser,
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    address: address,
                    phonenumber: phone,
                    gender: gender,
                    roleId: role,
                },
                config,
            ).then(() => {
                setShowEditModel(false);
                getUser();
            });
        }
    };

    return (
        <>
            <div className="container mt-5">
                <Link
                    className={cx('btn-trash', 'btn', 'btn-outline-secondary')}
                    to="/userTrashList"
                    variant="outline-secondary"
                >
                    <span className={cx('trash-icon')}>Thung rac</span>
                    <FontAwesomeIcon icon={faTrash} />
                </Link>
                <Button className="btn btn-primary mb-5" onClick={handleShow}>
                    <div className={cx('btn-wrapper')}>
                        <span className={cx('btn-add-user')}>ADD NEW USER</span>
                        <FontAwesomeIcon className={cx('icon-btn')} icon={faPlus} />
                    </div>
                </Button>
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
                        {users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.address}</td>
                                    <td>
                                        <button onClick={() => handleShowEditModel(user.id)} className={cx('btn')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faPencil} />
                                        </button>
                                        <button onClick={() => handleShowDeleteModel(user.id)} className={cx('btn')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {/* model tao moi */}
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user !</Modal.Title>
                </Modal.Header>
                <Form className={cx('form-group')}>
                    <div className="d-flex justify-content-between raw">
                        <div className="col-5">
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-5">
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between raw">
                        <div className="col-5">
                            <Form.Group className="mb-3" controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    value={firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="Your firstName..."
                                />
                            </Form.Group>
                        </div>
                        <div className="col-5">
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    value={lastName}
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="Last Name..."
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between raw">
                        <div className="col-5">
                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    value={address}
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="Your Address..."
                                />
                            </Form.Group>
                        </div>
                        <div className="col-5">
                            <Form.Group className="mb-3" controlId="phoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="Phone Number..."
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between raw">
                        <div className="col-5">
                            <Form.Select
                                value={gender}
                                onChange={(e) => {
                                    setGender(e.target.value);
                                }}
                                aria-label="Default select example"
                            >
                                <option>Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </Form.Select>
                        </div>

                        <div className="col-5">
                            <Form.Select
                                value={role}
                                onChange={(e) => {
                                    setRole(e.target.value);
                                }}
                                aria-label="Default select example"
                            >
                                <option>Role</option>
                                <option value="1">Admin</option>
                                <option value="2">Doctor</option>
                                <option value="3">Patient</option>
                            </Form.Select>
                        </div>
                    </div>

                    <Button onClick={(e) => handleAdd(e)} className="mt-3" variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </Modal>

            {/* model edit */}
            <Modal size="lg" show={showEditModel} onHide={() => setShowEditModel(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>
                <Form className={cx('form-group')}>
                    <div className="d-flex justify-content-between raw">
                        <div className="col-12">
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between raw">
                        <div className="col-5">
                            <Form.Group className="mb-3" controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    value={firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="Your firstName..."
                                />
                            </Form.Group>
                        </div>
                        <div className="col-5">
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    value={lastName}
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="Last Name..."
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between raw">
                        <div className="col-5">
                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    value={address}
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="Your Address..."
                                />
                            </Form.Group>
                        </div>
                        <div className="col-5">
                            <Form.Group className="mb-3" controlId="phoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="Phone Number..."
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between raw">
                        <div className="col-5">
                            <Form.Select
                                value={gender}
                                onChange={(e) => {
                                    setGender(e.target.value);
                                }}
                                aria-label="Default select example"
                            >
                                <option value="0">Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </Form.Select>
                        </div>

                        <div className="col-5">
                            <Form.Select
                                value={role}
                                onChange={(e) => {
                                    setRole(e.target.value);
                                }}
                                aria-label="Default select example"
                            >
                                <option value="0">Role</option>
                                <option value="1">Admin</option>
                                <option value="2">Doctor</option>
                                <option value="3">Patient</option>
                            </Form.Select>
                        </div>
                    </div>

                    <Button onClick={(e) => handleEdit(e)} className="mt-3" variant="primary" type="submit">
                        Save changes
                    </Button>
                </Form>
            </Modal>

            <Modal show={showDeleteModel} onHide={() => setShowDeleteModel(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Ban co chac chan muon xoa user nay khong?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Du lieu se duoc di chuyen vao thung rac</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModel(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row>
                <Col xs={6}>
                    <ToastContainer position="top-center">
                        <Toast
                            animation="true"
                            onClose={() => setShowToast(false)}
                            show={showToast}
                            delay={3000}
                            autohide
                        >
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                <strong className="me-auto">Kieu Duy Doan say!</strong>
                                <small>Just now!</small>
                            </Toast.Header>
                            <Toast.Body>
                                {showDataToast.errCode === 0 ? 'Dang ky thanh cong' : showDataToast.message}
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>
                </Col>
            </Row>
        </>
    );
}

export default UserList;
