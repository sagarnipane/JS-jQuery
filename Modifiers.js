var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent(name, isStudent, isEmployed) {
        this.name = name;
        this.isStudent = isStudent;
        this.isEmployed = isEmployed;
    }
    Parent.prototype.getEmpStatus = function () {
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, isStudent, age) {
        var _this = _super.call(this, name, isStudent, age) || this;
        _this.age = age;
        return _this;
    }
    Child.prototype.getDetails = function (name) {
        console.log("Name is " + name);
        console.log("Is Student : " + this.isStudent);
        console.log("Age is : " + this.age);
    };
    return Child;
}(Parent));
var p = new Parent('Sagar', false, true);
var c = new Child('Sagar', false, 24);
p.getEmpStatus();
c.getDetails('Sagar');
