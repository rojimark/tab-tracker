module.exports = (sequelize, DataTyes) =>
sequelize.define('User',{
  email: {
    type: DataTyes.STRING,
    unique: true
  },
  password: DataTyes.STRING
})