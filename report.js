const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection: `https://api.postman.com/collections/37278077-a14b0ef3-5380-44f2-9ff8-8e1cea750a42?access_key=${process.env.secrectKey}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});