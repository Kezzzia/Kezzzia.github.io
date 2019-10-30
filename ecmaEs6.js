// let num = 42;
// num = 'str';
// console.log(num);
//``````````````````````````````````````````````````````````````````````````````````````````
// if (true) {
//     var a = 42;
// }
// console.log(a);

// if (true) {
//     let b = 42;
// }
// console.log(b);             // ReferenceError: b is not defined
//``````````````````````````````````````````````````````````````````````````````````````````
// Hoisting
// c = 20;                     // 20
// console.log(c);
// var c = 10;                 //undefind c

// d = 20;                     //undefind d
// console.log(d);
// let d = 10;                 //undefind d

// function hoisted() {
//     age = 26;
// }
// let age;
// hoisted();
// console.log(age);

// const array = [1, 2, 3, 5 , 8];
// console.log(array);
// array.push(13);
// console.log(array);

// const cube = a => a ** 3;
// console.log(cube(2));

// const sum = (a, b) => a + b;
// console.log(sum(2, 15));

// setTimeout(handler = () => console.log('after 1 second'), 1000);
// setTimeout(() => console.log('after 2 second'), 2000);

// const person = {
//     name: 'elena',
//     age: 20,
//     // log: log,
//     // arrowLog: arrowLog,
//     delayLog: function(){
//         setTimeout(()=>console.log(this.name + ' ' + this.age), 3000);
//     }
// }
// person.delayLog();

const title = 'Hello'
const isVisible = () => Math.random() > 0.5

const template = `
    ${isVisible() ? `<p>Visible</p>` : ' '}
    <h1 id='root' style = 'color: red'>${title}</h1>
`
console.log(template + 'hi hi hi' + 888 + 'new branch' + 777);
