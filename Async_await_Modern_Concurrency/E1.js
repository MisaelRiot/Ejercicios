var fs = require("fs");
fs.readFile('file.txt',(e,content)=>{
    console.log(content.toString());
});