document.getElementById('btn-add').addEventListener('click',function(){
    const fruitSection = document.getElementById('fruits-section');
    // const ul = document.createElement('ul');
    const li = document.createElement('li');
    const inputField = document.getElementById('input-field');
    const fruits = inputField.value;
    li.innerText = fruits;

    const fruitsList = document.getElementById('fruits-list');
    fruitsList.appendChild(li);
    inputField.value = '';
})