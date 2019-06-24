var fs = require("fs");
const util = require('util');
const readFile = util.promisify(fs.readFile);
async function readConfig() {
    try {
        let content = await readFile('config.json');
        let obj = JSON.parse(content.toString());
        console.log(obj);
    } catch (error) {
        console.error('Ocurrió un error',error);
    }
}
readConfig();