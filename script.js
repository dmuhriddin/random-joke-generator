const jokeContainer = document.querySelector("#joke"),
  btn = document.querySelector("#btn");

const URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";

function getJoke() {
  jokeContainer.classList.remove("fade");
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      jokeContainer.textContent = data.joke;
      jokeContainer.classList.add("fade");
    });
}

getJoke();

btn.addEventListener("click", getJoke);
