function submitAnswers(){
    var total = 10;
    var score = 0;
    var Classic = 0;
    var Chic = 0;
    var Whimsical = 0;
    var Bohemian = 0;
    var Avantgarde = 0;
//Get user input
    var q1 = document.forms["quizForm"] ["q1"].value;
    var q2 = document.forms["quizForm"] ["q2"].value;
    var q3 = document.forms["quizForm"] ["q3"].value;
    var q4 = document.forms["quizForm"] ["q4"].value;
    var q5 = document.forms["quizForm"] ["q5"].value;
    var q6 = document.forms["quizForm"] ["q6"].value;
    var q7 = document.forms["quizForm"] ["q7"].value;
    var q8 = document.forms["quizForm"] ["q8"].value;
    var q9 = document.forms["quizForm"] ["q9"].value;
    var q10 = document.forms["quizForm"] ["q10"].value;
    
// Validation
  for(var i = 1; i<= total; i++){
          if( eval('q' + i) == null || eval('q' + i) == ''){
        alert("you missed question " + i);
        return false;
    }
  }
    
    //check answers
    for(var i = 1; i<= total; i++){
        if(eval('q' + i) == "a"){
            Classic+=10;
        }
        if(eval('q' + i) == "b"){
          Chic+=10;
        }
        if(eval('q' + i) == "c"){
          Whimsical+=10;
        }
        if(eval('q' + i) == "d"){
          Bohemian+=10;
        }
        if(eval('q' + i) == "e"){
          Avantgarde+=10;
        }

    }
      alert('You are ' + Classic + "% of Classic\n" + 'You are ' +  Chic + "% of Chic\n" + 'You are ' +  Whimsical + "% of Whimsical\n" + 'You are ' +  Bohemian + "% of Bohemian\n" + 'You are ' +  Avantgarde + "% of Avant-garde\n");
    //display results
    var results = document.getElementById('results');
    resutls.innerHTML= '<h3> You scored <span' + score + '</span> out of <span>' + total + '</span></h3>';
    
  
    
    return false;
}