const User = require('../models/User');
const { Op } = require('sequelize');

const getAllUsers = (req, res) => {
  User.findAll()
    .then((users) => {
      console.log(users);
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createUser = (req, res) => {
  const { name, age } = req.body;

  User.create({
    name,
    age,
  })
    .then((users) => {
      console.log(users);
      res.redirect('/api/users');
    })
    .catch((err) => {
      console.log(err);
    });
};

const searchUser = (req, res) => {
  let name = req.params.name;

  User.findAll({
    where: {
      name: {
        [Op.like]: '%' + name + '%',
      },
    },
  })
    .then((users) => {
      console.log(users);
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateUser = (req, res) => {
  const { name, age } = req.body;

  User.update(
    {
      name,
      age,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((users) => {
      console.log(users);
      res.redirect('/api/users');
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteUser = (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((users) => {
      console.log(users);
      res.redirect('/api/users');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllUsers,
  createUser,
  searchUser,
  updateUser,
  deleteUser,
};
