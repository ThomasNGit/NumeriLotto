//Creo uno script che chiede all'utente sei numeri casuali, li inserisce in un array e li stampa in pagina



//creo un array vuoto in cui inserire i numeri


var numeri = []


//blocco funzioni

//funzione numero random
function numRandom(min,max){

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  
  }

//funzione specifica per il button che genera un numero casuale  
  function doFunction(){

    if(numeri.length < 6){

        numeri.push(numRandom(1,90));

        document.getElementById("risultato").innerHTML = "I numeri estratti sono: " + numeri;
    
    } else {

        document.getElementById("solo-6").innerHTML = "Non più di 6 numeri, cretino!"
        
    }
    console.log(numeri);
    
  }



