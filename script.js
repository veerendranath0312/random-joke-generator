const joke = document.querySelector('#joke')
const wrapper = document.querySelector('#wrapper')
const button = document.querySelector('button')

const endpoint = 'https://icanhazdadjoke.com'

// generate random number
const generateRandomNumber = () => Math.trunc(Math.random() * 255)

// generate random color
const generateRandomColor = () =>
  `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`

const changeColor = () => {
  const randomColor = generateRandomColor()
  document.body.style.backgroundColor = randomColor
  wrapper.style.color = randomColor
  button.style.backgroundColor = randomColor
}

// fetching random joke
const getRandomJoke = async function () {
  changeColor()

  const response = await fetch(endpoint, {
    headers: {
      Accept: 'application/json'
    }
  })

  const data = await response.json()

  joke.textContent = data.joke
}

changeColor()
getRandomJoke()
button.addEventListener('click', getRandomJoke)
