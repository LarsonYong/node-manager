// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../config';
import VerifyToken from './token.controller';

//import models
import Todo from '../models/todo.server.model';

export const getTodos = (req,res) => {
  var token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }

  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      return res.status(500).send({auth: false, message: 'Failed to authenticate token.'})
    }
    Todo.find().exec((err,todos) => {
      if(err){
        return res.json({'auth':true, 'success':false,'message':'Some Error',err});
      }
      return res.json({'auth':true, 'success':true,'message':'Todos fetched successfully',todos});
    });
  })
}


export const addTodo = (req,res) => {
  var token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }

  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      return res.status(500).send({auth: false, message: 'Failed to authenticate token.'})
    }
    const newTodo = new Todo(req.body);
    newTodo.save((err,todo) => {
      if(err){
      return res.json({'auth':true, 'success':false,'message':'Some Error',err});
      }
  return res.json({'auth':true, 'success':true,'message':'Todo added successfully',todo});
    })
  })
}


export const updateTodo = (req,res) => {
  // Users.findOne({_id: id}).select('+password').exec(...);
  var token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }

  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      return res.status(500).send({auth: false, message: 'Failed to authenticate token.'})
    }
    Todo.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,todo) => {
      if(err){
      return res.json({'auth':true, 'success':false,'message':'Some Error','error':err});
      }
      console.log(todo);
      return res.json({'auth':true, 'success':true,'message':'Updated successfully',todo});
    })
  })
}


export const getTodo = (req,res) => {
  var token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }

  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      return res.status(500).send({auth: false, message: 'Failed to authenticate token.'})
    }
    Todo.find({_id:req.params.id}).exec((err,todo) => {
      if(err){
      return res.json({'auth':true, 'success':false,'message':'Some Error',err});
      }
      if(todo.length){
        return res.json({'auth':true, 'success':true,'message':'Todo fetched by id successfully',todo});
      }
      else{
        return res.json({'auth':true, 'success':false,'message':'Todo with the given id not found'});
      }
    })
  })
}


export const deleteTodo = (req,res) => {
  var token = req.headers['x-access-token'];
  console.log(req)
  if (!token) {
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }

  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      return res.status(500).send({auth: false, message: 'Failed to authenticate token.'})
    }
    Todo.findByIdAndRemove(req.params.id, (err,todo) => {
      if(err){
      return res.json({'auth':true, 'success':false,'message':'Some Error',err});
      }
  return res.json({'auth':true, 'success':true,'message':'Todo deleted successfully'});
    })
  })
}
