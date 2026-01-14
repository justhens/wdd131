const chapterInput = document.querySelector('#chapterInput');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#list');

addBtn.addEventListener('click', function () {
  if (chapterInput.value === '') {
    chapterInput.focus();
    return;
  }

  const li = document.createElement('li');
  li.textContent = chapterInput.value;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.setAttribute('aria-label', 'Remove chapter');

  li.appendChild(deleteBtn);
  list.appendChild(li);

  chapterInput.value = '';
  chapterInput.focus();
});

list.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    list.removeChild(e.target.parentElement);
  }
});
