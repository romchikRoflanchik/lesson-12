// Завдання 3

document.querySelector('.item1').addEventListener('click', function(event){
    let q = prompt();
    event.target.style.backgroundImage = `url('${q}')`;
})


document.querySelector('.item2').addEventListener('click', function(event){
    let w = prompt();
    event.target.style.backgroundImage = `url('${w}')`;
})

document.querySelector('.item3').addEventListener('click', function(event){
    let e = prompt();
    event.target.style.backgroundImage = `url('${e}')`;
})

