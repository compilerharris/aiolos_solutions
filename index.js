
const nThief = 5;
let nCoin = 48;
let thiefs = new Array(nThief).fill(0)
let tCounter = 0;
let incAfterThiefEnd = 1;

if(nCoin == 0 || nThief == 0){
    console.log("No coin or thief entered.");
}

for(let i=0;;i++){
    if(incAfterThiefEnd >= nCoin){
        thiefs[tCounter] += nCoin;
        break;
    }
    thiefs[tCounter++] += incAfterThiefEnd;
    nCoin -= incAfterThiefEnd;
    incAfterThiefEnd++;
    if(tCounter == nThief){
        tCounter = 0;
    }
}

for(let t=0;t<thiefs.length;t++){
    console.log("Thief "+(t+1)+" will have "+thiefs[t] +" gold coins.");
}