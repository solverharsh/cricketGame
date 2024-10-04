let computerChose='';

const computerPlays = () => {
    let randomNumber = Math.random()*3;

    if(randomNumber>0 && randomNumber<1){
        computerChose = 'Bat';
    }else if(randomNumber>1 && randomNumber<2){
        computerChose = 'Ball';
    }else{
        computerChose='Stump'
    }
    document.querySelector('#computer-message').innerText = `Computer chose ${computerChose} !! `;
}

const Batting = () =>{
    document.querySelector('#user-message').innerText = `User chose Bat !!`
    console.log('You have chosen Bat !!');
    computerPlays();
    let resultMsg;
    if(computerChose=='Ball'){
        resultMsg = 'User Won !!';
    }else if(computerChose=='Stump'){
        resultMsg = 'Computer Won !!';
    }else{ 
        resultMsg = 'Its a tie !!';
    }
    document.querySelector('#output-message').innerText = resultMsg; 
}

const Balling = () =>{
    document.querySelector('#user-message').innerText = `User chose Ball !!`
    computerPlays();
    if(computerChose=='Ball'){
        resultMsg = 'Its a tie !!';
    }else if(computerChose=='Stump'){
        resultMsg = 'User Won !!';  
    }else{
        resultMsg = 'Computer Won !!';
    }
    document.querySelector('#output-message').innerText = resultMsg; 
}
const Stump = ()=>{
    document.querySelector('#user-message').innerText = `User chose stump !!`
    computerPlays();
    if(computerChose=='Ball'){
        resultMsg = 'Computer Won !!'; 
    }else if(computerChose=='Stump'){
        resultMsg = 'Its a tie !!';     
    }else{
        resultMsg = 'User Won !!';
    }
    document.querySelector('#output-message').innerText = resultMsg; 
}