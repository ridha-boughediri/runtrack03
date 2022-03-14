function jourtravaille(date) {
    var newdate = new Date(date);
  
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  
    console.log(newdate);
  
    var jour = [
      "2020-01-01",
      "2020-04-13",
      "2020-05-01",
      "2020-05-08",
      "2020-05-21",
      "2020-06-01",
      "2020-07-14",
      "2020-08-15",
      "2020-11-01",
      "2020-11-11",
      "2020-12-25",
    ];
  
    if (jour.includes(date) == true) {
      console.log(
        "Le" + newdate.toLocaleString("fr-FR", options) + "est un jour ferié"
      );
    } else if (newdate.getDay() == 6 || newdate.getDay() == 0) {
      console.log(
        "Non, " + newdate.toLocaleString("fr-FR", options) + " est un week-end"
      );
    } else {
      console.log(
        "Oui, " +
          newdate.toLocaleString("fr-FR", options) +
          " est un jour travaillé"
      );
    }
  }
  
  jourtravaille("2020-01-01");