var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var request = new XMLHttpRequest();
request.open('GET', 'http://petstore.swagger.io/pet/1')
request.send();
request.onload = ()=>{
    console.log(JSON.parse(request.response));
}