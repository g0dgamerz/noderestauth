const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const fs = require('fs');
const cors=require('cors')
app.use(express.json())
app.use(cors())
var users = []
fs.readFile(__dirname + '/users.csv','utf8',(err,data)=>{
  if(err){

  }
  if(data){
    users = data.split('\n');
  }
})
app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users',async (req,res)=>{
  let salt = await bcrypt.genSalt()
  let hashedPassword = await bcrypt.hash(req.body.password, salt)
  let user = { name:req.body.name, password:hashedPassword}
  
  console.log(user);
  fs.appendFile('users.csv',`${user.name},${user.password}\n`,(err)=>console.log(err));
  res.status(201).send()


})

app.post('/users/login', async (req, res) => {
  const user = users.find(user =>user.name = req.body.name)
  if (user == null){
    return res.status(400).send('cannot find user')
  } 
  if(await bcrypt.compare(req.body.password,user.password)){
      res.send('Sucess')
  }
  else{
      res.send('Not allowed')
  }
  
  
})
// app.post('/users', async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     const user = { name: req.body.name, password: hashedPassword }
//     users.push(user)
//     res.status(201).send()
//   } catch {
//     res.status(500).send()
//   }
// })

// app.post('/users/login', async (req, res) => {
//   const user = users.find(user => user.name === req.body.name)
//   if (user == null) {
//     return res.status(400).send('Cannot find user')
//   }
//   try {
//     if(await bcrypt.compare(req.body.password, user.password)) {
//       res.send('Success')
//     } else {
//       res.send('Not Allowed')
//     }
//   } catch {
//     res.status(500).send()
//   }
// })

app.listen(4000,function() {
  console.log("server is runnng at 4000")
})