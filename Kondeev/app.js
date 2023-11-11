const sliderContainer = document.getElementById('slider-container');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const items = document.getElementsByClassName('slider-items');
let currentItem = 0;

function showItem(index) {
  // Hide all items
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
  }

  // Display the selected item
  items[index].style.display = 'block';
}

function slidePrev() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = items.length - 1;
  }
  showItem(currentItem);
}

function slideNext() {
  currentItem++;
  if (currentItem >= items.length) {
    currentItem = 0;
  }
  showItem(currentItem);
}

// Show the first item by default
showItem(currentItem);

// Button event listeners
prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);




