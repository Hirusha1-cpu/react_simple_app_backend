const express = require('express')
const router = express.Router();
const controller = require('./controller')

router.get('/users', controller.getUsers);
router.post('/createuser', controller.addUser);
router.put('/updateuser', controller.editUser);
router.delete('/deleteuser', controller.deleteUser);

module.exports = router