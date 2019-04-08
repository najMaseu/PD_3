import {secondsGen, minutesGen, hoursGen} from "./js/generators.js"
import {date} from "./js/date.js"
//zmienne z yield'em generatorow
let secGen = secondsGen(date.getSeconds(), 1)
let minGen = minutesGen(date.getMinutes(), 1)
let hrGen = hoursGen(date.getHours(), 1)
//deklaracja zmiennych przechowujce bieżca minutę i godzinę
let currMin
let currHr = hrGen.next().value
//warunki if zapobiegajace wyświetlaniu sie pojedunczych cyfr
if(date.getMinutes() < 10){
  currMin = "0" + date.getMinutes()
}else {
  currMin = date.getMinutes()
}
if(date.getHours() < 10) {
  currHr = "0" + date.getHours()
}else {
  currHr = date.getHours()
}

//funkcja wyswietlajaca liczby pobrane z generatorow
let timer = () => {
  let currSec = secGen.next().value
  if(currSec == "00"){
    currMin = minGen.next().value
  }
  if(currMin == "00" && currSec == "00"){
    currHr = hrGen.next().value
  }
  document.getElementById("poo").innerText = currHr + ":" + currMin + ":" + currSec ;
}

setInterval(timer, 1000)
