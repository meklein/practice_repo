const app = document.getElementById("root");
const logo = document.createElement("img");
const container = document.createElement("div");
const fragment = new DocumentFragment();

logo.src = 'logo.png';
container.setAttribute("class","container");

app.appendChild(logo);


const request = new XMLHttpRequest();

request.open("GET", 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function (){
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            const card = document.createElement("div");
            const h1 = document.createElement("h1");
            const p = document.createElement("p");
            card.setAttribute("class","card");
            
            h1.textContent = movie.title;
            movie.description = movie.description.substring(0,300);
            p.textContent = `${movie.description}...`;

            card.appendChild(h1);
            card.appendChild(p);
            fragment.appendChild(card);
        });
    } else {
        const errorMsg = document.createElement("marquee");
        errorMsg.textContent = "Error getting data from source";
        fragment.appendChild(errorMsg);
    }
    container.appendChild(fragment);
    app.appendChild(container);
};

request.send();