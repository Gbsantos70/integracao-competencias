import { getAllPeople } from "./service.js";

window.onload = () => {
people();

};

const people = () => {
  const dataContainer = document.getElementById("data-container");

  getAllPeople().then((resp) => {
    resp.results.forEach((people) => {
      const peopleElement = document.createElement("div");
      peopleElement.innerHTML = `${JSON.stringify(people.name, people.films)}`;

      dataContainer.appendChild(peopleElement);
    });
  });
};
