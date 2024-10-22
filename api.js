let image = document.getElementById("image");
let PokeNumber = document.getElementById("number");
let PokeName = document.getElementById("name");
let button = document.getElementById("button");
var audio = document.getElementById("audio");
      // Permet de préfixer les navigateurs
navigator.vibrate =
navigator.vibrate ||
navigator.webkitVibrate ||
navigator.mozVibrate ||
navigator.msVibrate;
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}
function copy() {
    navigator.clipboard.writeText("jealife.agency@gmail.com");
    btnCopy.innerText = "Copied!!";
        // Si l'API vibrate est supportée, on fait vibrer le téléphone 1/2 seconde
        if (navigator.vibrate) {

        navigator.vibrate(500);
}
play();
}

button.addEventListener("click",  changePokemon  = async ()=>{
    let RandomNumber= Math.ceil(Math.random()*150)+1;
    let requestString= `https://pokeapi.co/api/v2/pokemon/${RandomNumber}`;
    let data = await fetch(requestString);
    console.log(data)

    let response= await data.json();
    console.log(response);
    image.src=response.sprites.front_default;
    PokeNumber.textContent=response.id;
    PokeName.textContent=response.name;
    play();
})
changePokemon();
