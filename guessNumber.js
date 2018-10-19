// guess the number

var randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

document.querySelector('#number').disabled = true;

// document.querySelector('#myBtn').addEventListener('click', function(){
//     var number=document.querySelector('#myBtn').value
//     console.log(number)
// }) 

function clickNumber(x) {
    console.log(x, randomNumber)
    document.getElementById('number').value = x
    
    if (x == randomNumber) {   
        document.querySelector('.comment').textContent='Congratulation! You guess the number.';
    } else if( x < randomNumber){
        document.querySelector('.comment').textContent='The number you entered is smaller than the generated one. Try again'; 
    } else {
        document.querySelector('.comment').textContent='The number you entered is bigger than the generated one. Try again';  
    }

}