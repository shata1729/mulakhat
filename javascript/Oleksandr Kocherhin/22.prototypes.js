const Employee = function (id, name) {
    if (!id || !name) {
        throw new Error("Employee id and name are mandatory");
    }
    this.id = id;
    this.name = name;
}


Employee.prototype.setSalary = function (salary) {
    this.salary = salary;
}

Employee.prototype.getSalary = function () {
    return this.salary;
}

Employee.prototype.getId = function () {
    return this.id;
}
Employee.prototype.getName = function () {
    return this.name;
}

const Manager = function (params) {
    Employee.apply(this, arguments)
}


Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
Manager.prototype.getDepartment = function () {
    return this.department;
}
Manager.prototype.setDepartment = function (department) {
    this.department = this.department;
}


const emp = new Employee(1, "shata");
console.log(emp.getId());
const manager = new Manager(2, "vijay");

console.log(manager)
console.log(manager.__proto__)
console.log(manager.getDepartment());
console.log(manager.getId());
