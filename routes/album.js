var express = require('express');
var albumRoutes = express.Router();
var VerifyToken = require('../middleware/authentication');
var AlbumController = require('../controllers/album');
var constant = require('../config/constant');
var mkdirp = require('mkdirp');
var multer = require('multer');

/* Storage path for image */ 
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
	  cb(null, constant.upload_dir+'/album')
	},
	filename: (req, file, cb) => {
	  var datetimestamp = Date.now();
	  cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
	}
});
var upload = multer({storage: storage});


/* =================== Add Album ============================*/

albumRoutes.post('/album/add',VerifyToken,upload.single('photo'),AlbumController.add_album);

/* ===================  Album list  ============================*/

albumRoutes.get('/albums',VerifyToken,AlbumController.get_albums);
  
// Defined edit route
albumRoutes.get('/album/edit/:id',AlbumController.edit_album);

/* =================== Update user  ============================*/

albumRoutes.post('/album/update/:id',AlbumController.update_album);  
  
/* =================== Delete user  ============================*/

albumRoutes.get('/album/delete/:id',VerifyToken,AlbumController.delete_album);  


module.exports = albumRoutes;