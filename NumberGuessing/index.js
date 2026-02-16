const minNUm=1;
const maxNum=100;
const ans=Math.floor(Math.random()*(maxNum-minNUm+1))+minNUm;
console.log(ans);
let attempts=0;
let guess;
let running=true;
while(running){
    guess=window.prompt(`Guess a number between ${minNUm}-${maxNum}:`);
   guess=Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess<minNUm || guess>maxNum){
        window.alert(`Please enter a number between ${minNUm} and ${maxNum}`);
    }
    else{
        attempts++;
        if(guess < ans){
            window.alert("Too low! Try again.");
    }
    else if(guess > ans)
    {
        window.alert("Too high! Try again.");
    }
    else{
        window.alert(`Congratulations! You guessed the number ${ans} in ${attempts} attempts.`);
        running = false;
    }  
  }
}