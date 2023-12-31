const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');
const { userInfo } = require('os');

User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});

Blogpost.hasMany(Comment, {
  foreignKey: 'blogpost_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Comment.hasOne(User,{
  foreignKey: 'user_id',
})

Comment.hasOne(Blogpost,{
  foreignKey: 'blogpost_id'
})
 
module.exports = { User, Blogpost, Comment };