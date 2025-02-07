//My utility function
//function scope allows user to reuse any variable over again within the curly braces

function temporary2() {
  const x = 15;
  document.write(x);
}
function temporary1() {
  const x = 8;
  document.write(x);
}

//document.write = Writes text to a document that overwrites HTML content

function display(Hello) {
  document.write(Hello);
}


//Variable function = Can be redeclared within the scope.

function ask2(myMessage) {
  var userText = prompt(myMessage);
  var userNumber = Number(userText);
  var isntNumber = isNaN(userNumber);
}

//let function = Cannot be redeclared within the scope

function userContent(myMessage) {
  let userText = prompt(myMessage);
  let userNumber = Number(userText);
  let isntNumber = isNaN(userNumber);
}

//Template string = Allows single or multiple lines of text to be used in one string

const userName = "Tammy";
const myString = "Hello ${userName}! How are you?";



function ask(wordType) {
  var userAnswer = prompt("give me a " + wordType);
  return userAnswer;
}

function game() {
  const array = [
    "adjective",
    "name",
    "adjective",
    "silly animal",
    "verb ending in -ing",
    "adjective",
    "silly noise",
    "place in the zoo",
    "animal",
    "verb",
    "funny item",
    "verb",
    "food",
    "adjective",
    "animal",
    "adjective",
    "verb ending in -ing",
  ];
  var object = {};
  for (let count = 0; count < 17; count++) { 
    object[count]= ask(array[count])
  }

const finalText = `Today, I went to the zoo with my ${object[0]} friend, ${object[1]}. We saw a ${object[2]} ${object[3]} that was ${object[4]} while wearing a tiny hat! It made a really ${object[5]} sound like a ${object[6]}.

Later, we visited the ${object[7]} where the ${object[8]} was ${object[9]} and juggling ${object[10]}! I couldn’t believe my eyes when it started to ${object[11]} on a unicycle!

After that, we had ${object[12]} for lunch, and I accidentally dropped mine on a ${object[13]} ${object[14]}. It was a ${object[15]} disaster, but we couldn't stop ${object[16]} with laughter!`;
display(finalText)

}

function displayMessage(event) {
  event.preventDefault()
  const form=event.target
  alert(`"Hello we will contact you shortly at ${form[1].value}"`)
}


//Today, I went to the zoo with my (adjective) friend, (name). We saw a (adjective) (silly animal) that was (verb ending in -ing) while wearing a tiny hat! It made a really (adjective) sound like a (silly noise).

//Later, we visited the (place in the zoo) where the (animal) was (verb) and juggling (funny item)! I couldn’t believe my eyes when it started to (verb) on a unicycle!

//After that, we had (food) for lunch, and I accidentally dropped mine on a (adjective) (animal). It was a (adjective) disaster, but we couldn't stop (verb ending in -ing) with laughter!
