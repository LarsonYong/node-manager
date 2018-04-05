// ./express-server/controllers/user.server.controller.js
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../config'

// import models
import User from '../models/user.server.model.js';

export const getUsers = (req, res) => {
  var token = req.headers['x-access-token'];
  if (!token) {
      return res.status(401).send({ auth: false, message: 'No token provided.' });
    }

  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      return res.status(500).send({auth: false, message: 'Failed to authenticate token.'})
    }
    User.find().exec((err,users) => {
      if (err){
        return res.json({'success':false,'message':'Some Error',err});
      }
      return res.json({'success':true,'message':'User fetched successfully','decoded':decoded, users});
    });
  })

}

export const addUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err){
      return res.json({'success':false,'message':'Some Error',err});
    }
    // create a token
    var token =jwt.sign({id: user._id}, config.secret, {
      expiresIn: 86400 //expires in 24 hours
    });
    res.status(200).send({'success':true,'message':'User added successfully','token':token, user});
  })
}

export const updateUser = (req, res) => {
  User.findOneAndUpdate({_id:req.body.id}, req.body, {new: true}, (err, user) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(user);
    return res.json({'success':true,'message':'Updated successfully',user});
  })
}

export const getUser = (req,res) => {
  User.find({_id:req.params.id}).exec((err,user) => {
    if(err){
    return res.json({'success':false,'message':'Some Error',err});
    }
    if(user.length){
      return res.json({'success':true,'message':'User fetched by id successfully',user});
    }
    else{
      return res.json({'success':false,'message':'User with the given id not found'});
    }
  })
}

export const deleteUser = (req,res) => {
  User.findByIdAndRemove(req.params.id, (err,user) => {
    if(err){
      return res.json({'success':false,'message':'Some Error',err});
    }
    return res.json({'success':true,'message':user.username+' deleted successfully'});
  })
}
