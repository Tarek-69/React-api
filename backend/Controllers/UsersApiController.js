const UsersModel = require("../Models/UserModel");

const getUsers = (req, res) => {
  UsersModel.find().then((documents) => res.json(documents));
};
const postAddUser = (req, res) => {
  const newUserModel = new UsersModel(req.body);
  newUserModel.save();
  res.redirect("http://localhost:3000/");
};

const getUserById = (req, res) => {
  UsersModel.findById(req.params.id).then((document) => res.json(document));
};

const deleteUserById = (req, res) => {
  UsersModel.findOneAndDelete({ _id: req.params.id }).exec();
  res.end();
};
module.exports = {
  getUsers,
  postAddUser,
  getUserById,
  deleteUserById,
};
