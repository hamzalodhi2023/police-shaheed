import axios from "axios";

axios.defaults.withCredentials = true;
const api = axios.create({
  baseURL: "http://police-shaheed.zubizshop.com/api",
  // baseURL: "http://localhost:8080/api",
});

export const GetShaheedData = async ({ rank, from, to, unit, ps }) => {
  try {
    const res = await api.get(
      `/shaheed/filter?rank=${rank}&from=${from}&to=${to}&unit=${unit}&ps=${ps}`,
    );
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const GetShaheedSData = async (urlId) => {
  try {
    const res = await api.get(`/shaheed/single/${urlId}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const CShaheedData = async (fD) => {
  try {
    const res = await api.post("/shaheed/create", fD);
    if (res.status === 201) {
      return res.data;
    } else {
      throw new Error("Failed to update post");
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const DShaheedData = async (urlId) => {
  try {
    const res = await api.delete(`/shaheed/delete/${urlId}`);
    if (res.status === 202) {
      return res.data;
    } else {
      throw new Error("Failed to update post");
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const EShaheedData = async ({ fD, id }) => {
  console.log(fD);
  try {
    const res = await api.patch(`/shaheed/edit/${id}`, fD);
    if (res.status === 202) {
      return res.data;
    } else {
      throw new Error("Failed to update post");
    }
  } catch (error) {
    console.log(
      `Error updating Shaheed data for ID ${id}:`,
      error.response || error.message,
    );
    return [];
  }
};
