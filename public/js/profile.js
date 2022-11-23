const projectForm = document.querySelector("#addPost");
projectForm.addEventListener("submit",e=>{
    e.preventDefault();
    const postObj = {
        title:document.querySelector("#postTitle").value,
        body:document.querySelector("#postBody").value,
    }

    fetch("/api/posts/",{
        method:"POST",
        body:JSON.stringify(postObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.reload()
        }else {
            alert("trumpet sound")
        }
    })
})

// const delButtons = document.querySelectorAll(".delBtn");

// delButtons.forEach(delBtn=>{
//     delBtn.addEventListener("click",e=>{
//         const postId = e.target.getAttribute("data-postId")
//         console.log(postId);
//         fetch(`/api/posts/${postId}`,{
//             method:"DELETE"
//         }).then(res=>{
//             if(res.ok){
//                 location.reload();
//             } else {
//                 alert("trumpet sound")
//             }
//         })
//     })
// })