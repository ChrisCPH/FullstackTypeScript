import Person from "./person.js";

export function renderPeopleList(container: HTMLElement, people: Person[]) {
    const personDivs = people.map(person => {
      const div = document.createElement('div');
      div.classList.add('person');
      div.innerHTML = `
        <h2 class="person_name">${person.name}</h2>
        <p class="person_occupation">${person.occupation}</p>
        <p class="person_age">${person.age}</p>
        <p class="person_salary">${person.private_salary}</p> `;
      return div;
    });
  
    personDivs.forEach(div => container.appendChild(div));
  }