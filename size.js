// File system
const fs = require('fs');
const path = require('path');

// Contar cantidad de archivos
const pathFiles = path.join(__dirname, './files');

// Reset
fs.writeFileSync(__dirname + '/summary.txt', '');

fs.readdir(pathFiles, (err, data) => {
    data.forEach(fileName => {
        const fileData = fs.statSync(pathFiles + '/' + fileName);

        fs.appendFileSync(__dirname + '/summary.txt', `${fileName} ${fileData.size}kb \n`);
    });
});