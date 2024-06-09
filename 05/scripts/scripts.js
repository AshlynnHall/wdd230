const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const errorMessage = document.querySelector('#error-message');

button.addEventListener('click', () => {
    const chapter = input.value;
    if (chapter !== '') {
        const li = document.createElement('li');
        li.textContent = chapter;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        errorMessage.textContent = '';
    }

    else {
        errorMessage.textContent = 'Please enter a book and chapter.';
    }
    input.focus();
});