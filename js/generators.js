//seconds GENERATOR
export let secondsGen = function*(start, step) {
  while (true) {
    if(start < 10){
      yield "0" + start
      start += step
    } else {
      yield start
      start += step
    }
    if (start == 60) {
      start = 0;
    }

  }
}
//minutes GENERATOR
export let minutesGen = function*(start, step) {
  while (true) {
    if(start < 10){
      yield "0" + start
      start += step
    } else {
      yield start
      start += step
    }
    if (start == 60) {
      start = 0;
    }

  }
}
//hours GENERTOR
export let hoursGen = function*(start, step) {
  while (true) {
    if(start < 10){
      yield "0" + start
      start += step
    } else {
      yield start
      start += step
    }
    if (start == 12) {
      start = 0;
    }
  }
}
