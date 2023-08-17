// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
*/

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
*/

/*
const names = ["Noah", "Julian", "Seth"];

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the beautiful birthday gift`);
    }

    return names;
}

writeCards(names);
*/

const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) {
    for (let i = 0; i < names.length - 1; i++) {
   return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
}
return names;
}

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
/*
function writeCards(
    [
        "Noah, thank you for coming to my birthday party", 
        "Thank you, Julian, for coming to my birthday party",
        debugger; 
    ]
    )
    */

    /*
    const countdown=function(i) {
        console.log(i);
        i>0 && countdown(i-1);
    }
        countdown(10);
    

        function countdown(message, startingNumber = 10) {
            if (startingNumber <= 1) {
              console.log("Please enter a number bigger than 1.");
              return;
            }
          
            while (startingNumber > 0) {
              console.log(startingNumber);
              startingNumber = startingNumber - 1;
            }
          
            console.log(message);
          }
          
          countdown("Launch!", 0);
          */