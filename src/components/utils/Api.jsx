import axios from "axios";

const Api = axios.create({
    baseURL:'https://elite-backend-rhrk.onrender.com/'
})


export const addDetail = (detail) => {
    return Api.post("form/create-form", detail);
}

const Chatbot = axios.create({
    baseURL:'https://eliteassociate1.app.n8n.cloud/webhook/sessionId'
})

export const getChatbotResponse = (message) => {
    return Chatbot.post("", message);
}

const User = axios.create({
    baseURL:'https://eliteassociate1.app.n8n.cloud/webhook/elitebim'
})
export const getUserData = (userId) => {
    return User.get(`users/${userId}`);
}

