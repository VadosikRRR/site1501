document.querySelectorAll('.track_name').forEach(element => {
  const containerWidth = element.parentElement.offsetWidth; // Ширина контейнера
  let fontSize = 35; // Начальный размер шрифта

  // Уменьшаем шрифт, пока текст не поместится
  while (element.scrollWidth > containerWidth && fontSize > 10) {
    fontSize--;
    element.style.fontSize = fontSize * 0.9 + 'px';
  }
});