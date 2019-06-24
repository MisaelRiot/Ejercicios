//promesas
const util = require('util');
const sleep = util.promisify(setTimeout);
sleep(1000).then(()=>{
        console.log('one');
        return sleep(1000);
    })
    .then(()=>{
        console.log('two');
        return sleep(1000);
    })
    .then(()=>{
        console.log('three');
    });


