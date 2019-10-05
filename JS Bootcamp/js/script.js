const myName = 'Bethany';
const sentence = 'Hi ' + myName + '! How are you?'
const sentenceWithTemplate = `Hello ${myName}! How are you?`
console.log(sentence);
console.log(sentenceWithTemplate);

const RuheniIsMad = false;
if (RuheniIsMad) {
    console.log('stay away')
}
else {
    console.log('Tease him till he is mad')
}
var character = 'a';
const timesToRepeat = 6;
while (character.length <= timesToRepeat) {
    character += character;
}
console.log(character);