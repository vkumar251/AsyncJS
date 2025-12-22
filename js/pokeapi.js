// POKEMON API - https://pokeapi.co

const img = document.getElementById("pokemon-sprite");
const button = document.getElementById("fetch-button");

button.addEventListener("click", () => {fetchData();});
img.style.display = "none";

async function fetchData()
{
    try
    {
        document.getElementById("error-msg").style.display = "none";

        // get inputted pokemon and make lower case
        const name = document.getElementById("pokemon-name").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        if (response.ok)
        {
            // convert response to json and return promise
            const data = await response.json();
            console.log(data);

            // display image of pokemon sprite
            const sprite = data.sprites.front_default;            
            img.src = sprite;

            // adjust image css
            img.style.display = "block";
            img.style.height = "500px";
            img.style.width = "500px";

            const p = document.getElementById("data");

            // display id
            let id = document.createElement("p");
            let idValue = document.createTextNode(`Id: ${data.id}`);
            id.appendChild(idValue);
            p.parentNode.insertBefore(id, p);

            // display height
            let height = document.createElement("p");
            let heightDetails = document.createTextNode(`Height: ${data.height}`);
            height.appendChild(heightDetails);
            p.parentNode.insertBefore(height, p);

            // display moves as unordered list
            let movesTitle = document.createElement("p");
            movesTitle.textContent = "Moves:";
            p.parentNode.insertBefore(movesTitle, p);

            let ul = document.createElement("ul");
            data.moves.forEach(m => 
            {
                let li = document.createElement("li");
                li.textContent = m.move.name;
                ul.appendChild(li);
            });

            p.parentNode.insertBefore(ul, p);
        }
        else
        {
            img.style.display = "none";
            document.getElementById("error-msg").style.display = "block";  
        }
    }
    catch (exception)
    {
        console.error(exception);
    }
}

