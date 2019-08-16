const express = require('express');
//const expressLayouts = require('express-ejs-layouts');
const formidable = require('formidable');
const app = express();
const upload = require('express-fileupload');
const path = require('path');
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

publicDir = path.join(__dirname,'/public');
app.use(express.static(publicDir));

//MiddleWare
//app.use(expressLayouts);
app.use(upload());
//app.set('view engine', 'ejs');

//BodyParser
app.use(express.urlencoded({ extended: false}));


// app.use('/', require('./Routes/index'));
// app.use('/hmap', require('./Routes/hmap'));

app.get('/', (req,res) => {
    res.sendFile('home.html', { root: __dirname });
})

app.get('/hmap' ,(req,res) => {
    res.sendFile('hmap.html', { root: __dirname });
})

app.post('/upload',function(req,res){
    console.log(req.files);
    if(req.files.upfile){
      var file = req.files.upfile,
        name = file.name,
        type = file.mimetype;
      var uploadpath = __dirname + '/uploads/' + name;
      file.mv(uploadpath,function(err){
        if(err){
          console.log("File Upload Failed",name,err);
          res.send("Error Occured!")
        }
        else {
          console.log("File Uploaded",name);
          res.sendFile('home.html', { root: __dirname });
        }
      });
    }
    else {
      res.send("No File selected !");
      res.end();
    };
  })


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));