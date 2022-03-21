// function holaa() {

// }
register.addEventListener("click",()=>{
    fetch("inscription.php",{
        methode:"post",
        body:new formData(frm)})
        .then(response=>response.text()).then(response=>{
            console.log(response);

        })
})