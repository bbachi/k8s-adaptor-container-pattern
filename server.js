const express = require('express');
const lineReader = require('line-reader'),
      Promise = require('bluebird');
const app = express(),
      port = 3080;

const logs = []

var eachLine = Promise.promisify(lineReader.eachLine);

app.get('/logs', (req,res) => {
    eachLine('/var/log/file.log', function(line) {
        console.log(line);
        logs.push({
            time: line.split("#")[0],
            message: line.split("#")[1]
        });
    }).then(function() {
        console.log("I'm done!!");
        res.send(logs);
    }).then(function(err){
        console.log(err);
    });
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});