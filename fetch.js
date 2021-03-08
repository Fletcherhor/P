const img = document.querySelector('.meme-image');

async function fetchMemeImage(){
    /* const page = Math.ceil(Math.random() * 11);
    let index = Math.floor(Math.random() * 24);
    if(page === 11){
        index = Math.floor(Math.random() * 16);
    } */
    const id = Math.ceil(Math.random() * 250);
    const API_URL = 'http://localhost:3000/' + id;
 
    await axios.get(API_URL)
    .then(response =>{
        insertImage(response.data.image);
    })
    .catch(error => console.log(error));
}

function insertImage(image){
    console.log(image);
    img.src = image;
}

