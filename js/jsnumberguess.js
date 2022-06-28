// UI

const minnum = document.querySelector('.minnumber'),
        maxnum = document.querySelector('.maxnumber'),
        getinput = document.querySelector('#guessnumber'),
        getbtn = document.querySelector('#btn'),
        message1 = document.querySelector('.message1'),
        message2 = document.querySelector('.message2'),
        getgame = document.querySelector('#game');

let min = 1,
        max = 10,
        gameleft = 3,
        winningnum = randomnum(min,max);

        // console.log(winningnum);

minnum.textContent = min;
maxnum.innerText = max;

getbtn.addEventListener('click', function(){
        // console.log('hay i am working');

        // console.log(getinput.value);
        // console.log(typeof getinput.value);

        let guess = parseInt(getinput.value);
        // console.log(guess);
        // console.log(typeof guess);

        if(guess < min || guess > max || isNaN(guess)){
                // console.log(`Please enter a number between ${min} to ${max}`);
                // message2.textContent = `Please enter a number between ${min} to ${max}`;

                setmessage2(`Please enter a number between ${min} to ${max}`,"red");
        }

        if(guess === winningnum){
                // Gameover WON
                
                // diable getinput
                // getinput.disabled = true;

                // getinput border color to green
                // getinput.style.borderColor = "green";

                // message 1
                // message1.textContent = `${winningnum} is correct!!!, You Won`;
                // message1.style.color = "green";
                // setmessage1(`${winningnum} is correct!!!, You Won`,"green");

                // play again ? 
                // getbtn.value = 'Play Again';

                gameover(true,`${winningnum} is correct!!!, You Won`)

        }else{
                // Wrong Number
                // gameleft--;
                gameleft -= 1;

                // console.log(gameleft);

                if(gameleft == 0){
                        // Gameover LOSE
                        // console.log('Game Over');

                        // disabled getinput
                        // getinput.disabled = true;

                        // getinput border color to red
                        // getinput.style.borderColor = "red";

                        // message 2
                        // message2.textContent = `Game Over, You Lost, The correct number is ${winningnum}`;
                        // message2.style.color = "red";
                        // setmessage1(`Game Over, You Lost, The correct number is ${winningnum}`,"red");

                        // play again ?
                        // getbtn.value = "Play Again";

                        gameover(false,`Game Over, You Lost, The correct number is ${winningnum}`)

                }else{
                        // COTINUE game

                        // getinput border color to red
                        getinput.style.borderColor = "red";

                        // clear getinput value
                        getinput.value = "";

                        // message 1
                        // message1.innerText = `${guess} is not correct, ${gameleft} guess left`;

                        setmessage1(`${guess} is not correct, ${gameleft} guess left`,"blue")
                }
        }
});

// Message

function setmessage1(msg,color){
        message1.textContent = msg;
        message1.style.color = color;
}

function setmessage2(msg,color){
        message2.innerText = msg;
        message2.style.color = color;

        setTimeout(function(){
                message2.innerText = "";
        },2000);
}

// Gameover
function gameover(won,msg){

        let color;

        won === true ? color = "green" : color = "red";

        // diabled getinput 
        getinput.disabled = true;

        // getinput border color to green or red 
        getinput.style.borderColor = color;

        // message 1
        setmessage1(msg,color);

        // play agian ?
        getbtn.value = "Play Agian";

        // getbtn.className = "btn playagain";
        getbtn.classList.add('playagain');

}

getgame.addEventListener('mouseup', (e)=>{
        // console.log(e.target);

        if(e.target.className === "btn playagain"){
                // console.log('i am playagain');
                window.location.reload();
        }
});

// For Winning Number
function randomnum(minnum,maxnum){
        let getrdm = Math.floor(Math.random() * (maxnum-minnum) + 1);


        return getrdm;
}