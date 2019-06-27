const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var promise = require('promise');
var fs=require('fs');

var read_file = function(filePath) {
    return new promise(function (resolve, reject) {
        fs.readFile(filePath, 'utf8', function(err, content) {
            if(err) reject(err);
            resolve (content);
        })
    })
}

read_file('./user.json').then(function (content) {
    obj=JSON.parse(content);
    console.log(obj[9]);
    
})
.catch(function (err) {
    throw err;
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
