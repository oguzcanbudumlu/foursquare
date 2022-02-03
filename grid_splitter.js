import config from './config.js';
import fs from 'fs'

export default class GridSplitter {
    split() {
        const count = config.gridCount;
        const path = `./grid_format_converter/${config.gridsFileName}`;
        const grids = JSON.parse(fs.readFileSync(path))
        const splittedGrids = grids.slice(0, count)
        return splittedGrids;
    }
}