
// Завдання 1

let r = '';


document.querySelector('.box').addEventListener('mouseover', function(event){
    if(CountOver==0){
        r= 'red';
    }
    else if(CountOver==1){
        r = 'yellow'
    }
    else if(CountOver==2){
        r = 'green'
    }
    event.target.style.backgroundColor= r;
})

document.querySelector('.box').addEventListener('mouseout', function(event){
    event.target.style.backgroundColor = 'purple';
    CountOver++;
    if(CountOver==3){
        CountOver = 0;
    }
})

let CountOver = 0;





