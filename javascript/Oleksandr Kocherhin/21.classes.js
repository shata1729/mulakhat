class Employee {
    constructor(id, name) {
        if (!id || !name) {
            throw new Error("Employee id and name are mandatory");
        }
        this.id = id;
        this.name = name;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }

}

class Manager extends Employee{
    constructor(id,name,department){
        super(id,name);
        this.department = department;
    }
    getDepartment(){
        return this.department;
    }
}
const emp = new Employee(1, "shata");
console.log(emp.getId());
const manager = new Manager(2,"vijay","hr");
console.log(manager.getDepartment());
console.log(manager.getId());
