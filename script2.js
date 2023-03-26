// Завдання 2

document.querySelector('.box2').addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = 'yellow';
    event.target.textContent = 'Хочеш знати який';
    event.target.style.color = 'blue';

})

document.querySelector('.box2').addEventListener('mousedown', function(event){
    event.target.style.backgroundColor = 'black';
    event.target.textContent = 'А я тобі не скажу';
    event.target.style.color = 'white';

})

document.querySelector('.box2').addEventListener('mouseup', function(event){
    event.target.style.backgroundColor = 'yellow';
    event.target.textContent = 'Хочеш знати який';
    event.target.style.color = 'blue';

})

document.querySelector('.box2').addEventListener('mouseout', function(event){
    event.target.style.backgroundColor = 'purple';
    event.target.textContent = 'У мене є секрет';
    event.target.style.color = 'black';
})
