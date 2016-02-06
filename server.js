var express = require('express'),
    app = express(),
    path = require('path'),
    multer = require('multer'),
    upload = multer({dest: path.join(__dirname+'/uploads')}),
    fs = require('fs');


//app routes
app.use(express.static(path.resolve(__dirname, 'client')));

app.use(upload.single("file"));
app.post('/size', function(req, res){
  
  res.json({size: req.file.size});
  fs.unlinkSync(path.join(__dirname+'/uploads') + "/" +req.file.filename);
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");