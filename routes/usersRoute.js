const express = require('express');
const {
  getAllUsers,
  searchUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/usersController');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:name', searchUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
