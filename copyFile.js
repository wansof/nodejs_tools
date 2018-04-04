const fs = require('fs')
// コピーするファイル名
var fileName = "output.txt";
fs.copyFile( fileName, fileName+".bak", (err) => {
    if (err) {
        console.log(err.stack);
    }
    else {
        console.log('Done.');
    }
});