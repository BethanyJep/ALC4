// variables
const myName = 'Bethany';
const sentence = 'Hi ' + myName + '! How are you?'
const sentenceWithTemplate = `Hello ${myName}! How are you?`
console.log(sentence);
console.log(sentenceWithTemplate);

// if loops
const RuheniIsMad = false;
if (RuheniIsMad) {
    console.log('stay away')
}
else {
    console.log('Tease him till he is mad')
}
/*
  Write some code that declares two variables, character and timesToRepeact.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
  'fffff'
*/
let character = '';
let timesToRepeat = 6;

for (let i = 0; i < timesToRepeat; i++){
    character += 'a';
}
console.log(character);

while (character.length <= timesToRepeat) {
    character += 'a';
}
console.log(character);