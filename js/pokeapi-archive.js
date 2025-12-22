/*
    Fetch Definition:
    Make an asynchronous HTTP request.
*/

// fetch data about Pikachu
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => 
    {
        if (response.ok)
        {
            return response.json();
        }
        else
        {
            // display error
            throw new Error("Error: Resource not fetched.");
        }
    })
    .then (data => console.log(data.abilities))
    .catch(error => console.log(error));