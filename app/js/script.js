const jokeText = document.querySelector(".joke");
const jokeBtn = document.querySelector("button");
const API_URL =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist";

jokeBtn.addEventListener("click", async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  let joke = "";

  if (data.joke === undefined) {
    joke = `${data.setup} <br/> ${data.delivery}`;
  } else {
    joke = `${data.joke}`;
  }

  jokeText.innerHTML = joke;
});
