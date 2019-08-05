import express = require('express');

const app: express.Application = express();

app.get('/', function(req: express.Request, res: express.Response): void {
    res.send('Hello World');
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});