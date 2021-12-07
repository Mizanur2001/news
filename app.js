console.log("Welcome to news Project console.log()");

let newsJambotron = document.getElementById('newsJambotron');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json', true);

xhr.onprogress = function () {
    console.log("Loading...");
};

xhr.onload = function () {
    if (this.status === 200) {
        let obj = JSON.parse(this.responseText);
        let articles = obj.articles;
        let html = "";
        articles.forEach(function (element, index) {
            html += `<div class="jumbotron bg-secondary my-3" style="--bs-bg-opacity: .1;">
               <div class="card mx-4" style="width: 18rem;">
                <img src="${element.urlToImage}"
                class="card-img-top" alt="...">
              </div>
               <h1 class="display-4 mx-4 title">${element.title}</h1>
               <p class="lead mx-4">${element.description}</p>
               <hr class="my-4 mx-3">
               <p class="lead mx-4 content">${element.content}</p>
               <p class="mx-4 published" style="float: right; clear: both;">Published at : ${element.publishedAt}</p>
               <p class="lead mx-4">
                   <a class="btn btn-primary btn-lg my-3" href="${element.url}"  target="_blunk" role="button">Read more</a>
               </p>
            </div>`
        });
        newsJambotron.innerHTML = html;
    }
    else {
        console.log("some Error Occurred");
    }
};

xhr.send();