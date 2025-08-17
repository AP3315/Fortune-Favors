

function play(){

    var a=Math.random();
    var b=Math.random();

    a=Math.ceil(a*6);
    b=Math.ceil(b*6);

    if(a>b){
        document.querySelector('h1').textContent='🚩Player 1 Won';
        document.querySelector('h1').style.fontSize='8rem';
    }

    if(a<b){
        document.querySelector('h1').textContent='🚩Player 2 Won';
        document.querySelector('h1').style.fontSize='8rem';
    }

    if(a===b){
        document.querySelector('h1').textContent="It's a tie, please play again";
        document.querySelector('h1').style.fontSize='5rem';
    }

    var imgattValue1='./images/dice' + a + '.png';
    var imgattValue2='./images/dice' + b + '.png';

    document.querySelector('.img1').setAttribute('src', imgattValue1);
    document.querySelector('.img2').setAttribute('src', imgattValue2);


}

function resetWebsite(){
    document.querySelector('h1').textContent="Let's Play";
    document.querySelector('.img1').setAttribute('src','./images/dice6.png');
    document.querySelector('.img2').setAttribute('src','./images/dice6.png');
    document.querySelector('h1').style.fontSize='8rem';
}

setInterval(resetWebsite, 5000);
