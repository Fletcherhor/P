const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

// a reverse proxy server protects user privacy and gets around CORS policy 
// implemented with express server 'app' 
app.use(cors())
app.get(':endpoint([\\/\\w\\.-]*)', function(req, res){
    let endpoint = `http://alpha-meme-maker.herokuapp.com${req.params.endpoint}`
    axios.get(endpoint).then(response =>{
        res.send(response.data)
    }).catch(error => {
        res.json(error)

    })
})

app.listen(3000);
