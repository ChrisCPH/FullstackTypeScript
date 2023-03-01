import { ReactElement, useState, useEffect } from "react";
import "./App.css";
import "./style.css";

function App() {
  const [name, setName] = useState<string>("");

  return (
    <div className="App">
      <NameInput name={name} setName={setName} />
      <NameOutput name={name} />
      <h3>People</h3>
      <PeopleViewer />
    </div>
  );
}

const PeopleViewer = () => {
  type Person = {
    id: number;
    name: string;
    age: number;
    city: string;
  };

  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/person")
      .then((response) => response.json())
      .then((json) => setPeople(json));
  }, []);

  const personData = {
    "person": [
      {
        "name": "Bob",
        "age": 23,
        "city": "CPH",
      },
    ],
  };
  //Post request works but its not getting the person data
  const addPerson = () => {
    fetch("http://localhost:3000/person", {
      method: "POST",
      body: JSON.stringify(personData),
    });
  };

  return (
    <div>
      <button onClick={() => addPerson()}>Add person</button>
      {people.map((data) => {
        return (
          <table key={data.id}>
            <thead>
              <tr>
                <th>Id: </th>
                <th>Name: </th>
                <th>Age: </th>
                <th>City: </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.city}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

const NameInput = ({
  name,
  setName,
}: {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
    </div>
  );
};

const NameOutput = ({ name }: { name: string }): ReactElement => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default App;
