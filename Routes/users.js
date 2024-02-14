const express = require('express');
const router = express.Router();
const {GetById,AddNewUser} = require('../Controllers/users')



router.get('/:id',GetById)
router.post('/',AddNewUser)

module.exports = router