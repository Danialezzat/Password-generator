let input = document.querySelector('.input');



const capitalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
const smallAlphabet = 'abcdefghigklmopqrstuvwxyz';
const numbers = '0123456789';
const SpecialLetters = '~!@#$%^&*()_+?}{[]';

let result

function passwordMaker(){
    let Aphabet = capitalAlphabet[(Math.floor(Math.random() * 25))];
    let alphabet  = smallAlphabet[(Math.floor(Math.random() * 25))];
    let Number = numbers[(Math.floor(Math.random() * 10))];
    let Special = SpecialLetters[(Math.floor(Math.random() * 18))];

    result = Aphabet + alphabet + Number + Special;
    console.log(result)

    input.value = result;


}

function copy(){
    input.select();
    document.execCommand('copy');
    alert('copied')
    input.value = '';
}
