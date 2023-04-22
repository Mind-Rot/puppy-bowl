const url = "https://fsa-puppy-bowl.herokuapp.com/api/2303-ftb-mt-web-ft/players"


export async function fetchAllPlayers(){
    const response = await fetch(url)
    const result = await response.json()
    return result.data.players;
}


export async function fetchPlayersById(id){
    const response = await fetch(`${url}/${id}`)
    const result = await response.json()
    return result.data.player
}

export async function deletePuppyById(id){
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
    });
    const result = await response.json()
    return result;
}

export async function createPuppy(name, breed){
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          Body: JSON.stringify({
            name,
            breed
          }),
    });
    const result = await response.json();
    return result;
}