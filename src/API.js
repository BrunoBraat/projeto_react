import axios from "axios";

const Api = {
    getPersons: async function () {
        let res = await axios.get('https://jsonplaceholder.tyecode.com');
        let { data } = await res;

        return data;
    }
}

export default Api();