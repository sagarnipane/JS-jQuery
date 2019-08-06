class Parent{
    public name:string;
    protected isStudent:boolean;
    private isEmployed:boolean;
    constructor(name,isStudent,isEmployed){
        this.name=name;
        this.isStudent=isStudent;
        this.isEmployed=isEmployed;
    }
    getEmpStatus(){

    }
}
class Child extends Parent{
    private age:number;
    constructor(name,isStudent,age){
        super(name,isStudent,age);
        this.age=age;
    }
    getDetails(name:string) {
        console.log(`Name is ${name}`);
        console.log(`Is Student : ${this.isStudent}`);
        console.log(`Age is : ${this.age}`);
    }
}
let p=new Parent('Sagar',false,true)
let c=new Child('Sagar',false,24);
p.getEmpStatus();
c.getDetails('Sagar')