// function fizzbuzz(){


//     for(let i=1;i<=151;i++){
//         // console.log(i);

//         let output;

//         //multiple de 3


//         if(i % 3 ===0) output ="Fizz";
//         //multiple de 5
//         if(i % 5 ===0) output ="buzz";
//         //on fait les deux multiple 3 && 5

//         if(i% 3===0 && i% 5===0 ) output ="fizzbuzz";



//         console.log(output?output:i);
//     }



// }

// fizzbuzz();


//2ieme methode 



function fizzBuzztwo(){


    for(let i=1;i<=151;i++){
        // console.log(i);

        let output="";

        //multiple de 3


        if(i % 3 ===0) output +="Fizz";
        //multiple de 5
        if(i % 5 ===0) output +="buzz";
        //on fait les deux multiple 3 && 5

        // if(i% 3===0 && i% 5===0 ) output +="fizzbuzz";



        console.log(output?output:i);
    }



}

fizzBuzztwo();
