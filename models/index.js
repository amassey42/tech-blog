const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");


//user has many posts but a post belongs to one user
User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
   
});
Post.belongsTo(User);

//user has many comments but a comment belongs to a user
User.hasMany(Comment, {
    onDelete: "CASCADE"
});
Comment.belongsTo(User);

//post has many comments and bleongs to one post
Post.hasMany(Comment, {
    onDelete: "CASCADE"
});
Comment.belongsTo(Post);

// Export our models for use in other files.
module.exports={
    User,
    Post,
    Comment
}