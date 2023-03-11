const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "H90+HYoFfHK6optqyq8BTQ==L98vEUmniAhUryaM";
const limit = 1;
const url = "https://api.api-ninjas.com/v1/dadjokes?limit=" + limit;

const options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};

async function getJoke() {
  try {
    jokeEl.innerText = "updating...";
    btnEl.diabled = true;
    btnEl.innerText = "Loading...";

    const response = await fetch(url, options);
    const data = await response.json();
    jokeEl.innerText = data[0].joke;

    btnEl.diabled = false;
    btnEl.innerText = "Tell me a joke";
  } catch (error) {
    jokeEl.innerText = "An error occured, try again later";
    btnEl.diabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
