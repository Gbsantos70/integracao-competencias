window.onload = () => {
    loadStarwars();
  };
  
  const loadStarWars = () => {
    const dataContainer = document.getElementById("data-container");
    getAllStarwars().then((resp) => {
      resp.forEach((StarWars) => {
        const StarWarsElement = document.createElement("div");
    StarWarsElement.innerHTML =` ${JSON.stringify(StarWars.name)}`;
    dataContainer.appendChild(StarWarsElement);
