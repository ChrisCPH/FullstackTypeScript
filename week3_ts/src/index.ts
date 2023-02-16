import { renderPeopleList } from "./app.js";
import people from './people'
import Person from "./person.js";
    
    const person1 = new Person("Jørgen", 25, "Håndværker");
    console.log(person1.introduce());
    console.log(person1.age);
    person1.incrementAge();
    console.log(person1.age);
    person1.setSalary(1000);
    console.log(person1.getSalary());
    console.log(person1.introduce());
    
    const peopleList = await people();
    console.log(peopleList);

    renderPeopleList;