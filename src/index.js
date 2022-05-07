console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function addImagesToDom(imgUrl) {
    const imageContainer = document.getElementById("dog-image-container");
    let imageElement = document.createElement('img');
    imageElement.src = imgUrl;
    imageContainer.appendChild(imageElement);
}

function addDogBreeds(breed) {
const breedList = document.getElementById('dog-breeds');
let individualBreedListItem = document.createElement('li');
individualBreedListItem.innerHTML = breed;
breedList.appendChild(individualBreedListItem);
}

function filterBreeds(event) {
    const breedList = document.getElementById('dog-breeds');
    breedList.innerHTML=""

    let selectedValue = event.target.value;
    fetch(breedUrl)
    .then((resp) => resp.json())
    .then((json) => 
    Object.keys(json.message)
    .filter(breedName => breedName.startsWith(selectedValue))
    .map(addDogBreeds))
}

window.addEventListener('DOMContentLoaded', (event) => {
fetch(imgUrl)
.then((response) => response.json())
.then((json) => json.message.map(addImagesToDom));

fetch(breedUrl)
.then((response) => response.json())
.then((json) => Object.keys(json.message).map(addDogBreeds))

const selectElement = document.getElementById('breed-dropdown')
selectElement.addEventListener('change', filterBreeds);

}); 

