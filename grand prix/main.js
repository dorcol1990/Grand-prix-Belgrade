let formulaOne = document.querySelector('.formulaOne');
let formulaTwo = document.querySelector('.formulaTwo');
let formulaThree = document.querySelector('.formulaThree');
let btn = document.querySelector('.race');
let intervalID;
let counterTime = 0;


function randomNum (){
    return Math.floor(Math.random()*3)+1;
}

function startRace (){
    let formulaOneLeft = parseInt(window.getComputedStyle(formulaOne).getPropertyValue('left'));
    let formulaTwoLeft = parseInt(window.getComputedStyle(formulaTwo).getPropertyValue('left'));
    let formulaThreeLeft = parseInt(window.getComputedStyle(formulaThree).getPropertyValue('left'));

    formulaOne.style.left = (formulaOneLeft + randomNum()) + "px";
    formulaTwo.style.left = (formulaTwoLeft + randomNum()) + "px";
    formulaThree.style.left = (formulaThreeLeft + randomNum()) + "px";

    counterTime++


    if (formulaOneLeft >= 1250 || formulaTwoLeft >= 1250 || formulaThreeLeft >= 1250) {
        clearInterval(intervalID);

        let time = counterTime/20;
        let speed = Math.floor(1250/time * (3600/1)/(1000/1));

        let finishDiv = document.createElement('div');
        finishDiv.className = 'finishRace';
        document.body.appendChild(finishDiv);
        finishDiv.innerHTML = "Trka je zavrsena";

        let parag = document.createElement('p');
        finishDiv.appendChild(parag);
        parag.innerHTML = "Trka je trajala " + time + "s, pobednik je vozio prosecnom brzinom od: " +speed + "km/h";

        let reloadBtn = document.createElement('button');
        reloadBtn.className = 'reloadBtn';
        reloadBtn.innerHTML = "Play Again!";
        finishDiv.appendChild(reloadBtn);
        
        reloadBtn.addEventListener('click', function (){
            location.reload();
        })

        
    }
}





function handleClick() {
  intervalID = setInterval(startRace, 50);
  btn.style.background = "#FC0F0F";
  btn.style.color = "aliceblue";
  btn.innerHTML = "STARTED";
  
 
  btn.removeEventListener('click', handleClick);
}

btn.addEventListener('click', handleClick);




