import 'dotenv/config'
import { ENV } from './config/env';
import express, { request, response, urlencoded, json } from 'express';
import { getRutas } from './router'

const app = express();
const port = ENV.PORT || 3001

app.use(urlencoded({extended: true}))
app.use(json());
app.use(getRutas());

 
/* app.get('/', (req, res) => {
  res.send('Hello World!')
}) */
/*
let usuario : {[key: string]: any };


app.get('/del/:fecha1/:fecha2',(req,res=response)=>{
    console.log(req.params);
    res.status(500).send({status:'ok',message:'get con id'})
})

app.put('/:id',(req, res=response)=>{
    const {body,params} = req;
    console.log(body);
    console.log(params);
    usuario = {...usuario, ...body}
    res.status(200).send(usuario)

});

app.post('/',(req=request,res=response)=>{
    //console.log(Object.keys(req));
    const body = req.body;
    usuario = body
    res.status(200).send(body);
}) */

//console.log(process.env)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})