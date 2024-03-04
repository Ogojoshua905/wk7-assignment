// note: A Variable name  
// cannot be a reserved keyword
// cannot start with a number
// cannot contain an hyphen


const head = document.querySelector('h2')
const graph = document.querySelectorAll('p')

graph[0].innerHTML = '<bold>Sum of all numbers in the array</bold>:'



let aname = 'JoshDomain';
let aage = 17;

const arr1 = [12, 34, 76, 123, 56, 8, 2, 9888, 90, 345];

const arr2 = 'Alice, Bob, Charlie, Darlington, Emma, Fiona, George, Hannah, Joy, Julia' .split(' ')

const sumArr1 = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

const avgArr1 = (sumArr1 / arr1.length);

const largArr1 = Math.max(...arr1)

const smalArr1 = Math.min(...arr1)

const divTwo = arr1.filter(num => num % 2 === 0)

const greatThanFifty = arr1.filter( num => num > 50)

const asc = arr1.sort((x, y )=> x - y)

const desc = arr1.sort((x, y )=> y - x)

const even = arr1.every(num => num % 2 === 0)

const indexOf76 = arr1.indexOf(76)

const lname = arr2.sort((a, b)=>b.length-a.length)[0]

const sname = arr2.sort((a, b) => a.length - b.length)


console.log('JavaScript Assignment')
console.log(sumArr1)
console.log(avgArr1)
console.log(largArr1)
console.log(divTwo)
console.log(smalArr1)
console.log(greatThanFifty)
console.log(asc)
console.log('Are All Numbers Even?:', even)
console.log('Find the Index Of 76:', indexOf76)
console.log(desc)
console.log(arr2.length)
console.log(arr2.indexOf("Charlie") !== -1)
console.log('Longest Name:', lname)
console.log('Shortest Name:', sname)
