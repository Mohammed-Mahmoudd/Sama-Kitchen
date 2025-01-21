const btbtop = document.getElementById("backtotop")
btbtop.style.display = "none"
btbtop.addEventListener("click" , function () {
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})
window.addEventListener("scroll" , function() {
    if (window.scrollY > 50) {
        btbtop.style.display = "block"
        
    }else {
        btbtop.style.display = "none"
        
    }
})

let arr = [1,2,3,4,5,6,7]
let mood = "no";
arr.forEach(i => {
    if (i === 7) {
        mood= "boom"
                    return "Boom!"
    }
    if (mood === "no") {
    
        return "there is no 7 in array"
    }
})
