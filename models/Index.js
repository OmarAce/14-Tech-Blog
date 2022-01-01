const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const Tag = require('./Tag');

User.hasMany(Post, {
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

Post.belongsTo(User);

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Tag.belongsToMany(Post, {
  through: 'Tag_Post'
});

Post.belongsToMany(Tag, {
  through: 'Tag_Post'
});

module.exports = { User, Post, Comment, Tag };