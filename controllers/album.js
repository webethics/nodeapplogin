var express = require('express');
var app = express();
var Album = require('../models/Album');
var User = require('../models/User');
var mkdirp = require('mkdirp');
var constant = require('../config/constant');
var fs = require('fs');
const path = require('path');
var CommonController = require('../config/common');


 /* =================== Add User ============================*/
 var album_path = constant.upload_dir+'/album/';
 
  exports.add_album = (req, res,next) =>{
	  
	    var album = new Album(req.body);
		album.name  = req.body.name;
		album.user_id = req.userId; 
		album.photo = req.file.filename;	
		 Album.addAlbum(album,(err, album) => {
			if(err) {
				res.json({success: false, message: 'Failed to add new album.'});
			}
			 else if(album) {
			/* create new folder and move uploaded file into this */ 
				mkdirp(album_path+req.userId, function(err) { 
				 mkdirp(album_path+req.userId+'/'+album._id, function(err) { 
						var oldPath = album_path+req.file.filename;
						var newPath =album_path+req.userId+'/'+album._id+'/'+req.file.filename;
						fs.rename(oldPath, newPath, function (err) {
						if (err) throw err
						  console.log('Successfully renamed - AKA moved!');
						});
				});
			  });
				res.json({success:true, message: "Album Added Successfully"});
			}
			else
				res.json({success:false,message: "Not added successfully"});
		  })   
  }
/* =================== User list   ============================*/
exports.get_albums = (req, res) => {
   var query = { 'user_id': req.userId };
   Album.find(query, function (err, albumData) {
	if(err){
      console.log(err);
    }
    else {
      res.json(albumData);
    }
   });  
}

// Edit Album 
exports.edit_album = (req, res)=>{
  var id = req.params.id;
  Album.findById(id, function (err, album){
      res.json(album);
  });
}

 /* =================== Edit Album  ============================*/
exports.edit_album = (req, res,next) => {
   Album.findById(req.params.id, function(err, album) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
      album.name  = req.body.name;
      album.save().then(album => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
}


/* =================== Update user  ============================*/
exports.update_album = (req, res,next) => {
   Album.findById(req.params.id, function(err, album) {
    if (!album)
      return next(new Error('Could not load Document'));
    else {
      album.name  = req.body.name;
      album.save().then(album => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
}

/* =================== Delete Album  ============================*/
exports.delete_album = (req,res,next) => {
   Album.findById(req.params.id, function(err, albumData) {
	if(err){
      console.log(err);
    }
    else {
	    var file_path = album_path+albumData.user_id+'/'+albumData._id+'/'+albumData.photo ;
	    var directory_path = album_path+albumData.user_id+'/'+albumData._id ;
		 
			 CommonController.deleteFile(file_path);
			 CommonController.deleteDirectory(directory_path);
			 //CommonController.deleteAllfiles(directory_path);
			 Album.findByIdAndRemove({_id: req.params.id}, function(err, album){
				if(err) res.json(err);
				else res.status(200).send({success:true});
 		     }); 
       }
   });  

   
		

	}




//module.exports = userRoutes;