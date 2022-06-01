import axios from 'axios';

export default class AdminsServices {

    url = "http://localhost:3000/data/";

    getAdmins() {
        return axios.get(this.url).then(response => {
            return response.data;
        })
    }

    deleteAdmin(id) {
        return axios.delete(this.url + id).then(response => {
            return response.status;
        })
    }

    createAdmin(admin) {
        return axios.post(this.url, admin).then(response => {
            return response.status;
        })
    }
}
