let breeds = [];

document.addEventListener('DOMContentLoaded', function () {
    loadImages()
    fetchBreeds()
});

function loadImages () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach(image => addImage(image))
    });
}

function addImage (image) {
    let container = document.querySelector('#dog-image-container');
    let newImage = document.createElement('img');
    newImage.src = image;
    container.appendChild(newImage);
}

function fetchBreeds () {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        breeds = Object.keys(data.message);
        updateBreedList(breeds);
    });
}

function updateBreedList (breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach (breed => addBreed(breed));
}

function removeChildren (element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function addBreed (breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
}

function updateColor (event) {
    event.target.style.cursor = 'red';
}