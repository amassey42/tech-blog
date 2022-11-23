const router = require("express").Router();
const { User, Post, Comment } = require("../models")

//rendors homepage
router.get("/", (req, res) => {
    Post.findAll({
        include: [Comment]
    }).then(posts =>{
        const postsHbsData = posts.map(posts=>posts.get({plain:true}))
        //checks the posts in json
        // res.json(posts)
        res.render("homepage",{
            posts:postsHbsData
        });
    })
})

//session data
router.get("/sessions",(req,res)=>{
    res.json(req.session)
})

//route to a post by id
router.get("/post/:id", (req, res) => {
    Post.findByPk(req.params.id,{
        include:[User]
    }).then(post =>{
        const postHbsData = post.get({plain:true})
        console.log(postHbsData)
        res.render("singlePost", postHbsData);
    })
})

//rendors login page
router.get('/login', (req,res)=>{
    if(req.session.logged_in){
        return res.redirect("/dashboard")
    }
    res.render("login")
})

router.get("/dashboard",(req,res)=>{
    if(!req.session.logged_in){
        return res.redirect("/login")
    }
    User.findByPk(req.session.userid,{
        include: [Post, Comment]
    }).then(userData=>{
        const userHbsData = userData.toJSON();
        console.log(userHbsData);
        res.render("profile", userHbsData)
    })
})




module.exports=router;