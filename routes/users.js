var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
const { createUser, getUser, getUserById, updateUser, removeUser } = require('../Controller/index');
router.post('/createUser',createUser)
router.get('/getUser',getUser)
router.get('/getUserById',getUserById)
router.put('/updateUser',updateUser)
router.delete('/removeUser',removeUser)
module.exports = router;
