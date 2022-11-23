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