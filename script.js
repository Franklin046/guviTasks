const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
/* Media Queries for Responsiveness */
@media (min-width: 600px) {
  #display {
    font-size: 3rem;
  }

  button {
    font-size: 2rem;
    padding: 25px;
  }
}

