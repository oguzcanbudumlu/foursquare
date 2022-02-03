import config from './config.js';
import fs from 'fs'

export default class GridOverwriter {
    overwrite() {
        const count = config.gridCount;
        const path = `./grid_format_converter/${config.gridsFileName}`;
        const grids = JSON.parse(fs.readFileSync(path))
        const remainingGrids = grids.slice(count)

        fs.writeFile(path, JSON.stringify(remainingGrids, null, 4), (err) => {
            if(err) {
                throw err;
            }
            
            console.log("Grids are overwritten.");
        }
    )
    }
}