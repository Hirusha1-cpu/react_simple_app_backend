const express = require('express');
const app = express();
const cors = require('cors');
const controllers = require('./controller');

app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/users',(req, res, next) => {
   
    controllers.getUsers((req,res,next)=>{
        res.send()
    })
})
app.post('/createuser',(req, res,next) => {
    controllers.addUser(req.body,(callback)=>{
        res.send()
    })
})
app.put('/updateuser',(req, res,next) => {
    controllers.editUser(req.body,(callback)=>{
        res.send(callback)
    })
})
app.delete('/deleteuser',(req, res,next) => {
    controllers.deleteUser(req.body,(callback)=>{
        res.send(callback)
    })
})


app.get('/user',(req, res) => {
    const id = req.query.id;
    controllers.getUsersById(id, user=>{
        res.send(user)
    })
})
module.exports = app;

