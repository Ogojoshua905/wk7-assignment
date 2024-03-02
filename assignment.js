// note: A Variable name  
// cannot be a reserved keyword
// cannot start with a number
// cannot contain an hyphen


const head = document.querySelector('h2')
const graph = document.querySelectorAll('p')

graph[0].innerHTML = '<bold>Sum of all numbers in the array</bold>:'



let aname = 'JoshDomain';
let aage = 17;

const arr1 = [12,34,76,123,56,8,2,9888,90,345];

const arr2 = 'Alice, Bob, Charlie, Darlington, Emma, Fiona, George, Hannah, Joy, Julia' .split(' ')

const sumArr1 = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

const avgArr1 = (sumArr1 / arr1.length);

const largArr1 = Math.max(...arr1)

const smalArr1 = Math.min(...arr1)

const divTwo = arr1.filter(num => num % 2 === 0)

const greatThanFifty = arr1.filter( num => num > 50)

arr1.sort((x, y )=> y-x)


console.log('JavaScript Assignment')
console.log(sumArr1)
console.log(avgArr1)
console.log(largArr1)
console.log(divTwo)
console.log(smalArr1)
console.log(greatThanFifty)