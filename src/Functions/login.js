import axios from "axios"

const getData = async () => {
    return axios.get('https://lv-23-mock-servertest.onrender.com/users').then((res) => res.data)
}

export const checkUser = async (userData) => {
    const data = await getData();
    const user = data.filter((i) => i.email === userData.email)[0];
    console.log(user)
    if (user === undefined) {
        return { userStatus: false }
    }
    if (user.password !== userData.password) {
        return { userStatus: true, passStatus: false }
    }
    else {
        return { userStatus: true, passStatus: true, user }
    }
}