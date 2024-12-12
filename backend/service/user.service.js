const { Op } = require("sequelize");
const UserModel = require("../models/user.model");

let addUser = async (obj) => {
  return await UserModel.create(obj);
};

let bulkuser = async (obj) => {
  return await UserModel.bulkCreate(obj);
};

let getAllUserByCondAndPagination = async (cond) => {
  const offset = page * pageSize;
  const limit = pageSize;
  let filter = cond.filter;
  delete cond.filter;
  if (filter !== "") {
    cond = {
      [Op.or]: [{ userName: { [Op.like]: `%${filter}%` } }],
      ...cond,
    };
  }
  return await user.findAndCountAll({
    limit,
    offset,
    where: cond,
    order: order,
  });
};
let getOneUserByCond = async (cond) => {
  return await UserModel.findOne({ where: cond });
};

let updateUser = async (id, obj) => {
  return await UserModel.update(obj, { where: { id: id } });
};

let destroyUser = async (id) => {
  return await UserModel.destroy({ where: { id: id } });
};
module.exports = {
  addUser,
  bulkuser,
  getOneUserByCond,
  getAllUserByCondAndPagination,
  updateUser,
  destroyUser,
};
