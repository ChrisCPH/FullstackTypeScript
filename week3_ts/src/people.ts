import Person from "./person.js";
import peopleList from "./people.json";

export default function getPeople(): Promise<Person[]>{
    return new Promise((resolve) => {
        let peopleArray: Person[] = new Array
        peopleList.forEach(person => {
            const newPerson: Person = new Person(person.name,person.age,person.occupation)
            newPerson.setSalary(person.salary)
            peopleArray.push(newPerson)
        });
        resolve(peopleArray);
    })
}