
document.addEventListener('DOMContentLoaded', (event) => {



    const btn = document.querySelector("button");
    console.log(btn);
    const text= document.querySelector(".affichage");
    console.log(text);
    
    btn.addEventListener('click',() =>{text.classList.toggle("cestvisible")})
    
    // btn.addEventListener('click',()=>{
    //     text.classList.toggle('cestvisible');
    // })
    
    });
    


