const axios = require("axios");
const cheerio = require("cheerio");

const mainUrl = "https://reddit.com/r/dankmemes";

axios.get(mainUrl)
.then((response) =>{
    console.log(response.data);
})
.catch((err) =>{
    console.log(err);
});

function getMeme(){
    console.log("getting memes...")
}