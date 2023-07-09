

const imagesContainer = document.querySelector('.images-container');
imagesContainer.addEventListener('mouseenter', () => {
  imagesContainer.classList.remove('hidden');
});
imagesContainer.addEventListener('mouseleave', () => {
  imagesContainer.classList.add('hidden');
});

document.addEventListener('click', function(){console.log('clicked')})