const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT

async function generateJoke() {
  const config = { // created a variable config and thn set the header for get api
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)
  //remeber fetch is async so we have to await until its done fetching

  const data = await res.json() //this also return a promise so we have to await on that and then the data will be on that variable 

  jokeEl.innerHTML = data.joke
}

// USING .then()

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config) // this will going to give us a promise back
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
