const sliderContainer = document.querySelector('#slider-container');
const sliderBar = document.querySelector('#slider-bar');
const sliderHandle = document.querySelector('#slider-handle');
const sliderValue = document.querySelector('#slider-value');
const monthlyPrice = 16.00
const yearlyPrice = monthlyPrice * 12
const price = document.querySelector('#price')
const slider2 = document.querySelector('#slider2')

slider2.addEventListener('click', toggleSecondSlider)
slider2.addEventListener('touch', toggleSecondSlider)

function toggleSecondSlider() {
  slider2.classList.toggle('bg-gray-400');slider2.classList.toggle('bg-teal-400')
  slider2.classList.toggle('justify-end')
  if (slider2.classList.contains('bg-teal-400')) {
    price.textContent ='$ ' + yearlyPrice +  '.00'
  } else if(slider2.classList.contains('bg-gray-400')){
    price.textContent = '$' + monthlyPrice + '.00'
  }
}
let isDragging = false;

sliderHandle.addEventListener('mousedown', () => {
  isDragging = true;
});
sliderHandle.addEventListener('touchstart', () => {
  isDragging = true;
});

sliderContainer.addEventListener('mousemove', (event) => {
  if (isDragging) {
    const barRect = sliderBar.getBoundingClientRect();
    const handleRect = sliderHandle.getBoundingClientRect();
    const handleX = event.clientX - barRect.left - handleRect.width / 2;
    const maxX = barRect.width - handleRect.width;
    const clampedX = Math.min(Math.max(handleX, 0), maxX);
    const percentage = clampedX / maxX;
    sliderHandle.style.left = `${clampedX}px`;
    sliderValue.textContent = Math.round(percentage * 200) + 'K';
  }
});
sliderContainer.addEventListener('touchmove', (event) => {
  if (isDragging) {
    const barRect = sliderBar.getBoundingClientRect();
    const handleRect = sliderHandle.getBoundingClientRect();
    const handleX = event.touches[0].clientX - barRect.left - handleRect.width / 2;
    const maxX = barRect.width - handleRect.width;
    const clampedX = Math.min(Math.max(handleX, 0), maxX);
    const percentage = clampedX / maxX;
    sliderHandle.style.left = `${clampedX}px`;
    sliderValue.textContent = Math.round(percentage * 200) + 'K';


  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
document.addEventListener('mouseup', () => {
  isDragging = false;
});