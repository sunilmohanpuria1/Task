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