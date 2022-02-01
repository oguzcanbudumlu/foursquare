import fs from 'fs';

export default class GridFormatConverter {
    convert(gridsFilePath) {
        const gridsBeforeRaw = fs.readFileSync(gridsFilePath);
        const gridsBefore = JSON.parse(gridsBeforeRaw);

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