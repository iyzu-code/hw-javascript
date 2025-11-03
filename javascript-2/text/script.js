    // TODO 1: Declare & assign variables pointing to the corresponding element(s)
    // statement should be the "statement" div
    // optionButtons should be all the elements within the "options" div
    // explanation should be the "explanation" div

let statement = document.getElementById("statement")

let optionButtons = document.querySelectorAll("#options button")

let explanation = document.getElementById("explanation")

    // TODO 2: Declare & assign a variable called fact
    // Its value should be an object with a statement, true/false answer, and explanation 

let fact = {
    statement: "this is statement", 
    answer: "true", 
    explanation: "this is explanation"
}

    // TODO 3: Set the text of the statement element to the fact's statement

statement.textContent = fact.statement
optionButtons.textContent = fact.answer
explanation.textContent = fact.explanation

    // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
    // disable(button) should set the button element's attribute "disabled" to the value ""
    // enable(button) should remove the attribute "disabled" from the button element
const disable = x => {
    x.setAttribute("disabled", "")
};

const enable = x => {
    x.removeAttribute("disabled")
};

// disable(1);
// enable(0);

    // TODO 5: Declare an isCorrect function that compares a guess to the right answer
    // isCorrect(guess) should return true if the guess matches the fact's answer
function isCorrect(button) {
  return button.value === fact.answer;
}

console.log(isCorrect(0));
console.log(isCorrect(1));

    // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
    // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element

    // TODO 7: Within the event handler function, 
    // Use a for loop to disable all the option buttons

    // TODO 8: Within the event handler function,
    // Get the guessed value from the clicked button
    // Use a conditional to compare the guess to the fact's answer
    // and add the "correct"/"incorrect" class as appropriate

// optionButtons.forEach(button => button.addEventListener("click", (event) => {
//     console.log("clicked")
//     console.log(optionButtons)
//     console.log(event.target.value)
//     explanation.style.display = "block"
//     disable(0);
//     disable(1);

//     answer = event.target.value
//     if(answer === fact.answer) {
//         console.log("correct")
//         event.target.classList.add("correct")
//     } else {
//         console.log("incorrect")
//         event.target.classList.add("incorrect")
//     }
// }))

for(let btn of optionButtons) {
    btn.addEventListener("click", (event) => {
        console.log("clicked")
        console.log(optionButtons)
        console.log(event.target.value)
        explanation.style.display = "block"
        for(let btn of optionButtons) {
            disable(btn)
        }

        answer = event.target
        answer.value === fact.answer ? answer.classList.add("correct") : answer.classList.add("incorrect")

        if (isCorrect(event.target)) {
            event.target.classList.add("correct");
        } else {
            event.target.classList.add("incorrect");
        }
    })
}



















    // TODO 1: Declare & assign variables pointing to the corresponding element(s)
    // statement should be the "statement" div
    // optionButtons should be all the elements within the "options" div
    // explanation should be the "explanation" div


    // TODO 2: Declare & assign a variable called fact
    // Its value should be an object with a statement, true/false answer, and explanation 
    

    
    // TODO 3: Set the text of the statement element to the fact's statement

        

    // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
    // disable(button) should set the button element's attribute "disabled" to the value ""
    // enable(button) should remove the attribute "disabled" from the button element



    // TODO 5: Declare an isCorrect function that compares a guess to the right answer
    // isCorrect(guess) should return true if the guess matches the fact's answer
    


    // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
            // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element


            // TODO 7: Within the event handler function, 
            // Use a for loop to disable all the option buttons


            // TODO 8: Within the event handler function,
            // Get the guessed value from the clicked button
            // Use a conditional to compare the guess to the fact's answer
            // and add the "correct"/"incorrect" class as appropriate

    