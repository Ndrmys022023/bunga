const title = document.querySelector('.title');
const heroNote = document.querySelector('.hero-note');
const btn = document.querySelector('.btn');
const text = `Untuk Cinta Sejati`.split('');

function createHeart(x, y) {
  const heart = document.createElement('span');
  heart.className = 'heart-burst';
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 900);
}

if (title) {
  title.style.display = 'flex';
  title.style.flexWrap = 'wrap';
  title.style.justifyContent = 'center';
  title.style.gap = '0.5rem';

  text.forEach((character) => {
    if (character !== ' ') {
      title.innerHTML += `<span>${character}</span>`;
    } else {
      title.innerHTML += `<span style='width: 1rem'></span>`;
    }
  });
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element, index) => {
  element.style.animationDelay = `${index * 0.12}s`;
});

if (btn) {
  btn.addEventListener('mouseenter', () => {
    if (heroNote) heroNote.textContent = 'Ayo klik, bunga romantis menunggu.';
  });

  btn.addEventListener('mouseleave', () => {
    if (heroNote) heroNote.textContent = 'Untuk pacarku, bukalah bunga ini dan rasakan cintaku.';
  });

  btn.addEventListener('click', (event) => {
    if (heroNote) heroNote.textContent = 'Love! Semoga dia suka kejutan ini.';
    createHeart(event.clientX, event.clientY);
    createHeart(event.clientX + 20, event.clientY - 10);
    createHeart(event.clientX - 20, event.clientY + 10);
  });
}
