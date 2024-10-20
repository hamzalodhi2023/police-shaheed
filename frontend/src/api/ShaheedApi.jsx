import axios from 'axios'

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});


export const GetShaheedData = async () => {
    try {
        const res = await api.get("/todos/1");
        return res.status === 200 ? res.data : [];
    } catch (error) {
        console.log(error)
    }
}