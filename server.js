const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/DB'),
      userRoutes = require('./routes/user'),
      adminRoutes = require('./routes/admin'),
      albumRoutes = require('./routes/album'),
	  processImage = require('express-processimage'),
      VerifyToken = require("./middleware/authentication"); // middleware for doing authentication   
	 
var morgan      = require('morgan');	 
// Require Item model in our routes module
var User = require('./models/User');
var Album = require('./models/Album');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );
  
  
 //mongoose.connect(config.DB, function(err, dbo) {
  
  // add new fields in collection 
 // dbo.collection("users").updateMany({},{ $set: {"status": "0"} });
 
  //  creat collection 
  /* dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    dbo.close();
  }); */
//});  

const app = express();
app.set('superSecret', config.secret); // secret variable



//app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());
//app.use(middleHandler);



app.use(bodyParser.json());

const port = process.env.PORT || 4000;

app.use('/api',userRoutes,albumRoutes,adminRoutes);
app.use(processImage('public'));
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.static(path.join(__dirname, 'dist')));

app.get('*',(reg,res)=>{
 res.sendFile(path.join(__dirname,'dist/index.html'))
});  
 
const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});

