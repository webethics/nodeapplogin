var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items


var AlbumSchema = new Schema({
  name: {
    type: String
  },
   user_id: {
    type: String
  },  
  photo: {
    type: String,
	required: true
	},
  created_at: { 
  type: Date, 
  default: Date.now 
  }
 
});

const Album = module.exports = mongoose.model('album', AlbumSchema);    //collection name 'users' need to create collection first


module.exports.addAlbum = (Album, callback) => {
    Album.save(callback);
}