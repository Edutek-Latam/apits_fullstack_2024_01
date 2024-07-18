import { request, response } from "express";

import * as _userService from './user.service'

export function findAll(req=request,res=response){
    return _userService.findAll()
}

export function findOne(req=request,res=response){
    const usuario = req.params.usuario;
    return _userService.findOne(usuario)
}


export function create(req=request,res=response){
    const newUser = req.body
    return _userService.create(newUser);
}

export function update(req=request,res=response){
    const newUser = req.body;
    const user = req.params.usuario;
    return _userService.update(user, newUser);
}

export function activate(req=request,res=response){}
