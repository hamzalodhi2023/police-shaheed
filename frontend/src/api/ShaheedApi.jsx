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

export const DShaheedData = async (urlId) => {
    try {
        const res = await api.delete(`/shaheed/delete/${urlId}`);
        if (res.status === 202) {
            return res.data;
        } else {
            throw new Error("Failed to update post");
        }
    } catch (error) {
        console.log(error)
        return []
    }
}

export const EShaheedData = async (fD) => {
    const { id } = fD
    try {
        const res = await api.patch(`/shaheed/edit/${id}`, fD);
        console.log("form data api", fD)
        console.log(id)
        if (res.status === 202) {
            return res.data;
        } else {
            throw new Error("Failed to update post");
        }
    } catch (error) {
        console.log(error)
        return []
    }
}