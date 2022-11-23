const logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("click",()=>{
    fetch("/api/users/logout",{
        method:"POST",
    }).then(res=>{
        location.reload()
    })
})
