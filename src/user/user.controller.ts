import { request, response } from "express";

import * as _userService from './user.service'

export async function findAll(req=request,res=response){
    const users = await _userService.findAll()
    res.status(200).send(users) 
}

export  async function create(req=request,res=response){
    const newUser = req.body
    const user = await _userService.create(newUser);
    res.status(200).send(user);
}

export async function findOne(req=request,res=response){
    const usuario = req.params.usuario;
    const userEncontrado = await _userService.findOne(usuario)
    //console.log(userEncontrado)
    res.status(200).send(userEncontrado)
}




export function update(req=request,res=response){
    const newUser = req.body;
    const user = req.params.usuario;
    const userUpdate = _userService.update(user, newUser);
    res.status(200).send(userUpdate)
    //return _userService.update(user, newUser);
}

//Tarea
export function activate(req=request,res=response){}
