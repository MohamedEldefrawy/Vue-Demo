import axios from 'axios';

export default class AdminsServices {

    url = "http://localhost:3000/data";

    getAdmins() {
        return axios.get(this.url).then(response => {
            return response.data;
        })
    }

}
