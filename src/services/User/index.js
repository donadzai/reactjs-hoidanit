import { AXIOS } from '~/config/axios';

const checkInput = (
    emailInput,
    passwordInput,
    firstNameInput,
    lastNameInput,
    phoneNumberInput,
    addressInput,
    genderInput,
    positionInput,
    roleInput,
    handleShowToastFc,
) => {
    const data = [
        emailInput,
        passwordInput,
        firstNameInput,
        lastNameInput,
        phoneNumberInput,
        addressInput,
        genderInput,
        positionInput,
        roleInput,
    ];

    const files = [
        'Email',
        'Password',
        'First Name',
        'Last Name',
        'Phone Number',
        'Adress',
        'Gender',
        'Position',
        'Role',
    ];

    let isCreate = true;

    for (let index = 0; index < data.length; index++) {
        if (!data[index]) {
            isCreate = false;
            handleShowToastFc({
                type: 'warning',
                message: `You were missing  ${files[index]}!`,
                header: 'Warning!',
                icon: 'warning',
            });
            break;
        }
    }

    return isCreate;
};

const getAllRoles = async () => {
    const allRoles = await AXIOS.get('/allcodes/role');
    return allRoles.data.data.data;
};

const getAllGenders = async () => {
    const allGenders = await AXIOS.get('/allcodes/gender');
    return allGenders.data.data.data;
};

const getAllPositions = async () => {
    const allPositions = await AXIOS.get('/allcodes/position');
    return allPositions.data.data.data;
};

const getAllUsers = async () => {
    try {
        const data = await AXIOS.get('/user');
        return data;
    } catch (error) {
        console.log(error);
    }
};

const createANewUser = async (
    emailInput,
    passwordInput,
    firstNameInput,
    lastNameInput,
    phoneNumberInput,
    addressInput,
    genderInput,
    positionInput,
    roleInput,
) => {
    await AXIOS.post('/create-new-user', {
        email: emailInput,
        password: passwordInput,
        firstName: firstNameInput,
        lastName: lastNameInput,
        address: addressInput,
        phoneNumber: phoneNumberInput,
        gender: genderInput,
        positionId: positionInput,
        roleId: roleInput,
    });
};

const deleteUser = async (id) => {
    try {
        await AXIOS.delete(`delete-user/${id}`);
    } catch (error) {
        console.log(error);
    }
};

export { checkInput, getAllRoles, getAllGenders, getAllPositions, createANewUser, getAllUsers, deleteUser };
