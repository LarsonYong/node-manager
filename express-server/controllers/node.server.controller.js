// ./express-server/controllers/node.server.controller.js
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../config'


// import models
import Node from '../models/node.server.model.js';

export const getNodes = (req, res) => {
  var token = req.headers['x-access-token'];
  if (!token) {
      return res.status(401).send({ auth: false, message: 'No token provided.' });
    }

  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      return res.status(500).send({auth: false, message: 'Failed to authenticate token.',err})
    }
    Node.find().exec((err, nodes) => {
      if (err){
        return res.json({'auth':true, 'message':"Some Error", err})
      }
      console.log(nodes);
      return res.json({'auth': true, 'message':'Nodes fetched successfully','decoded': decoded, 'nodes': nodes})
    })
  })
}

export const addNode = (req,res) => {
  var token = req.headers['x-access-token'];
  if (!token) {
      return res.status(401).send({ auth: false, message: 'No token provided.' });
    }

  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      return res.status(500).send({auth: false, message: 'Failed to authenticate token.',err})

    }
  })
}

export const updateNode = (req,res) => {

}

export const getNode = (req, res ) => {

}

export const deleteNode = (req, res) => {

}
