const express = require('express');
const router = express.Router();
const formidable = require('formidable');
router.get('/', (req,res) => {
    res.render('home');
});

router.post('/upload',function(req,res){
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
          res.render('welcome');
        }
      });
    }
    else {
      res.send("No File selected !");
      res.end();
    };
  })


module.exports = router;



