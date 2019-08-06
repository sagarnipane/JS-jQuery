console.log("Hello Sagar");
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var P = new Person('Sagar', 25);
console.log(P.name);
console.log(P.age);
