import { request, response } from "express";

import * as _userService from './user.service'

export function findAll(req=request,res=response){
    console.log('hola`')
    res.status(200).send(_userService.findAll()) 
}

export function findOne(req=request,res=response){
    const usuario = req.params.usuario;
    return _userService.findOne(usuario)
}


export function create(req=request,res=response){
    const newUser = req.body
    _userService.create(newUser);
    res.status(200).send(newUser)
}

export function update(req=request,res=response){
    const newUser = req.body;
    const user = req.params.usuario;
    return _userService.update(user, newUser);
}

export function activate(req=request,res=response){}
