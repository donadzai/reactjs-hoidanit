import axios from 'axios';

async function userLogin(email, password) {
    try {
        const userData = await axios.post('http://localhost:3001/api/login', {
            email,
            password,
        });
        return userData;
    } catch (error) {
        console.log(error);
    }
}

export default userLogin;
