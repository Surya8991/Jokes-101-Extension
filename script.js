jokesRandom()

document.getElementById("btn").onclick = function() {jokesRandom()}

function jokesRandom()
{
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,sexist&type=single")
    .then(data => data.json())
    .then(jokeData =>
        {
            const jokeText=jokeData.joke;
            const jokeElement=document.getElementById("joke");
            jokeElement.innerHTML=jokeText;
        })
}
