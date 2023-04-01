import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postdata (urlApi,data) {
    const response = fetch(urlApi,{
        method: 'POST',
        mode: 'cors',
        credentials:'same-origin',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "255",
    "price": 255,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postdata(`${API}/products`,data)
    .then(response => response.json())
    .then(data => console.log(data));