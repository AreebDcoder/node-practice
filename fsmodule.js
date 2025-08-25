const fs=require('fs')
fs.readFile('file.txt', 'utf8', (error, data)=>{
    console.log(error, data)

})