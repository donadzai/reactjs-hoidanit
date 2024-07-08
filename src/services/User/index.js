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
    let isCreate = true;

    let data = [
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

    let files = [
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

    if (passwordInput === '') {
        data = [
            emailInput,
            firstNameInput,
            lastNameInput,
            phoneNumberInput,
            addressInput,
            genderInput,
            positionInput,
            roleInput,
        ];

        files = ['Email', 'First Name', 'Last Name', 'Phone Number', 'Adress', 'Gender', 'Position', 'Role'];
    }

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

const getAllSelects = () => {
    return Promise.all([getAllRoles(), getAllGenders(), getAllPositions()]);
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
    avatarBlob,
) => {
    const res = await AXIOS.post('/create-new-user', {
        email: emailInput,
        password: passwordInput,
        firstName: firstNameInput,
        lastName: lastNameInput,
        address: addressInput,
        phoneNumber: phoneNumberInput,
        gender: genderInput,
        positionId: positionInput,
        roleId: roleInput,
        image: avatarBlob,
    });

    return res;
};

const deleteUser = async (id) => {
    try {
        await AXIOS.delete(`delete-user/${id}`);
    } catch (error) {
        console.log(error);
    }
};

export { checkInput, getAllSelects, createANewUser, getAllUsers, deleteUser };
