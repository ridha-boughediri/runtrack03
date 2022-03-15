document.addEventListener('DOMContentLoaded', (event) => {


    //je selectinne la balise button
    const btn = document.querySelector("button");
    
    console.log(btn);
    //je selectionne la balise p qui est vide 
    let newP = document.querySelector(".text");
    console.log(newP);
    
    // on rajoute la phrase dnas la balise html
    // newP.textContent = "“L'important n'est pas la chute, mais l'atterrissage.”.";
    
    const text= document.querySelector(".affichage");
    console.log(text);
    
    
    
    btn.addEventListener('click',() =>{
        console.log({newP});
        newP.innerHTML="“L'important n'est pas la chute, mais l'atterrissage.”."
    })
    btn.addEventListener('click',() =>{text.classList.toggle("cestvisible")})
    
    
    });

