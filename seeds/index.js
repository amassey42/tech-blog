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
            user_id: 2
        },
        {
            title: "CSS",
            body: "Css makes the page look pretty",
            user_id: 2
        },
        {
            title: "HTML",
            body: "I'm an HTML wizard'",
            user_id: 1
        },
    ])

    const comments = await Comment.bulkCreate([
        {
            comment_body:"That is my favorite too!",
            user_id: 1,
            post_id:1
        },
        {
            comment_body:"A wizard? Awesome!",
            user_id: 2,
            post_id:3
        },
        {
            comment_body:"I dont like writting CSS",
            user_id: 1,
            post_id:2
        },
    ])
    console.log("data seeded")
}
seed();