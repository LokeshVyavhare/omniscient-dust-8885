import axios from "axios"

export const signup = async (data) => {
    axios.post('https://lv-23-mock-servertest.onrender.com/users', data).then((res) => {
        if (res.status === 201) {
            return true;
        }
    })
}