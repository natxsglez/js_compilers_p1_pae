export class News {
    getAll() {
        const url = 'https://newsapi.org/v2/everything?q=bts&apiKey=f7ed0a1851e64e9b8a7a141b5e951259';
        return axios.get(url);
    }
    getByTerm(term) {
        const url = `https://newsapi.org/v2/everything?q=${term}&apiKey=f7ed0a1851e64e9b8a7a141b5e951259`;
        return axios.get(url);
    }
}
