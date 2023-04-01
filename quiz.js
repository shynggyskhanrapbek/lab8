$(document).ready(function(){
    
    let answers = ["16 December 1991","Tenge","Kazakh","Astana","Russia"];
    let questions = ["When did Kazakhstan proclaim independence?","Which is the currency of Kazakhstan?","Which is the official language of Kazakhstan?","Which is the capital of Kazakhstan?","Which country is to the north of Kazakhstan?"]
    let choice_options = [["22 February 1948","28 May 1984","21 August 1976","16 December 1991"],["Rouble","Ashrafi","Tenge","Dinar"],["Amharic","Kazakh","Persian","Kurdish"],["Omsk","Astana","Talghar","Orenburg"],["Mongolia","Russia","Nepal","Iran"]]

    let quizHtml = '';
    for (let i = 0; i < questions.length; i++) {
        quizHtml += '<div class="question">' + (i + 1) +'. '+ questions[i] + '</div>';
        let answerOptions = choice_options[i];
        for (let j = 0; j < answerOptions.length; j++) {
            quizHtml += '<label><input type="radio" name="q' + i + '" value="' + answerOptions[j] + '"> ' + answerOptions[j] + '</label><br>';
        }
    }
    $('#quizs').append(quizHtml);

    $("button").click(function(event) {
        let countCorrect = 0;
        for (let i = 0; i < questions.length; i++) {
            let selectedAnswer = $('input[name=q' + i + ']:checked').val();
            if (selectedAnswer === answers[i]) {
                countCorrect += 1;
            }
        }        
        
        $("#results").remove();
        $("#quizs").append("<h2 id = 'results'>You've got: " + countCorrect + "</h2>");
    }); 
});

