console.log("Hello Sagar");
class Person{
    name:string;
    age:number;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

let P:Person =new Person('Sagar',25)
console.log(P.name)
console.log(P.age)