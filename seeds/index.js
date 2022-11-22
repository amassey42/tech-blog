const sequelize = require("../config/connection");
const {User, Post, Comment} = require("../models/");

//user seeds
const seed = async ()=> {
    await sequelize.sync({force:true});
    const users = await User.bulkCreate([
        {
            username: "andrew42",
            password: "password"
        },
        {
            username: "amassey64",
            password: "password"
        }
    ],{
        individualHooks:true
    })

    const posts = await Post.bulkCreate([
        {
            title: "JavaScript",
            body: "It is my favorite language",
            userId: 2
        },
        {
            title: "CSS",
            body: "Css makes the page look pretty",
            userId: 2
        },
        {
            title: "HTML",
            body: "I'm an HTML wizard'",
            userId: 1
        },
    ])

    const comments = await Comment.bulkCreate([
        {
            comment_body:"That is my favorite too!",
            userId: 1,
            postId:1
        },
        {
            comment_body:"A wizard? Awesome",
            userId: 2,
            postId:3
        },
        {
            comment_body:"I dont like writting CSS",
            userId: 1,
            postId:2
        },
    ])
    console.log("data seeded")
}
seed();