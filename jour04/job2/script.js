document.addEventListener("DOMContentLoaded", (event) => {

  const lien ="jsonValueKey.json";
  let ul = document.querySelector('ul')
  let li = document.querySelector('li')
  let btn = document.querySelector('button')

  btn.addEventListener("click",function jsonValueKey() {
   
  
      fetch(lien)
          .then((response) => response.json())
          .then((response) => {
                  console.log(response.name);
                  console.log(response.address);
                  console.log(response.city);
                  console.log(response.creation);
                  console.log(response.nb_staff);
                  
                  // const test =JSON.stringify(response);

                  const keys = Object.keys(response);
                  console.log(keys);
                  

                
              



                  for(let i=0;i<keys.length;i++){
                    let newP =document.createElement('li')
              
                    newP.innerHTML = keys[i].name +keys[i].address+keys[i].city+keys[i].creation+keys[i].nb_staff
                    li.append(newP)
                  }
                  li.innerHTML += response
          })  
         
                
          
        
              //  } )
   .catch((error) => console.log(error))
  
})
  // jsonValueKey();
})