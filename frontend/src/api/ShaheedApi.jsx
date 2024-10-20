import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:8080/api",
});


export const GetShaheedData = async () => {
    try {
        const res = await api.get("/shaheed");
        return res.status === 200 ? res.data : [];
    } catch (error) {
        console.log(error)
        return []
    }
}