// function User(id, name, age, salary) {
//     this.i = id;
//     this.n = name;
//     this.a = age;
//     this.s = salary + 1000;
// }

// let employeeOne = new User(101, "Jimmy", 28, 5000)
// let employeeTwo = new User(102, "Osama", 29, 6000)
// let employeeThree = new User(103, "Omar", 30, 7000)
// // Separator
// console.log(employeeOne)
// console.log(employeeTwo)
// console.log(employeeThree)
// // Separator
// console.log(employeeOne.i)
// console.log(employeeTwo.n)
// console.log(employeeThree.a)
// console.log(employeeThree.s)

// class User {
//     constructor(id, name, age, salary) {
//         this.i = id;
//         this.n = name;
//         this.a = age;
//         this.s = salary + 1000;
//     }
//     showInfo() {
//         return `ID: ${this.i}, Name: ${this.n}, Age: ${this.a}, Salary: ${this.s}`;
//     }
// }

// let employeeOne = new User(101, "Jimmy", 28, 5000)
// console.log(employeeOne)
// console.log(employeeOne instanceof User)
// console.log(employeeOne.constructor === User)
// console.log(employeeOne.constructor.name)

// Separator

// class User {
//     constructor(id, name, age, salary) {
//         this.i = id;
//         this.n = name;
//         this.a = age;
//         this.s = salary + 1000;
//     }
//     changeName(newName) {
//         this.n = newName;
//     }
// }

// let userOne = new User(101, "elzero")
// console.log(userOne.n)

// userOne.changeName("Osama")
// console.log(userOne.n)

// Separator

// class User {
//     // count = 24
//     static count = 24
//     constructor(id, name, age, salary) {
//         this.i = id;
//         this.n = name;
//         this.a = age;
//         this.s = salary + 1000;
//     }
//     changeName(newName) {
//         this.n = newName;
//     }
// }
// let userOne = new User(101, "elzero")
// // console.log(userOne.count) // 24
// // console.log(User.count) // undefined

// console.log(userOne.count) //  with static => undefined
// console.log(User.count) // with static => 24

// Separator

// class User {
//     constructor(id, username) {
//         this.i = id;
//         this.u = username;
//     }
//     sayHello() {
//         return `Hello ${this.u}`;
//     }
// }

// User.prototype.sayWelcome = function () {
//     return `Welcome ${this.u}`;
// }

// let userTest = new User(101, "Elzero")
// console.log(User.prototype)
// console.log(userTest.prototype)

// Object.prototype.love = "Jimmy"
// console.log(userTest.love)

// String.prototype.adotAbcDot = function () {
//     return `.${this}.`
// }

// let str = "Elzero"
// console.log(str.adotAbcDot())

// Separator

const myData = {
    a: 1,
    b: 2
}

// myData.c = 3;

// console.log(myData['a']);
// console.log(myData.a);

Object.defineProperty(myData, 'c', {
    writable: false, // can't change the value
    enumerable: false, // won't show in loops => isn't itearable
    configurable: false, // won't delete/ redefine the property => .defineProperty
    value: 3,
})

myData.c = 100; // won't work

// for (let props in myData) {
//     console.log(`${props}: ${myData[props]}`);
// }

// delete myData.c; // won't work
// console.log(delete myData.c) // coudn't delete the property with value: New Value

console.log(myData)

// Separator

Object.defineProperties(myData, {
    d: {
        value: 4
    },
    e: {
        value: 5
    },
    f: {
        value: 6
    },
    g: {
        value: 7
    },
})

console.log(myData)
console.log(Object.getOwnPropertyDescriptor(myData, 'g'))
console.log(Object.getOwnPropertyDescriptors(myData))