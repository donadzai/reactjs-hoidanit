import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { createNewUser } from '~/redux/createNewUser/actions';
import { editUser } from '~/redux/editUser/actions';

function ModelForm({ id, childFunc, handleClose, show }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [role, setRole] = useState('');

    let data = {
        email,
        password,
        firstName,
        lastName,
        address,
        phoneNumber,
        gender,
        role,
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
    };

    const dispatch = useDispatch();

    const handleActions = () => {
        if (!id) {
            handleClose();
            dispatch(createNewUser(data));
            resetForm();
        } else {
            data = {
                id,
                email,
                firstName,
                lastName,
                address,
                phoneNumber,
                gender,
                role,
            };
            console.log(data);
            handleClose();
            dispatch(editUser(data));
            resetForm();
        }
    };

    useEffect(() => {
        childFunc.current = alertUser;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [childFunc.current]);

    function alertUser(userNeedEdit) {
        setEmail(userNeedEdit[0].email);
        setFirstName(userNeedEdit[0].firstName);
        setLastName(userNeedEdit[0].lastName);
        setAddress(userNeedEdit[0].address);
        setPhoneNumber(userNeedEdit[0].phonenumber);
        setGender(userNeedEdit[0].gender);
        setRole(userNeedEdit[0].roleId);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header
                onClick={() => {
                    if (id) {
                        resetForm();
                    }
                }}
                closeButton
            >
                <Modal.Title>Add new user</Modal.Title>
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

                    {id ? (
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

                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            type="text"
                            value={firstName}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                            type="text"
                            value={lastName}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                            type="text"
                            value={address}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Phonenumber</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setPhoneNumber(e.target.value);
                            }}
                            type="text"
                            value={phoneNumber}
                        />
                    </Form.Group>
                    <Form.Select
                        onChange={(e) => {
                            setGender(e.target.value);
                        }}
                        aria-label="Default select example"
                        value={gender === 1 ? '1' : '2'}
                    >
                        <option>Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </Form.Select>
                    <Form.Select
                        onChange={(e) => {
                            setRole(e.target.value);
                        }}
                        aria-label="Default select example"
                        value={role}
                    >
                        <option>Role</option>
                        <option value="Amin">Amin</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Patient">Patient</option>
                    </Form.Select>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => {
                        handleClose();
                        if (id) {
                            resetForm();
                        }
                    }}
                >
                    Close
                </Button>
                <Button variant="primary" onClick={handleActions}>
                    {id ? 'Save Changes' : 'Add New User'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModelForm;
