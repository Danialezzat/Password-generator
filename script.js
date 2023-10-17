let input = document.querySelector('.input');



const capitalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
const smallAlphabet = 'abcdefghigklmopqrstuvwxyz';
const numbers = '0123456789';
const SpecialLetters = '~!@#$%^&*()_+?}{[]';

let result

function passwordMaker(){
    let Aphabet = capitalAlphabet[(Math.floor(Math.random() * 25))];
    let AphabetOne = capitalAlphabet[(Math.floor(Math.random() * 25))];

    let alphabet  = smallAlphabet[(Math.floor(Math.random() * 25))];
    let alphabetOne  = smallAlphabet[(Math.floor(Math.random() * 25))];

    let Number = numbers[(Math.floor(Math.random() * 10))];
    let NumberOne = numbers[(Math.floor(Math.random() * 10))];

    let Special = SpecialLetters[(Math.floor(Math.random() * 18))];
    let SpecialOne = SpecialLetters[(Math.floor(Math.random() * 18))];

    resultOne = NumberOne + alphabetOne + AphabetOne + SpecialOne;
    resultTwo = Aphabet + alphabet + Number + Special;



    input.value = resultOne + resultTwo;
};

function copy(){
    input.select();
    document.execCommand('copy');
    alert('copied');
    input.value = '';
};
