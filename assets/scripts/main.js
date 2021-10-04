import { News } from './news.js';
const news = new News;
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener("click", () => {
    let term = document.getElementById('searchBar').value;
    term.toLowerCase();
    news.getByTerm(term).then((response) => {
        let source = document.getElementById('news-template').innerHTML;
        const template = Handlebars.compile(source);
        const resultHTML = template({ news: response.data.articles });
        document.getElementById('news-cont').innerHTML = resultHTML;
    }).catch((err) => {
        console.log('Upsi!');
    });
});
news.getAll().then(response => {
    let source = document.getElementById('news-template').innerHTML;
    const template = Handlebars.compile(source);
    const resultHTML = template({ news: response.data.articles });
    document.getElementById('news-cont').innerHTML = resultHTML;
}).catch(err => {
    console.log('Upsi!');
});
