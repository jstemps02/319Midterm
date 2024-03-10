const dataURL = './data.json';

async function fetchData() {
  try {
    const response = await fetch(dataURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
const cardHolder = document.querySelector('.card-holder');

function createCard(item) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImage = document.createElement('img');
  cardImage.src = item.url;
  cardImage.alt = item.alt;
  card.appendChild(cardImage);

  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = item.title;
  card.appendChild(cardTitle);

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-description');
  cardDescription.textContent = item.description;
  card.appendChild(cardDescription);

  cardHolder.appendChild(card);
}

const toggleButton = document.querySelector('#toggle-all-cards');

toggleButton.addEventListener('click', () => {
  const cardHolder = document.querySelector('.card-holder');
  cardHolder.classList.toggle('card-hidden');
});


    fetchData().then(data => {
        data.forEach(item => createCard(item));
        cardHolder.classList.toggle('card-hidden');
      });