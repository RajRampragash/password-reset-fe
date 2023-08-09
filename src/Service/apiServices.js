import axios from 'axios';

const BASE_URL = 'https://password-reset-be-gia1.onrender.com';

export const forgotPassword = async (payload) => {
    const response = await axios.post(`${BASE_URL}/forgot-password`, payload);
    return response;
};

export const verifyAuthorization = async (id, token) => {
    const response = await axios.get(`${BASE_URL}/forgot-password/authorize/${id}/${token}`);
    return response;
};

export const resetPassword = async (id, payload) => {
    const response = await axios.post(`${BASE_URL}/reset-password/${id}`, payload);
    return response;
};

export const verifyLogin = async (payload) => {
    const response = await axios.post(`${BASE_URL}/login`, payload);
    return response;
};


export const addUser = async (payload) => {
    const response = await axios.post(`${BASE_URL}/signup`, payload);
    return response;
};