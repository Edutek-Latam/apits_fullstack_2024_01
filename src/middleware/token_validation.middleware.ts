import { request, response, NextFunction } from "express";
import { validateToken } from "../utils/jwt";

export function authToken(req=request, res= response,next: NextFunction){
    const header = req.header("Authorization") || "";
  const token = header.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token not provied" });
  }

  const validToken = validateToken(token);
  if(validToken) next()

    if(!validToken)     return res.status(403).json({ message: "Token not valid" });

}