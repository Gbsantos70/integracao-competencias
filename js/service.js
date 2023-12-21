// var URL = "https://swapi.dev/api/people/";
// export const getAllPeople = async () => {
//     try { const response = await fetch (URL)
        
//         return await reponse.json();
//     } catch (error) {
//         console.log('error>>>',error);

        
//     }
// };

var URL = "https://swapi.dev/api/people/";


export const getAllPeople = async () => {

    const response = await fetch(URL)
    
    return await response.json()
    
};
  