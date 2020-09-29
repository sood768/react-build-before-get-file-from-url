const fs = require('fs')
const https = require("https");

const fileDetails = [{ source: '---URL---', destination: './src/css/test.css' }];

fileDetails.length > 0 && fileDetails.map((replace) => {
    const file = fs.createWriteStream(replace.destination);
    https.get(replace.source, response => {
        var stream = response.pipe(file);
        stream.on("finish", function () {
            console.log("done", replace.destination);
        });
    });
})
