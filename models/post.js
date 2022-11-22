const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

// Create Post from Model
class Post extends Model {}

//A post has a title and a body.
Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize
})

module.exports = Post;