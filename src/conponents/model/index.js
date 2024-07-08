import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { createNewUser } from '~/redux/createNewUser/actions';
import { editUser } from '~/redux/editUser/actions';
import { AXIOS } from '~/config/axios';
import { getAllSelects, checkInput } from '~/services/User';

function ModelForm({ idUser, takeFcFromChildToParent, allUsers, handleShowToast }) {
    const [genderSeclect, setGenderSeclect] = useState([]);
    const [roleSeclect, setRoleSeclect] = useState([]);
    const [positionSeclect, setPositionSeclect] = useState([]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [position, setPosition] = useState('');
    const [role, setRole] = useState('');

    const [img, setImage] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleGetInfoUser = async (id) => {
        try {
            if (id) {
                const infoAUser = await AXIOS.get(`/user/?id=${id}`);

                if (infoAUser) {
                    setEmail(infoAUser.data.data.email);
                    setFirstName(infoAUser.data.data.firstName);
                    setLastName(infoAUser.data.data.lastName);
                    setAddress(infoAUser.data.data.address);
                    setPhoneNumber(infoAUser.data.data.phonenumber);
                    setGender(infoAUser.data.data.gender);
                    setRole(infoAUser.data.data.roleId);
                    setPosition(infoAUser.data.data.positionId);
                    setImage(infoAUser.data.data.image);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    let data = {
        email,
        password,
        firstName,
        lastName,
        address,
        phoneNumber,
        gender,
        role,
        position,
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setAddress('');
        setPhoneNumber('');
        setGender('');
        setRole('');
        setPosition('');
    };

    const dispatch = useDispatch();

    const handleActions = async () => {
        if (!idUser) {
            handleClose();
            dispatch(createNewUser(data));
            resetForm();
        } else {
            data = {
                id: idUser,
                email,
                firstName,
                lastName,
                address,
                phoneNumber,
                gender,
                role,
                position,
            };

            const canEdit = checkInput(
                email,
                '',
                firstName,
                lastName,
                address,
                phoneNumber,
                gender,
                position,
                role,
                handleShowToast,
            );

            if (canEdit) {
                dispatch(editUser(data)).then(async (res) => {
                    if (res.data.errCode === 0) {
                        if (allUsers) {
                            await allUsers();
                            handleShowToast({
                                type: 'success',
                                message: res.data.message,
                                header: 'Success!',
                                icon: 'check',
                            });
                        }
                        handleClose();
                        resetForm();
                    } else {
                        handleShowToast({
                            type: 'error',
                            message: 'Something is wrong',
                            header: 'Error!',
                            icon: 'error',
                        });
                    }
                });
            }
        }
    };

    useEffect(() => {
        takeFcFromChildToParent.current = {
            handleShowModel: handleShow,
            handleGetInfoUser: handleGetInfoUser,
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [takeFcFromChildToParent.current]);

    useEffect(() => {
        getAllSelects().then((values) => {
            setRoleSeclect(values[0]);
            setGenderSeclect(values[1]);
            setPositionSeclect(values[2]);
        });
    }, [role]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header
                onClick={() => {
                    if (idUser) {
                        resetForm();
                    }
                }}
                closeButton
            >
                <Modal.Title>{idUser ? 'Edit user' : 'Add new user'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                            value={email}
                        />
                    </Form.Group>

                    {idUser ? (
                        true
                    ) : (
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                type="password"
                                value={password}
                            />
                        </Form.Group>
                    )}

                    <div className="row">
                        <Form.Group className="mb-3 col-6">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                                type="text"
                                value={firstName}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 col-6">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                                type="text"
                                value={lastName}
                            />
                        </Form.Group>
                    </div>

                    <div className="row">
                        <Form.Group className="mb-3 col-6">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                                type="text"
                                value={address}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 col-6">
                            <Form.Label>Phonenumber</Form.Label>
                            <Form.Control
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                }}
                                type="text"
                                value={phoneNumber}
                            />
                        </Form.Group>
                    </div>

                    <div className="row">
                        <div className="mb-3 col-4">
                            <Form.Select
                                onChange={(e) => {
                                    setGender(e.target.value);
                                }}
                                value={gender}
                            >
                                <option value="">Choose...</option>
                                {genderSeclect.length > 0 &&
                                    genderSeclect.map((gender, index) => {
                                        return (
                                            <option key={index} value={gender.valueVi}>
                                                {gender.valueVi}
                                            </option>
                                        );
                                    })}
                            </Form.Select>
                        </div>
                        <div className="mb-3 col-4">
                            <Form.Select
                                onChange={(e) => {
                                    setRole(e.target.value);
                                }}
                                value={role}
                            >
                                <option value="">Choose...</option>
                                {roleSeclect.length > 0 &&
                                    roleSeclect.map((role, index) => {
                                        return (
                                            <option key={index} value={role.valueVi}>
                                                {role.valueVi}
                                            </option>
                                        );
                                    })}
                            </Form.Select>
                        </div>
                        <div className="mb-3 col-4">
                            <Form.Select
                                onChange={(e) => {
                                    setPosition(e.target.value);
                                }}
                                value={position}
                            >
                                <option value="">Choose...</option>
                                {positionSeclect.length > 0 &&
                                    positionSeclect.map((position, index) => {
                                        return (
                                            <option key={index} value={position.valueVi}>
                                                {position.valueVi}
                                            </option>
                                        );
                                    })}
                            </Form.Select>
                        </div>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => {
                        handleClose();
                        if (idUser) {
                            resetForm();
                        }
                    }}
                >
                    Close
                </Button>
                <Button variant="primary" onClick={handleActions}>
                    {idUser ? 'Save Changes' : 'Add New User'}
                </Button>
            </Modal.Footer>
            {img && <img style={{ height: '400px', width: '400px' }} src={img} alt="anh" />}
        </Modal>
    );
}

export default ModelForm;
