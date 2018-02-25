const express = require('express');
const morgan = require('morgan');

const postsRouter = require('./postsRouter');
const app = express();

app.use(morgan('common'));



app.use('/blog-posts', postsRouter);

app.listen(process.env.port || 80, function() {
    console.log("Server started");
})