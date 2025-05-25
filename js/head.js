let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;

function showImage(index) {
  // Скрываем все изображения
  images.forEach(img => img.classList.remove('active'));
  
  // Проверяем границы
  if(index >= totalImages) currentIndex = 0;
  if(index < 0) currentIndex = totalImages - 1;
  
  // Показываем текущее изображение
  images[currentIndex].classList.add('active');
}

document.querySelector('.prev-btn').addEventListener('click', () => {
  currentIndex--;
  showImage(currentIndex);
});

document.querySelector('.next-btn').addEventListener('click', () => {
  currentIndex++;
  showImage(currentIndex);
});

// Инициализация первой картинки
showImage(0);

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}