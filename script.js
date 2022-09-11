do{
    var kaina = prompt("Įveskite prekės kainą")
    kaina = Number(kaina)

    } while(isNaN(kaina) || kaina < 0)

    var siuntimas = 2.50
    var isviso = kaina + siuntimas


    var pristatymas = prompt("Ar reikalingas pristatymas į namus? (taip/ne)")

    if (pristatymas === "taip") {
        var miestas = prompt("Į kurį miestą reiks pristatyti?")
        console.log("Prekės kaina: " + kaina.toFixed(2) + " €")
        console.log("Pristatymas: " + siuntimas + " €")
        console.log("Iš viso: " + isviso.toFixed(2) + " €");
        console.log("Prekę pristatysime į " + miestas + " per 1-3 dienas.");
      } 
    
    else if (pristatymas === "ne") {
        console.log("Prekės kaina: " + kaina.toFixed(2) + " €")
        console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a");
      }




