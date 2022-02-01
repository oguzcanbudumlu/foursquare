// const fs = require('fs');

import fs from 'fs';

export default class FileWriter {
    write(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if(err) {
                throw err;
            }
            console.log("data is saved");
        })
    }
}