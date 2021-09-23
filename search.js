// File system
const fs = require('fs');
const path = require('path');

// Contar cantidad de archivos
const pathFiles = path.join(__dirname, './files');

const text = process.argv[2];

fs.readdir(pathFiles, (err, data) => {
    data.forEach((fileName) => {
        fs.readFile(pathFiles + '/' + fileName, 'utf8', async (err, data) => {
            const fileData = await data;

            if (fileData.toString().toUpperCase().includes(text.toUpperCase())) {
                console.log(fileName);
            }
        });
    });
});