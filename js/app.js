const insertNew = document.querySelector('#insert');
const todos = document.querySelector('#inject-list');
const searchBar = document.querySelector('#search-bar input');



const addNewItem = newItem => {
    const content = 
    `
    <li class="newItem list-group-item">
        <span>${newItem}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    todos.innerHTML += content;
}

insertNew.addEventListener('submit', e => {
    e.preventDefault();
    const task = insertNew.add.value.trim();
    if(task.length) addNewItem(task), insertNew.reset();
});

todos.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// const searchFeature = wordToMatch => {
//     Array.from(todos.children)
//         .filter(item => !item.textContent.toLowerCase().includes(wordToMatch))
//         .forEach(item => item.classList.add('filtered'));
//     Array.from(todos.children)
//         .filter(item => item.textContent.toLocaleLowerCase().includes(wordToMatch))
//         .forEach(item => item.classList.remove('filtered'));
// };

// searchBar.addEventListener('keyup', event => {
//     const word = search.value.trim().toLowerCase();
//     searchFeature(word);
// });
