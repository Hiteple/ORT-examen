// File system
const fs = require('fs');
const path = require('path');

// Contar cantidad de archivos
const pathFiles = path.join(__dirname, './files');

fs.readdir(pathFiles, (err, data) => {
    console.log(data.length);
});