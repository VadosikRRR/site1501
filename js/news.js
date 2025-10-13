const container = document.querySelector('.photos_container');
const photos = document.querySelectorAll('.photo');
let currentPosition = 0;
const photoHeight = 235; // Высота фото + отступ

function updatePosition() {
  container.style.transform = `translateY(-${currentPosition}px)`;
}

document.querySelector('.scroll_down').addEventListener('click', () => {
  if(currentPosition < (photos.length - 2) * photoHeight) {
    currentPosition += photoHeight;
    updatePosition();
  }
});

document.querySelector('.scroll_up').addEventListener('click', () => {
  if(currentPosition > 0) {
    currentPosition -= photoHeight;
    updatePosition();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Обработчик для всех кнопок
  document.querySelectorAll('.unwrap_text_button').forEach(button => {
    const popupId = button.dataset.popup;
    const popup = document.getElementById(popupId);
    const popupContent = popup.querySelector('.popup-content');

    button.addEventListener('click', function(e) {
      e.stopPropagation();
      popup.style.display = 'flex';
    });

    popupContent.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });

  // Общий обработчик закрытия
  document.addEventListener('click', function(e) {
    const isButton = e.target.closest('.unwrap_text_button');
    const isPopupContent = e.target.closest('.popup-content');
    
    if (!isButton && !isPopupContent) {
      document.querySelectorAll('.popup').forEach(popup => {
        popup.style.display = 'none';
      });
    }
  });
});
