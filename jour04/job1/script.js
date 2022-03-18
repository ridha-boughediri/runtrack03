document.addEventListener("DOMContentLoaded", (event) => {
    let p = document.querySelector('p')
    let btn = document.querySelector('button')

    btn.addEventListener("click", function () {
        fetch('expression.txt')
            .then((response) => response.text())
            .then( (response) => {
                console.log(response)
                p.innerHTML = response

            } )

                   
            .catch((error) => console.log(error))


    })










});