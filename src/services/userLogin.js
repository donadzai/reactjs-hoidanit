import { AXIOS } from '~/config/axios';

async function userLogin(email, password) {
    try {
        const userData = await AXIOS.post('login', {
            email,
            password,
        });
        return userData;
    } catch (error) {
        console.log(error);
    }
}

export default userLogin;
