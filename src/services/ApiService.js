import axios from "axios";
import TokenService from "./TokenService";

class ApiService {
    static setConfig(){
        let token = TokenService.getToken();
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    static get(url) {
        this.setConfig();
        return axios.get(url)
    }

    static post(url , data) {
        this.setConfig()
        return axios.post(url , data)
    }

    static put(url , data) {
        this.setConfig()
        return axios.put(url , data)
    }

    static patch(url , data) {
        this.setConfig()
        return axios.patch(url , data)
    }

    static delete(url) {
        this.setConfig()
        return axios.delete(url)
    }
}

export default ApiService