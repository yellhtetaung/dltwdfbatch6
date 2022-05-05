// UI

const minnum = document.querySelector('.minnumber'),
        maxnum = document.querySelector('.maxnumber'),
        getinput = document.querySelector('#guessnumber'),
        getbtn = document.querySelector('#btn'),
        message1 = document.querySelector('.message1'),
        message2 = document.querySelector('.message2');

let min = 1,
    max = 10,
    gameleft = 3,
    winningnum = 5;