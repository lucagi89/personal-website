


const imageContainer = document.querySelector('.image-container');

imageContainer.addEventListener('mousemove', (e) => {
  const containerRect = imageContainer.getBoundingClientRect();
  const mouseX = e.clientX - containerRect.left;

  const images = imageContainer.querySelectorAll('img');
  images.forEach((img) => {
    const imageRect = img.getBoundingClientRect();
    const imageWidth = imageRect.width;
    const translateX = ((mouseX / containerRect.width) - 0.5) * imageWidth;
    img.style.transform = `translateX(${translateX}px)`;
  });
});