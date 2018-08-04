let example = 'youtube.com/codingtutorials360';

console.log(example.padStart(100));// an empty string will be printed before example
console.log(example.padEnd(1));// example string is longer than one character so it will not have an effect

let name = 'Ashley';
console.log(name.padEnd(15,'-Kristine'));

let name2 = 'Kristine';
console.log(name2.padStart(15,'Ashley-'));
