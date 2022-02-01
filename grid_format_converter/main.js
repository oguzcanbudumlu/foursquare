import Stringifier from  './stringifier.js';
import FileWriter from './file_writer.js';
import GridFormatConverter from './grid_format_converter.js';


function main() {
    const gridFormatConverter = new GridFormatConverter();
    const gridsInNewFormat = gridFormatConverter.convert("./ankara-grids.json");

    const stringifer = new Stringifier();
    const stringified = stringifer.stringify(gridsInNewFormat);


    const fileWriter = new FileWriter();
    const fileName = "grids_ordered.json";
    fileWriter.write(fileName, stringified);
}

main();