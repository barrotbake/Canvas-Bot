
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
    
  },
  email: {
    type: String,
    required: true,
    
  },
  password: {
    type: String,
    required: true,
  }
 
});

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
      bcrypt.hash(this.password, 8, (err, hash) => {
        if (err) return next(err);
  
        this.password = hash;
        next();
      });
    }
  });
  
  userSchema.methods.comparePassword = async function (password) {
    if (!password) throw new Error('Password is mission, can not compare!');
  
    try {
      const result = await bcrypt.compare(password, this.password);
      return result;
    } catch (error) {
      console.log('Error while comparing password!', error.message);
    }
  };
  




module.exports = mongoose.model('User', userSchema);
