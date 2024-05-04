// Declare an array of image filenames
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Declare an object of alternative text for each image
const altText = {
  pic1: 'Image 1',
  pic2: 'Image 2',
  pic3: 'Image 3',
  pic4: 'Image 4',
  pic5: 'Image 5'
};

// Looping through images
const thumbBar = document.querySelector('.thumb-bar');

imageFilenames.forEach((filename, index) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${filename}`);
  newImage.setAttribute('alt', altText[`pic${index + 1}`]);
  thumbBar.appendChild(newImage);

  // Adding click event listener to each thumbnail image
  newImage.addEventListener('click', function() {
    const displayedImg = document.querySelector('.displayed-img');
    displayedImg.setAttribute('src', this.getAttribute('src'));
    displayedImg.setAttribute('alt', this.getAttribute('alt'));
  });
});

// Writing a handler that runs the darken/lighten button
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  const overlay = document.querySelector('.overlay');
  if (this.getAttribute('class') === 'dark') {
    this.setAttribute('class', 'light');
    this.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  } else {
    this.setAttribute('class', 'dark');
    this.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
  }
});

