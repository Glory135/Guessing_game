$(document).ready(function(){

    let number= Math.floor(Math.random() * 100) + 1;;
    let guessCount=1;

    $('#startAgain').click(function(){
            location.reload();
    });
    $('#submitGuess').click(function(){
   let   inputGuess=   $('#inputGuess').val();
        if (inputGuess < number) {
            guessCount++;
            $('#notification').html('too low').css('background-color', 'red');
          let  previous=  inputGuess+", " ;
            $('#previous').append(previous);
        } 
        else if (inputGuess > number){
            guessCount++;
            $('#notification').html('too high').css('background-color', 'red');
            let  previous=  inputGuess+", " ;
            $('#previous').append(previous);
        } 
        else if(inputGuess == number){
            $('#notification').html('correct').css('background-color', 'green');
            let  previous=  inputGuess+", " ;
            $('#previous').append(previous);
            $('#submitGuess').css("display", 'none');
            $('#startAgain').css('display', 'block');
        }
        else{    
            $('#notification').html('imvalid entry!!').css('background-color', 'red');
        }
        if (guessCount == 11) {
            $('#notification').html('game over').css('background-color', 'red');
            $('#submitGuess').css("display", 'none');
            $('#startAgain').css('display', 'block');
        }
    });
});