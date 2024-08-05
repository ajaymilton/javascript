function Person(_name , _age) {
    this.name = _name
    this.age = _age

    // this.getNameAndAge = function() {
    //     console.log(`I am ${this.name} and my age is ${this.age}`)
    // }
}

Person.prototype.getNameAndAge = function() {
    console.log(`I am ${this.name} and my age is ${this.age}`)
}

let person1 = new Person('Ezhil',21)
let person2 = new Person('Yosuva',20)

console.log(person1)
console.log(person2)