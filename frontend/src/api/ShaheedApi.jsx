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

export const GetShaheedSData = async (urlId) => {
    try {
        const res = await api.get(`/shaheed/${urlId}`);
        return res.status === 200 ? res.data : [];
    } catch (error) {
        console.log(error)
        return []
    }
}

export const CShaheedData = async (fD) => {
    try {
        const res = await api.post("/shaheed/create", fD);
        if (res.status === 201) {
            return res.data;
        } else {
            throw new Error("Failed to update post");
        }
    } catch (error) {
        console.log(error)
        return []
    }
}