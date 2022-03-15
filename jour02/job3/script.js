document.addEventListener('DOMContentLoaded', (event) => {


    //je selectinne const button = document.querySelector('button');

    // const button = document.querySelector('button');

    // button.addEventListener('click', event => {
    //   button.innerHTML = `Nombre de clics : ${event.detail}`;
    // });
    


        let count = 0;
        const btn = document.getElementById("button");
        const disp = document.getElementById("compteur");
  
        btn.onclick = function addone() {
            count++;
            disp.innerHTML = count;
        }






    });

