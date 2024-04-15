const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTexts = ['Closeup of a human eye', 'Some other description', 'Picture of Flowers', 'Egyptian wall iconagraphy', 'Butterfly'];

/* Looping through images */

for (let i = 0; i < imageFilenames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageFilenames[i]);
    newImage.setAttribute('alt', altTexts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function() {
      displayedImage.src = this.src;
      displayedImage.alt = this.alt;
    });
  }

/* Wiring up the Darken/Lighten button */
