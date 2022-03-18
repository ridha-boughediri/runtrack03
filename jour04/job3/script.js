document.addEventListener("DOMContentLoaded", (event) => {

    const lien ="pokemon.json";
    let ul = document.querySelector('ul')
    let li = document.querySelector('li')
    let btn = document.querySelector('button')
  
    btn.addEventListener("click",function poken() {
     
    
        fetch(lien)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          // Work with JSON data here
          console.log(data)
          const keys = Object.keys(response);
            console.log(keys);
                  



        })
        .catch((err) => {
          // Do something for an error here
        })
    
  })

  })