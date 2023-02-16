import getPeople from "./people.js";
import { renderPeopleList } from "./peopleList";

const container = document.getElementById('app');

const people = await getPeople();

renderPeopleList(container!, people)

export { renderPeopleList };
