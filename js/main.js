var URL = "https://swapi.dev/api/people/";



const getAllPeople = async () => {

  const response = await fetch(URL)
  console.log(response)

  const data = await response.json()
  console.log(data);
};


getAllPeople();


const people = () => {
  const dataContainer =
    document.getElementById('data-container');

  getAllPeople().then(resp => {
    resp.forEach(people => {

      const peopleElement =
        document.createElement('div');
      peopleElement.innerHTML =
        `${JSON.stringify(people.name, people.films)}`

    });
    dataContainer.appendChild(peopleElement)
  })

}

