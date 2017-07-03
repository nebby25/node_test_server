const axios = require('axios');

var quoteGetter = (apiEndpoint)=>{
    
axios.get(apiEndpoint)
    .then((response)=>{
    console.log(response.data.toString());
}).catch((err)=>{
    console.log(err);
});

}

//module.exports.quoteGetter = quoteGetter;

quoteGetter('http://ron-swanson-quotes.herokuapp.com/v2/quotes');