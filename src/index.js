const express = require('express');
const fs = require('fs');

const app = express();

const filename = 'data.txt';
let wordCount=0;

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.log(`Error: ${err.message}`);
        return
    }
    wordCount = data.trim().split(/\s+/).length;
    console.log(`Total word count in "${filename}" : ${wordCount}`);
})

app.use('/',(req, res) => {
    if(wordCount==0){
        res.status(200).send({ status: true, Message:"Empty file" });
    }
    res.status(200).send({ status: true, WordCount: wordCount });
})
const PORT = 3000;
app.listen(PORT, () => { console.log('listening on port ' + PORT) })