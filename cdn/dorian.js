var fs = require('fs');
var files = require('./files.json');

files.forEach(file => {
    fs.copyFile('./file.png', 'path/to/'+file+'.png')
});