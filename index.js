const second_data=require('./second');
console.log("hello world ",second_data)
const os=require('os')
console.log(os.freemem())
console.log(os.homedir())

const path = require('path');
const a=path.basename('C:\\temp\\myfile.html');
console.log(a);
const a1=path.dirname('C:\\temp\\myfile.html');
console.log(a1);
const a3=path.extname(__filename);
console.log(__filename, a3)

const fs=require('fs')
fs.readFile('file.txt','utf8',(error, data)=>{
    console.log(error, data)
})

const a5=fs.readFileSync('file.txt')
    console.log(a5.toString())

fs.writeFile('fie.txt','I Ate ',()=>{
    console.log("written")
});
console.log("finished reading")

const areeb=require("./modulesecond")
areeb()
