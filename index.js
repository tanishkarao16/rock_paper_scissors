let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_user = document.querySelector('.result #user');
const result_comp = document.querySelector('.result #comp');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
let final_result_div = document.getElementById('final-result');
let user_choice_div = document.getElementById('user-choice');
let comp_choice_div = document.getElementById('comp-choice');

function compChoice() {
    const choice = ['r', 'p' , 's'];
    let ch = (Math.floor(Math.random()*3)); //0, 1, 2
    return choice[ch]; 
}
compChoice();

function changeToWord(letter)
{
    if(letter == 'r') return 'Rock';
    else if(letter == 'p') return 'Paper';
    else return 'Scissor';
}
function toImage(letter)
{
    if(letter == 'r') return '🪨';
    else if(letter == 'p') return '📜';
    else return '✂️';
}

function wins(userChoice, compChoice)
{
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_user.innerHTML=changeToWord(userChoice);
    result_comp.innerHTML=changeToWord(compChoice)
    console.log('wins')
    final_result_div.innerHTML='USER WON'
    user_choice_div.innerHTML=toImage(userChoice);
    comp_choice_div.innerHTML=toImage(compChoice);
    
}

function loss(userChoice, computerChoice) {
    compScore++;
    compScore_span.innerHTML=compScore;
    userScore_span.innerHTML=userScore;
    result_user.innerHTML=changeToWord(userChoice);
    result_comp.innerHTML=changeToWord(computerChoice)
    console.log('loss')
    final_result_div.innerHTML='USER LOST'
    user_choice_div.innerHTML=toImage(userChoice);
    comp_choice_div.innerHTML=toImage(computerChoice);

}

function draw(userChoice, computerChoice) {
    compScore_span.innerHTML=compScore;
    userScore_span.innerHTML=userScore;
    result_user.innerHTML=changeToWord(userChoice);
    result_comp.innerHTML=changeToWord(computerChoice)
    console.log('draw')
    final_result_div.innerHTML="IT'S A DRAWW!"
    user_choice_div.innerHTML=toImage(userChoice);
    comp_choice_div.innerHTML=toImage(computerChoice);

}

function game(userChoice) {
    const computerChoice = compChoice();
    console.log(userChoice);
    console.log(computerChoice);
    switch(userChoice+computerChoice)
    {
        case 'rs':
        case 'sp':
        case 'pr':
            wins(userChoice, computerChoice);
            break;
        case 'rp':
        case 'sr':
        case 'ps':
            loss(userChoice, computerChoice);
            break;
        default : draw(userChoice, computerChoice);
        break;
    }
}

function main() {
rock_div.addEventListener('click' , function() {
   game('r');
}) 

paper_div.addEventListener('click' , function() {
    game('p');
})  

scissor_div.addEventListener('click' , function() {
    game('s');
})  

}
main();
