import { getAllPeople } from "./service.js";

window.onload = () => {
  people();
};

const people = () => {
  const dataContainer = document.getElementById("data-container");

  getAllPeople().then((resp) => {
    // Filtra as pessoas desejadas (Luke, Darth Vader, Obi-Wan)
    const filteredPeople = resp.results.filter((person) =>
      ["Luke Skywalker", "Darth Vader", "Obi-Wan Kenobi"].includes(person.name)
    );

    // Mapeia as pessoas filtradas para criar os cards
    filteredPeople.forEach((person) => {
      const cardElement = createCardElement(person);
      dataContainer.appendChild(cardElement);
    });
  });
};

const createCardElement = (person) => {
  const card = document.createElement("div");

  
  // Determina o tipo de card com base no nome da pessoa
  let cardType;
  if (person.name.toLowerCase().includes("luke")) {
    cardType = "card";
  } else if (person.name.toLowerCase().includes("vader")) {
    cardType = "card-vader";
  } else if (person.name.toLowerCase().includes("obi-wan")) {
    cardType = "card-obi";
  }

  card.className = cardType;

  const imgElement = document.createElement("div");
  imgElement.className = "img";
 imgElement.innerHTML=`<img src='img/${person.name.toLowerCase().replace(/\s/g, '-')}LUKE.jpg' alt='${person.name}'>`;
  imgElement.innerHTML = `<span>${person.name}</span>`;

  const contentElement = document.createElement("div");
  contentElement.className = "content";
  contentElement.innerHTML = `
    <span class="title">${person.name}</span>
    <p class="desc">Gender: ${person.gender}</p>
    <p class="desc">Birth Year: ${person.birth_year}</p>
    <p class="desc">Eye Color: ${person.eye_color}</p>
  `;

  const arrowElement = document.createElement("div");
  arrowElement.className = "arrow";
  arrowElement.innerHTML = `<span>&#8673;</span>`;

  card.appendChild(imgElement);
  card.appendChild(contentElement);
  card.appendChild(arrowElement);

  // Adiciona eventos de hover para cada card
  card.addEventListener("mouseover", () => {
    imgElement.style.opacity = "1";
    imgElement.style.height = "200px";
    contentElement.style.padding = "20px";
    contentElement.style.height = "260px";
    contentElement.style.transform = "translateY(0px)";
  });

  card.addEventListener("mouseout", () => {
    imgElement.style.opacity = "0.7";
    imgElement.style.height = "200px";
    contentElement.style.padding = "0 20px";
    contentElement.style.height = "0";
    contentElement.style.transform = "translateY(30px)";
  });

  return card;


};




















// import { getAllPeople } from "./service.js";

// window.onload = () => {
// people();


// };

// const people = () => {
//   const dataContainer = document.getElementById("data-container");

//   getAllPeople().then((resp) => {
//     resp.results.forEach((people) => {
//       const peopleElement = document.createElement("div");
//       peopleElement.innerHTML = `${JSON.stringify(people.name, people.films)}`;

//       dataContainer.appendChild(peopleElement);
//     });
//   });
// };



