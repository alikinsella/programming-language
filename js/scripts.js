


//front-end logic
$(document).ready(function() {
  $("#questions").submit(function(event) {
    var languageInput = $("input#language").val();
    $(".language").text(languageInput);
    
    var question4 = $("input:radio[name=question4]:checked").val();
    if (question4 === "a") {
      $(".results #answerA").show();
    } else if (question4 === "b") {
      $(".results #answerB").show();
    } else if (question4 === "c") {
      $(".results #answerC").show();
    } else if (question4 === "d") {
      $(".results #answerD").show();
    }
    
    var peeBreaks = parseInt($("input#peeBreaks").val());
    if (peeBreaks <= 1) {
      alert("You should probably drink more water!");
    } else if (peeBreaks >=2) {
      alert("You could probably drink less water.");
    }

    
    event.preventDefault();
  });
});
