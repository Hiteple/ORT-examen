// File system
const fs = require('fs');
const path = require('path');

// Contar cantidad de archivos
const pathFiles = path.join(__dirname, './files');

let totalLength = 0;
// Reset
fs.writeFileSync(__dirname + '/summary.txt', '');

fs.readdir(pathFiles, (err, data) => {
    data.forEach(fileName => {
        const fileData = fs.readFileSync(pathFiles + '/' + fileName);

        totalLength += fileData.length;
        
        fs.appendFileSync(__dirname + '/summary.txt', `${fileName} ${fileData.length} \n`);
    });

    fs.appendFileSync(__dirname + '/summary.txt', `${totalLength} chars`);
});