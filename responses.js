function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
   else  if (input == "i need contact number of delivery man") {
        return "You can contact here-900000000001";
    } 
      else if (input == "when will i get my order?") {
        return "You will get you order within 20mins!!";
    } 
    else  if (input == "I Love Kanhu Restaurant!" || "Heart Clicked!") {
        return "Thank You!!!";
    } 
    else {
        return "Try asking something else!";
    }
}