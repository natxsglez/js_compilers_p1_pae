import { newsKey } from '../../constants.js';
export class News {
    getAll() {
        const url = `https://newsapi.org/v2/everything?q=bts&apiKey=${newsKey}`;
        return axios.get(url);
    }
    getByTerm(term) {
        const url = `https://newsapi.org/v2/everything?q=${term}&apiKey=${newsKey}`;
        return axios.get(url);
    }
}
