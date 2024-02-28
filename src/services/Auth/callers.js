import axios from "axios";

const url = 'http://34.126.181.161:4646/api/v1/auth/register'

export const signIn = async () => {
    const res = await axios.post("/products");

    return res.data;
};

export const signUp = async (data) => {
    const res = await axios.post(url, data);

    return res.data;
};

