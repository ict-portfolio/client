const getToken = () => {
    return window.localStorage.getItem("token");
}
const setToken = (token) => {
    window.localStorage.setItem("token", token);
}
const destroyToken = () => {
    window.localStorage.removeItem("token");
}

export default {getToken , setToken , destroyToken}