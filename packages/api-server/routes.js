const express = require("express");
const modifyGit=require('./gits/index')

const router = express.Router();

router.get('/skeleton/get', (req, res) => {
  res.send('GET router request skeleton')
})

router.post('/skeleton/save', (req, res) => {
    // create('test')
    modifyGit({componentName:req.body.name, rawHtml:req.body.rawHtml})
  res.send('POST router request123')
})

module.exports=router;
