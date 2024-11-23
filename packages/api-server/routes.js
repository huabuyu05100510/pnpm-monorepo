const express = require("express");
const create=require('./template/create');
const modifyGit=require('./gits/index')

const router = express.Router();

router.get('/skeleton/get', (req, res) => {
  res.send('GET router request skeleton')
})

router.post('/skeleton/save', (req, res) => {
    // create('test')
    modifyGit()
  res.send('POST router request123')
})

module.exports=router;
