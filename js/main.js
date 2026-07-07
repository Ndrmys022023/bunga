
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = 'I LOVE U'.split('');
    const titleElement = document.getElementById('title');
    const message = document.querySelector('.flower-message');
    const flowers = Array.from(document.querySelectorAll('.flower'));
    const lovePopup = document.getElementById('lovePopup');
    const lovePopupText = document.getElementById('lovePopupText');
    const lovePopupClose = document.getElementById('lovePopupClose');
    let selectedFlower = null;
    let index = 0;

    const loveMessages = [
      'Yang jauh hanya pijakan bukan perasaan. Yang berjarak hanyalah raga bukan rasa, anjaiiiii tak kanjai kanjaii.',
      'makasih sayangkuuu cintaku manisku imutku lucukuu cantikuuu, udah bertahan sampe sejauh ini sama akuu yaa.',
      'maafi akuu sayang klo selalu buat kamu badmood tuu, maaf juga klo akuu kedengeran ngegas ke kamu tapi itu aku beneran tidak ada niatan ngegas kamu sayangkuu.',
      'jaga kesehatan terus ya sayangkuu, makan yang banyak dan minum air putih yang cukup tuuu, nanti biar bisa di unyel - unyel hehehe.',
      'kecuppp dulu donggg 1000 kaliii'
    ];

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }

    function getFlowerLabel(flower) {
      return `Buket ${flowers.indexOf(flower) + 1}`;
    }

    function updateMessage(text) {
      if (message) message.textContent = text;
    }

    function openLovePopup(text) {
      if (!lovePopup || !lovePopupText) return;
      lovePopupText.textContent = text;
      lovePopup.classList.remove('hidden');
      lovePopup.classList.add('show');
    }

    function closeLovePopup() {
      if (!lovePopup) return;
      lovePopup.classList.remove('show');
      lovePopup.classList.add('hidden');
    }

    function showLoveFor(element) {
      const flower = element.closest('.flower');
      const label = flower ? getFlowerLabel(flower) : 'Bunga ini';
      const messageText = `${label} berkata: ${loveMessages[Math.floor(Math.random() * loveMessages.length)]}`;
      openLovePopup(messageText);
    }

    lovePopupClose?.addEventListener('click', closeLovePopup);

    const clickableItems = document.querySelectorAll('.flower, .flower__leaf, .flower__line__leaf');
    clickableItems.forEach((item) => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', (event) => {
        event.stopPropagation();
        const clickTarget = event.currentTarget;
        const flower = clickTarget.closest('.flower');
        if (flower) {
          if (selectedFlower && selectedFlower !== flower) {
            selectedFlower.classList.remove('selected');
          }

          selectedFlower = flower;
          flower.classList.add('selected');
          updateMessage(`Yeay! ${getFlowerLabel(flower)} dipilih. Pesan cinta muncul.`);
          showLoveFor(clickTarget);
        }
      });
    });

    flowers.forEach((flower) => {
      flower.addEventListener('mouseenter', () => {
        flower.classList.add('selected');
        updateMessage(`Kamu sedang melihat ${getFlowerLabel(flower)}. Klik untuk pesan cinta!`);
      });

      flower.addEventListener('mouseleave', () => {
        if (flower !== selectedFlower) {
          flower.classList.remove('selected');
        }
        updateMessage(
          selectedFlower
            ? `Kamu memilih ${getFlowerLabel(selectedFlower)}. Klik lagi untuk melihat pesan cinta.`
            : 'Geser kursor atau klik bunga untuk interaksi.'
        );
      });
    });

    document.addEventListener('click', (event) => {
      if (!lovePopup) return;
      if (!lovePopup.contains(event.target) && lovePopup.classList.contains('show')) {
        closeLovePopup();
      }
    });

    updateMessage('Geser kursor atau klik bunga untuk interaksi.');
    appendTitle();
    clearTimeout(c);
  }, 1000);
};