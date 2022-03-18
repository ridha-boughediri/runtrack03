document.addEventListener("DOMContentLoaded", (event) => {

$('#grid-demo').rdmGrid();


function shuffle(e) {               //pass the divs to the function
  var replace = $('<div>');
  var size = e.size();

  while (size >= 1) {
     var rand = Math.floor(Math.random() * size);
     var temp = e.get(rand);      //grab a random div from our set
     replace.append(temp);        //add the selected div to our new set
     e = e.not(temp); //remove our selected div from the main set
     size--;
  }
  $('#shuffle').html(replace.html() );     //update our container div with the
                                           //new, randomized divs
}

shuffle( $('#shuffle div') );
//reussir a faire les elmens clickable elements
//recuper le infos du cliche
//faire le aprend et remove d unlement
//remove et append 


}