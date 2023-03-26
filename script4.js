// Завдання 4

let col = document.querySelectorAll('li');

col.forEach(elem => {
    elem.addEventListener('click',(event) => {
        event.target.style.color= event.target.textContent;
    })
})

// for(let i=0; i<col.length; i++ ){
//     col[i].addEventListener('click', function(event){
//         event.target.style.color= event.target.textContent;
//     })
// }

// for (const elem of col) {
//     elem.addEventListener('click', function(event){
//         event.target.style.color= event.target.textContent;
//     })
// }