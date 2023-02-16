export default class Person {
    name: string;
    age: number;
    occupation: string;
    private_salary: number;
  
    public constructor(name: string, age: number, occupation: string) {
      this.name = name;
      this.age = age;
      this.occupation = occupation;
      this.private_salary = 0;
    }

    introduce(): string {
        return "Hello I'm ${this.name}, I work as a ${this.occupation} and I make ${this.private_salary}";
      }
    
    incrementAge(): void {
        this.age++;
      }
    
    setSalary(salary: number): void {
        this.private_salary = salary;
      }
    
    getSalary(): number{
        return this.private_salary
      }
    }