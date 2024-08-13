function showSection(){
    document.querySelectorAll(".section").forEach(section => {
        console.log(section.id)
    })
}


document.querySelector("body").onload = () =>{
    showSection()
}
