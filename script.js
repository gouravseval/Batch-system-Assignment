let ham = document.getElementById("hamburger")
let hamMenu = document.getElementById("hamburgerMenu")
let cross = document.getElementById("cross")
ham.addEventListener("click" , ()=>{
    hamMenu.style.display = "flex"
    setTimeout(()=>{
        
        hamMenu.style.right = "0%"
    }, 200);
})

cross.addEventListener("click" , ()=>{
    hamMenu.style.right = "-100%"
    setTimeout(()=>{
        hamMenu.style.display = "none"
    }, 200);
})