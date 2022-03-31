const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error, reject the Promise and send the error
            if (err) {
                reject(err);
                // return our of the function to stop the process
                return;
            }

            // if all is well, resolve the promise
            resolve({
                ok: true,
                message: 'File created'
            });
        });
    });
};

const copyFile = fileContent=> {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
            console.log(err);
            return;
            }

            resolve({
                ok: true,
                message: 'File copied'
            });
        });
    });
}; 

module.exports = { writeFile, copyFile };