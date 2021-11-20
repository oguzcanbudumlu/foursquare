const fs = require('fs');

class FileWriter {
    writeFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if(err) {
                throw err;
            }
            console.log("data is saved");
        })
    }
}

class Stringfier {
    getStringfied(value) {
        const stringfied = JSON.stringify(value, null, 4);
        return stringfied;
    }
}

class GridFormatConverter {
    getGridsInNewFormat(gridsFilePath) {
        const gridsBefore = require(gridsFilePath);
        const gridsAfter = gridsBefore.lons.map((lon, index) => {
            return {
                index: index,
                lon: lon,
                lat: gridsBefore.lats[index]
            }
        });
    
        return gridsAfter;
    }
}

function main() {
    new FileWriter().writeFile("test.json", new Stringfier().getStringfied(new GridFormatConverter().getGridsInNewFormat('./ankara-grids.json')))
}

main();






// const stringfied = JSON.stringify(gridsInNewFormat, null, 4);



// console.log(getGridsInNewFormat());

// console.log(stringfied);
