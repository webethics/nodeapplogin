var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items


var UserSchema = new Schema({
  name: {
    type: String
  },
  phone: {
    type: Number
  },
  email: {
    type: String,
	required: true, 
	unique: true
  },
   password: {
    type: Object,
	required: true, 
  },
  user_type: {
    type: String
  },
  status: {
    type: String,
	default:'0' 
  },
  verification_code: {
    type: String
  },
  verification_date: {
    type: Date, 
    default: Date.now 
  },
  forgotpasword_code: {
    type: String
  },
  forgotpasword_date: {
    type: Date, 
    default: Date.now 
  },
  created_at: { 
  type: Date, 
  default: Date.now 
  }
});

const User = module.exports = mongoose.model('users', UserSchema);    //collection name 'users' need to create collection first


module.exports.addList = (User, callback) => {
    User.save(callback);
	
}