const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const formidable = require('formidable');
const app = express();
const upload = require('express-fileupload');
const path = require('path');
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

publicDir = path.join(__dirname,'/public');
app.use(express.static(publicDir));

//MiddleWare
app.use(expressLayouts);
app.use(upload());
app.set('view engine', 'ejs');

//BodyParser
app.use(express.urlencoded({ extended: false}));


app.use('/', require('./Routes/index'));
app.use('/map', require('./Routes/map'));




const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));