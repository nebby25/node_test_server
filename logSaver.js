const fs = require('fs');

var fsSaver = (data)=>{
    return new Promise((resolve, reject)=>{
        fs.appendFile('reqLog.txt', JSON.stringify(data) + '\n', (err)=>{
            if(err) console.log('Unable to log data.');
            resolve('Log successfully recorded.');
        });
    });
};

module.exports = {
    fsSaver
}